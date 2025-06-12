export interface CardProvider {
  issueCard(params: {
    amount: number;
    currency: string;
    type: 'RECHARGEABLE' | 'SINGLE_USE';
  }): Promise<{
    cardNumber: string;
    expiry: string;
    cvv: string;
    metadata: Record<string, any>;
  }>;
}
