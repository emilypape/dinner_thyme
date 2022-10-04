/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '280px',

        sm: '414px',

        md: '768px',

        lg: '992px',

        xl: '1960px',
      },
    },
  },
  plugins: [],
};
