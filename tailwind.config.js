/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        aktiv: ['Aktiv Grostek'],
        'roboto-mono': 'Roboto Mono'
      },
      colors: {
        'gray-m': '#D9D9D9',
        'black-m': '#111111'
      },
      fontSize: {
        'large-m': '6.2rem',
        large: '7rem',
        medium: '4rem',
        'medium-m': '2.55rem',
        regular: '5rem'
      }
    }
  },
  plugins: []
};
