import { NextRequest, NextResponse } from 'next/server';
import { bot } from '@/lib/telegram/bot';

export async function POST(req: NextRequest) {
  const body = await req.json();
  await bot.handleUpdate(body);
  return NextResponse.json({ status: 'ok' });
}
