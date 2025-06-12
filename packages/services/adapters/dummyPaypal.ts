import { PayPalIssuer } from '../contracts/paypal';

export const DummyPayPalIssuer: PayPalIssuer = {
  async queueOrder(orderId, userEmail) {
    console.log(`(Dummy) Queued PayPal order for ${userEmail}`);
  },

  async markAsFulfilled(orderId, credentials) {
    console.log(`(Dummy) Fulfilled order ${orderId}`, credentials);
  },
};
