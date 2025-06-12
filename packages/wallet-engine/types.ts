export enum TransactionType {
  TOPUP = 'TOPUP',
  ORDER_SERVICE = 'ORDER_SERVICE',
  WITHDRAWAL = 'WITHDRAWAL',
  ADJUSTMENT = 'ADJUSTMENT',
}

export interface Wallet {
  id: string;
  userId: string;
  currency: string;
  balance: number;
  locked: number;
}

export interface Transaction {
  id: string;
  walletId: string;
  amount: number;
  type: TransactionType;
  ref: string;
  note?: string;
  timestamp: Date;
}
