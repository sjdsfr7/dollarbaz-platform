import { prisma } from '@/lib/db/client';
import { sendTON } from '@/lib/wallets/sendTON';
import { sendUSDT } from '@/lib/wallets/sendUSDT';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { id } = await req.json();

  const exchange = await prisma.starsExchange.findUnique({ where: { id } });
  if (!exchange || exchange.status !== 'pending') {
    return NextResponse.json(
      { ok: false, error: 'Invalid exchange' },
      { status: 400 },
    );
  }

  const wallet = await prisma.userWallet.findUnique({
    where: { telegramId: exchange.telegramId },
  });
  if (!wallet) {
    return NextResponse.json(
      { ok: false, error: 'Wallet not found' },
      { status: 400 },
    );
  }

  try {
    let txResult;
    if (exchange.payoutType === 'TON') {
      txResult = await sendTON(
        wallet.tonAddress!,
        exchange.starsAmount * 0.01,
        exchange.reference,
      );
    } else if (exchange.payoutType === 'USDT') {
      txResult = await sendUSDT(
        wallet.usdtAddress!,
        exchange.starsAmount * 0.01,
      );
    } else {
      throw new Error('Unsupported payout type');
    }

    await prisma.starsExchange.update({
      where: { id },
      data: { status: 'paid' },
    });

    return NextResponse.json({ ok: true, tx: txResult });
  } catch (err: any) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 },
    );
  }
}
