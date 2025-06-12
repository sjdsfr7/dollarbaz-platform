import { NextResponse } from 'next/server';
import { db } from 'packages/db/client'; // adjust import path if needed

export async function POST(req: Request) {
  try {
    const { email, phone, platform } = await req.json();

    if (!email || !platform) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    await db.notifyLead.create({
      data: {
        email,
        phone,
        platform,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('NotifyLead API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
