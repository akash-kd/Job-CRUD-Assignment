/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        pri: '10px',
        sec: '5px',
      },
      borderRadius: {
        pri: '10px',
        sec: '5px',
      },
      colors: {
        primary: '#1597E4',
        red: '#D86161',
        ash: {
          light: '#FAFAFA',
          mid: '#E6E6E6',
          medium: '#7A7A7A',
          dark: '#212121',
          darker: '#182021',
        },
      },
    },
  },
  plugins: [],
};
