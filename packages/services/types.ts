export enum ServiceType {
  VIRTUAL_NUMBER = 'VIRTUAL_NUMBER',
  VIRTUAL_CARD = 'VIRTUAL_CARD',
  PAYPAL = 'PAYPAL',
  VPS = 'VPS',
}

export type OrderStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';

export interface ServiceRequestContext {
  userId: string;
  currency: 'USD' | 'USDT' | 'BTC';
  amount: number;
  orderId: string;
  metadata?: Record<string, any>;
}

// Response format is service-specific, so we use generics:
export interface ServiceResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}
