import { ServiceType } from './types';

// Import contracts
import { VNProvider } from './contracts/vn';
import { CardProvider } from './contracts/card';
import { PayPalIssuer } from './contracts/paypal';
import { VPSProvider } from './contracts/vps';

// Import dummy adapters
import { DummyVNProvider } from './adapters/dummyVN';
import { DummyCardProvider } from './adapters/dummyCard';
import { DummyPayPalIssuer } from './adapters/dummyPayPal';
import { DummyVPSProvider } from './adapters/dummyVPS';

export const VN_PROVIDERS: Record<ServiceType.VIRTUAL_NUMBER, VNProvider> = {
  [ServiceType.VIRTUAL_NUMBER]: DummyVNProvider,
};

export const CARD_PROVIDERS: Record<ServiceType.VIRTUAL_CARD, CardProvider> = {
  [ServiceType.VIRTUAL_CARD]: DummyCardProvider,
};

export const PAYPAL_PROVIDERS: Record<ServiceType.PAYPAL, PayPalIssuer> = {
  [ServiceType.PAYPAL]: DummyPayPalIssuer,
};

export const VPS_PROVIDERS: Record<ServiceType.VPS, VPSProvider> = {
  [ServiceType.VPS]: DummyVPSProvider,
};
