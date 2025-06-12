import { z } from 'zod';

export const OrderCompletedSchema = z.object({
  event: z.literal('order.completed'),
  timestamp: z.string().datetime(),
  data: z.object({
    orderId: z.string().uuid(),
    userId: z.string().uuid(),
    type: z.enum(['VIRTUAL_CARD', 'VN', 'VPS', 'PAYPAL']),
    metadata: z.record(z.any()),
  }),
});

export const OrderFailedSchema = z.object({
  event: z.literal('order.failed'),
  timestamp: z.string().datetime(),
  data: z.object({
    orderId: z.string().uuid(),
    reason: z.string(),
  }),
});
