import { PrismaClient, Currency, TransactionType } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { emit } from '@services/events'; // assuming event emitter
import { prisma } from '@db/client';

const ensureWallet = async (userId: string, currency: Currency) => {
  const existing = await prisma.wallet.findFirst({
    where: { userId, currency },
  });
  if (existing) return existing;

  return prisma.wallet.create({
    data: {
      userId,
      currency,
      balance: new Decimal(0),
      locked: new Decimal(0),
    },
  });
};

export const walletService = {
  async getBalance(userId: string, currency: Currency) {
    const wallet = await ensureWallet(userId, currency);
    return {
      balance: wallet.balance,
      locked: wallet.locked,
    };
  },

  async credit(
    userId: string,
    currency: Currency,
    amount: Decimal,
    ref: string,
  ) {
    await prisma.$transaction(async (tx) => {
      const wallet = await ensureWallet(userId, currency);
      await tx.wallet.update({
        where: { id: wallet.id },
        data: { balance: { increment: amount } },
      });

      await tx.transaction.create({
        data: {
          walletId: wallet.id,
          type: 'TOPUP',
          amount,
          ref,
        },
      });

      await emit('wallet.transaction.created', {
        userId,
        walletId: wallet.id,
        amount: amount.toNumber(),
        currency,
        type: 'TOPUP',
        ref,
        timestamp: new Date().toISOString(),
      });
    });
  },

  async debit(
    userId: string,
    currency: Currency,
    amount: Decimal,
    ref: string,
  ) {
    await prisma.$transaction(async (tx) => {
      const wallet = await ensureWallet(userId, currency);
      const fresh = await tx.wallet.findUnique({ where: { id: wallet.id } });
      if (!fresh || fresh.balance.minus(amount).lessThan(0)) {
        throw new Error('Insufficient balance');
      }

      await tx.wallet.update({
        where: { id: wallet.id },
        data: { balance: { decrement: amount } },
      });

      await tx.transaction.create({
        data: {
          walletId: wallet.id,
          type: 'ORDER_SERVICE',
          amount: amount.negated(),
          ref,
        },
      });

      await emit('wallet.transaction.created', {
        userId,
        walletId: wallet.id,
        amount: amount.negated().toNumber(),
        currency,
        type: 'ORDER_SERVICE',
        ref,
        timestamp: new Date().toISOString(),
      });
    });
  },

  async lockFunds(userId: string, currency: Currency, amount: Decimal) {
    await prisma.$transaction(async (tx) => {
      const wallet = await ensureWallet(userId, currency);
      const fresh = await tx.wallet.findUnique({ where: { id: wallet.id } });
      if (!fresh || fresh.balance.minus(amount).lessThan(0)) {
        throw new Error('Insufficient balance to lock');
      }

      await tx.wallet.update({
        where: { id: wallet.id },
        data: {
          balance: { decrement: amount },
          locked: { increment: amount },
        },
      });
    });
  },

  async unlockFunds(userId: string, currency: Currency, amount: Decimal) {
    await prisma.$transaction(async (tx) => {
      const wallet = await ensureWallet(userId, currency);
      const fresh = await tx.wallet.findUnique({ where: { id: wallet.id } });
      if (!fresh || fresh.locked.minus(amount).lessThan(0)) {
        throw new Error('Insufficient locked funds');
      }

      await tx.wallet.update({
        where: { id: wallet.id },
        data: {
          balance: { increment: amount },
          locked: { decrement: amount },
        },
      });
    });
  },
};
