export interface PayPalIssuer {
  queueOrder(orderId: string, userEmail: string): Promise<void>;
  markAsFulfilled(orderId: string, credentials: any): Promise<void>;
}
