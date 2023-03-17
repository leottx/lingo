/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        keysRow: 'repeat(32, 1fr)',
      },
      keyframes: {
        flip: {
          '0%': {
            transform: 'rotateX(0)',
            backgroundColor: '#525252',
            border: '2px solid #a3a3a3',
          },
          '45%': {
            transform: 'rotateX(90deg)',
            backgroundColor: '#525252',
            border: '2px solid #a3a3a3',
          },
          '55%': {
            transform: 'rotateX(90deg)',
            backgroundColor: 'var(--tile-bg)',
            border: ' 2px solid transparent',
          },
          '100%': {
            transform: 'rotateX(0)',
            backgroundColor: 'var(--tile-bg)',
            border: '2px solid transparent',
          },
        },
        recoil: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'flip-tile': 'flip 0.5s ease forwards',
        'recoil-tile': 'recoil 0.1s ease-in-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
};
