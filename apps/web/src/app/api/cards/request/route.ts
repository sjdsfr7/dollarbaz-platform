import { NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { z } from 'zod';
import { createVirtualCardRequest } from '@dollarbaz/db/services/cards';

const CardRequestSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  phoneNumber: z.string(),
  country: z.string(),

  cardCurrency: z.string(),
  cardType: z.string().optional(),
  fundingAmount: z.number(),
  fundingMethod: z.string(),
  cardLabel: z.string().optional(),

  billingAddress: z.string().optional(),
  postalCode: z.string().optional(),

  paymentSource: z.string(),
  proofOfPaymentUrl: z.string().optional(),

  isFirstCard: z.boolean().optional(),
  expectedMonthlySpend: z.number().optional(),
  industryOrUseCase: z.string().optional(),
});

export async function POST(req: Request) {
  const { userId } = auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const parse = CardRequestSchema.safeParse(body);

  if (!parse.success) {
    return NextResponse.json(
      { error: 'Invalid input', issues: parse.error.issues },
      { status: 400 },
    );
  }

  try {
    const requestId = await createVirtualCardRequest({
      ...parse.data,
      userId,
    });

    return NextResponse.json({ success: true, requestId }, { status: 200 });
  } catch (err) {
    console.error('Card request error:', err);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
