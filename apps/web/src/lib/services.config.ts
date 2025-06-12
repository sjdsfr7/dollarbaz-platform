export type DigitalService = {
  name: string;
  slug: string;
  description: string;
  icon: React.ReactNode;
  available: boolean;
  requiresAuth?: boolean;
  comingSoon?: boolean;
};

export const services: DigitalService[] = [
  {
    name: 'Virtual Cards',
    slug: 'virtual-cards',
    description: 'Anonymous prepaid cards for online payments.',
    icon: '/icons/cards.svg',
    available: true,
    requiresAuth: true,
    comingSoon: false,
  },
  {
    name: 'VPS / VPN',
    slug: 'vps',
    description: 'Private servers and secure VPNs for global access.',
    icon: '/icons/vps.svg',
    available: true,
    requiresAuth: true,
    comingSoon: false,
  },
  {
    name: 'Virtual Numbers',
    slug: 'virtual-numbers',
    description: 'Temporary or long-term numbers for verification.',
    icon: '/icons/numbers.svg',
    available: true,
    requiresAuth: true,
    comingSoon: false,
  },
  {
    name: 'PayPal Accounts',
    slug: 'paypal',
    description: 'Global accounts setup and access.',
    icon: '/icons/paypal.svg',
    available: false,
    requiresAuth: true,
    comingSoon: true,
  },
  {
    name: 'Crypto Exchange',
    slug: 'exchange',
    description: 'Buy/sell USDT, BTC, ETH with IRR, USD, EUR.',
    icon: '/icons/crypto.svg',
    available: false,
    requiresAuth: true,
    comingSoon: true,
  },
  {
    name: 'Payment Gateways',
    slug: 'payment-gateway',
    description: 'Third-party gateway access for business.',
    icon: '/icons/gateway.svg',
    available: false,
    requiresAuth: true,
    comingSoon: true,
  },
  {
    name: 'Digital Banking',
    slug: 'digital-banking',
    description: 'Offshore and multi-currency account setups.',
    icon: '/icons/banking.svg',
    available: false,
    requiresAuth: true,
    comingSoon: true,
  },

];
