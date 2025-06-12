import { z } from 'zod';

export const WalletTransactionCreatedSchema = z.object({
  event: z.literal('wallet.transaction.created'),
  timestamp: z.string().datetime(),
  data: z.object({
    userId: z.string().uuid(),
    walletId: z.string().uuid(),
    amount: z.number().positive(),
    currency: z.enum(['USD', 'USDT', 'BTC']),
    type: z.enum(['TOPUP', 'ORDER_SERVICE', 'WITHDRAWAL']),
    ref: z.string(),
  }),
});
