import { VPSProvider } from '../contracts/vps';

export const DummyVPSProvider: VPSProvider = {
  async requestServer({ region, spec }) {
    return {
      ip: '192.168.0.1',
      username: 'root',
      password: 'pass1234',
      metadata: { region, spec, provider: 'dummy' },
    };
  },
};
