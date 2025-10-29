import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A1F44',
        secondary: '#00B3B3',
        accent: '#66D9D9',
        neutral: '#F5F5F5',
        navy: '#00254C',
        silver: '#C0C0C0'
      },
      fontFamily: {
        heading: ['var(--font-heading)', 'Montserrat', 'sans-serif'],
        body: ['var(--font-body)', 'Playfair Display', 'serif']
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(circle at 20% 20%, rgba(102, 217, 217, 0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(0, 179, 179, 0.15), transparent 55%)'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};

export default config;
