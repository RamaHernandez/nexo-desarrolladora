/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        ink: '#111111',
        stonebrand: '#8A7968',
        sand: '#E9E0D3',
        cloud: '#F6F3EF',
        graphite: '#242424',
        copper: '#B77A4B',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(17, 17, 17, 0.12)',
      },
    },
  },
  plugins: [],
}
