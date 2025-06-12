import { CardProvider } from '../contracts/card';

export const DummyCardProvider: CardProvider = {
  async issueCard({ amount, currency, type }) {
    return {
      cardNumber: '4111-xxxx-xxxx-1234',
      expiry: '12/27',
      cvv: '123',
      metadata: { issuedBy: 'dummy', type, amount, currency },
    };
  },
};
