import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { prisma } from 'db/client';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const sessionId = req.cookies.get('session')?.value;

  // Skip if no Telegram session
  if (!sessionId) return res;

  // Try fetching Telegram user
  try {
    const user = await prisma.telegramUser.findUnique({
      where: { sessionId },
    });

    if (user) {
      res.headers.set('x-telegram-user-id', user.telegramId);
      res.headers.set('x-telegram-username', user.username || '');
    }
  } catch (err) {
    console.error('Middleware error loading Telegram user:', err);
  }

  return res;
}

export const config = {
  matcher: [
    '/((?!api/telegram-auth|_next|favicon.ico|.*\\.(png|jpg|jpeg|svg|css|js)).*)',
  ],
};
