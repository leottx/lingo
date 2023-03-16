/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        keysRow: 'repeat(32, 1fr)',
      },
    },
  },
  plugins: [],
};
