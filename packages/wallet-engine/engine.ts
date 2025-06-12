import { PrismaClient } from '@db/client';
import { TransactionType, Wallet } from './types';
import { Decimal } from '@prisma/client/runtime/library';

const prisma = new PrismaClient();

export async function getBalance(walletId: string) {
  const wallet = await prisma.wallet.findUnique({ where: { id: walletId } });
  if (!wallet) throw new Error('Wallet not found');
  return { balance: wallet.balance, locked: wallet.locked };
}

export async function lockFunds(walletId: string, amount: number) {
  return await prisma.$transaction(async (tx) => {
    const wallet = await tx.wallet.findUnique({ where: { id: walletId } });
    if (!wallet) throw new Error('Wallet not found');

    const available = wallet.balance - wallet.locked;
    if (available < amount) throw new Error('Insufficient available balance');

    return await tx.wallet.update({
      where: { id: walletId },
      data: { locked: { increment: amount } },
    });
  });
}

export async function unlockFunds(walletId: string, amount: number) {
  return await prisma.wallet.update({
    where: { id: walletId },
    data: { locked: { decrement: amount } },
  });
}

export async function debit(
  walletId: string,
  amount: number,
  ref: string,
  type: TransactionType,
  note?: string,
) {
  return await prisma.$transaction(async (tx) => {
    const wallet = await tx.wallet.findUnique({ where: { id: walletId } });
    if (!wallet) throw new Error('Wallet not found');

    if (wallet.locked < amount) throw new Error('Insufficient locked funds');

    await tx.wallet.update({
      where: { id: walletId },
      data: {
        balance: { decrement: amount },
        locked: { decrement: amount },
      },
    });

    return await tx.transaction.create({
      data: {
        walletId,
        amount: -amount,
        type,
        ref,
        note,
      },
    });
  });
}

export async function credit(
  walletId: string,
  amount: number,
  ref: string,
  type: TransactionType,
  note?: string,
) {
  return await prisma.$transaction(async (tx) => {
    await tx.wallet.update({
      where: { id: walletId },
      data: { balance: { increment: amount } },
    });

    return await tx.transaction.create({
      data: {
        walletId,
        amount: amount,
        type,
        ref,
        note,
      },
    });
  });
}
