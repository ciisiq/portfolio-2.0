import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/components/*.{tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
    },

    variants: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active'],
    },

    corePlugins: {
      preflight: false,
    },
  },
  plugins: [require('daisyui')],
};
export default config;
