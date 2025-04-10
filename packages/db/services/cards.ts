// packages/db/services/cards.ts

import { prisma } from '@db/client';
import { CardRequestStatus } from '@prisma/client';

// 1. Create a new card request
export async function createVirtualCardRequest(data: {
  userId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  country: string;
  cardCurrency: string;
  cardType?: string;
  fundingAmount: number;
  fundingMethod: string;
  cardLabel?: string;
  billingAddress?: string;
  postalCode?: string;
  paymentSource: string;
  proofOfPaymentUrl?: string;
  isFirstCard?: boolean;
  expectedMonthlySpend?: number;
  industryOrUseCase?: string;
}) {
  const request = await prisma.virtualCardRequest.create({
    data: {
      ...data,
      status: CardRequestStatus.PENDING,
    },
  });

  return request.id;
}

// 2. Get all requests by user
export async function getUserCardRequests(userId: string) {
  return prisma.virtualCardRequest.findMany({
    where: { userId },
    orderBy: { createdAt: 'desc' },
  });
}

// 3. Admin-only update
export async function adminUpdateRequestStatus(
  id: string,
  status: CardRequestStatus,
  notes?: string,
) {
  return prisma.virtualCardRequest.update({
    where: { id },
    data: {
      status,
      adminNotes: notes,
    },
  });
}
