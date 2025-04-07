import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db/client';
import crypto from 'crypto';

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN!;

function checkTelegramAuth(data: Record<string, string>, botToken: string) {
  const { hash, ...rest } = data;

  const sorted = Object.keys(rest)
    .sort()
    .map((key) => `${key}=${rest[key]}`)
    .join('\n');

  const secret = crypto.createHash('sha256').update(botToken).digest();
  const computedHash = crypto
    .createHmac('sha256', secret)
    .update(sorted)
    .digest('hex');

  return computedHash === hash;
}

export async function POST(req: NextRequest) {
  const data = await req.json();

  // Validate Telegram signature
  if (!checkTelegramAuth(data, TELEGRAM_BOT_TOKEN)) {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 403 });
  }

  const { id, username, photo_url } = data;
  const sessionId = crypto.randomUUID();

  // Upsert user
  await prisma.telegramUser.upsert({
    where: { telegramId: String(id) },
    update: { username, photoUrl: photo_url, sessionId },
    create: {
      telegramId: String(id),
      username,
      photoUrl: photo_url,
      sessionId,
    },
  });

  // Set secure session cookie
  return NextResponse.json(
    { ok: true },
    {
      headers: {
        'Set-Cookie': `session=${sessionId}; Path=/; HttpOnly; Secure; SameSite=Lax`,
      },
    },
  );
}
