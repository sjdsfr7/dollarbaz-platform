export interface BaseEvent<T extends string, D> {
  event: T;
  data: D;
  timestamp: string; // ISO string
}

// --- Event Names ---
export type EventName =
  | 'wallet.transaction.created'
  | 'order.completed'
  | 'order.failed'
  | 'service.provision.started'
  | 'kyc.verified'; // more later

// --- Unified Event Union ---
export type PlatformEvent =
  | WalletTransactionCreated
  | OrderCompleted
  | OrderFailed
  | ServiceProvisionStarted
  | KycVerified;

// --- Specific Event Types ---
export type WalletTransactionCreated = BaseEvent<
  'wallet.transaction.created',
  {
    userId: string;
    walletId: string;
    amount: number;
    currency: 'USD' | 'USDT' | 'BTC';
    type: 'TOPUP' | 'ORDER_SERVICE' | 'WITHDRAWAL';
    ref: string;
  }
>;

export type OrderCompleted = BaseEvent<
  'order.completed',
  {
    orderId: string;
    userId: string;
    type: 'VIRTUAL_CARD' | 'VN' | 'VPS' | 'PAYPAL';
    metadata: Record<string, any>;
  }
>;

export type OrderFailed = BaseEvent<
  'order.failed',
  {
    orderId: string;
    reason: string;
  }
>;

export type ServiceProvisionStarted = BaseEvent<
  'service.provision.started',
  {
    orderId: string;
    service: string;
    userId: string;
  }
>;

export type KycVerified = BaseEvent<
  'kyc.verified',
  {
    userId: string;
    adminId: string;
  }
>;
