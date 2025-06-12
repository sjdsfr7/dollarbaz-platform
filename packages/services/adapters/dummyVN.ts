import { VNProvider } from '../contracts/vn';

export const DummyVNProvider: VNProvider = {
  async requestNumber(service) {
    return { number: '+15551234567', sessionId: 'dummy-session-abc' };
  },

  async getSMS(sessionId) {
    return { code: '123456' };
  },

  async releaseNumber(sessionId) {
    return;
  },
};
