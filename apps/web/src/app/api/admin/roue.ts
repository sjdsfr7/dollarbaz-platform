import { prisma } from '@/lib/db/client';
import { NextResponse } from 'next/server';

export async function GET() {
  const exchanges = await prisma.starsExchange.findMany({
    orderBy: { createdAt: 'desc' },
    take: 50,
  });

  return NextResponse.json({ exchanges });
}
