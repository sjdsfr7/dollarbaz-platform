import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1e1e1e',
        foreground: '#dee2e6',
        primary: '#aeb4b8',
        secondary: '#dee2e6',
        accent: {
          blue: '#00d0ff',
          orange: '#ff7b00',
          yellow: '#ffcc00',
        },
      },
      fontFamily: {
        sans: ['Orbitron', 'sans-serif'],
      },
      borderColor: {
        border: '#E5E7EB', // اینو اضافه کن
      },
    },
  },
  plugins: [],
};

export default config;
