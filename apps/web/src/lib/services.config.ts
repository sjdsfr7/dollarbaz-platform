export type Service = {
  name: string;
  slug: string;
  description: string;
  icon: string;
  available: boolean;
};

export const services: Service[] = [
  {
    name: 'Virtual Cards',
    slug: 'virtual-cards',
    description: 'Anonymous prepaid cards for online payments.',
    icon: '/icons/cards.svg',
    available: true,
  },
  {
    name: 'VPS / VPN',
    slug: 'vps',
    description: 'Private servers and secure VPNs for global access.',
    icon: '/icons/vps.svg',
    available: true,
  },
  {
    name: 'Virtual Numbers',
    slug: 'virtual-numbers',
    description: 'Temporary or long-term numbers for verification.',
    icon: '/icons/numbers.svg',
    available: true,
  },
  {
    name: 'PayPal & Wise',
    slug: 'paypal',
    description: 'Global accounts setup and access.',
    icon: '/icons/paypal.svg',
    available: false,
  },
  {
    name: 'Crypto Exchange',
    slug: 'exchange',
    description: 'Buy/sell USDT, BTC, ETH with IRR, USD, EUR.',
    icon: '/icons/crypto.svg',
    available: false,
  },
  {
    name: 'Payment Gateways',
    slug: 'payment-gateway',
    description: 'Third-party gateway access for business.',
    icon: '/icons/gateway.svg',
    available: false,
  },
  {
    name: 'Digital Banking',
    slug: 'digital-banking',
    description: 'Offshore and multi-currency account setups.',
    icon: '/icons/banking.svg',
    available: false,
  },
];
