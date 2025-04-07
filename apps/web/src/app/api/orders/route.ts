import { db } from '@db/client';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { amount, cardType } = body;

    // TEMP: Replace with real user ID once Clerk is wired
    const userId = 'anon-test-user';

    const order = await db.order.create({
      data: {
        service: 'virtual-cards',
        userId,
        data: { amount, cardType },
        status: 'pending',
      },
    });

    return NextResponse.json({ success: true, order });
  } catch (err) {
    console.error('Error creating order:', err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
