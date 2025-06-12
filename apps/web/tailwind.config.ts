import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}', '../../packages/ui/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'oklch(var(--background) / <alpha-value>)',
        foreground: 'oklch(var(--foreground) / <alpha-value>)',
        card: 'oklch(var(--card) / <alpha-value>)',
        'card-foreground': 'oklch(var(--card-foreground) / <alpha-value>)',
        popover: 'oklch(var(--popover) / <alpha-value>)',
        'popover-foreground':
          'oklch(var(--popover-foreground) / <alpha-value>)',
        primary: 'oklch(var(--primary) / <alpha-value>)',
        'primary-foreground':
          'oklch(var(--primary-foreground) / <alpha-value>)',
        secondary: 'oklch(var(--secondary) / <alpha-value>)',
        'secondary-foreground':
          'oklch(var(--secondary-foreground) / <alpha-value>)',
        muted: 'oklch(var(--muted) / <alpha-value>)',
        'muted-foreground': 'oklch(var(--muted-foreground) / <alpha-value>)',
        accent: 'oklch(var(--accent) / <alpha-value>)',
        'accent-foreground': 'oklch(var(--accent-foreground) / <alpha-value>)',
        destructive: 'oklch(var(--destructive) / <alpha-value>)',
        border: 'oklch(var(--border) / <alpha-value>)',
        input: 'oklch(var(--input) / <alpha-value>)',
        ring: 'oklch(var(--ring) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['InterVariable', 'VazirmatnFD', 'sans-serif'],
        heading: ['Orbitron', 'IranYekanX', 'sans-serif'],
        label: ['Orbitron', 'IranYekanX', 'VazirmatnFD', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
      borderColor: {
        border: '#E5E7EB', // اینو اضافه کن
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
