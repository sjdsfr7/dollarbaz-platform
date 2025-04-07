import { prisma } from '@/lib/db/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const cookie = req.headers.get('cookie');
  const session = cookie?.match(/session=([^;]+)/)?.[1];

  if (!session)
    return NextResponse.json({ error: 'Not logged in' }, { status: 401 });

  const user = await prisma.telegramUser.findUnique({
    where: { sessionId: session },
  });
  if (!user)
    return NextResponse.json({ error: 'User not found' }, { status: 404 });

  const wallet = await prisma.userWallet.findUnique({
    where: { telegramId: user.telegramId },
  });
  const exchanges = await prisma.starsExchange.findMany({
    where: { telegramId: user.telegramId },
    orderBy: { createdAt: 'desc' },
  });

  return NextResponse.json({ wallet, exchanges });
}
