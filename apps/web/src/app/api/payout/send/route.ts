import { NextRequest, NextResponse } from 'next/server';
import { sendTON } from '@/lib/wallets/sendTON';
import { sendUSDT } from '@/lib/wallets/sendUSDT';

export async function POST(req: NextRequest) {
  const { type, to, amount, reference } = await req.json();

  try {
    let result;
    if (type === 'TON') {
      result = await sendTON(to, amount, reference);
    } else if (type === 'USDT') {
      result = await sendUSDT(to, amount);
    } else {
      throw new Error('Unsupported payout type');
    }

    return NextResponse.json({ ok: true, tx: result });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: err.message },
      { status: 500 },
    );
  }
}
