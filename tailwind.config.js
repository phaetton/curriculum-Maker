/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      'minism': '0.4rem',
      'minibase': '0.6rem',
      'minilg': '0.8rem',
      'minixl': '0.9rem',
    }
  },
  plugins: [],
}

