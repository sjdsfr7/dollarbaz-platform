const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './apps/web/src/**/*.{js,ts,jsx,tsx,mdx}',
    './packages/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Orbitron', 'IranYekanX', ...defaultTheme.fontFamily.sans],
        body: ['Inter', 'Vazirmatn FD', ...defaultTheme.fontFamily.sans],
        label: [
          'Orbitron',
          'IranYekanX',
          'Vazirmatn',
          ...defaultTheme.fontFamily.sans,
        ],
      },
    },
  },
  plugins: [],
};
