/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Lato']
      },
      colors: {
        "bg-black": "#171717",
        "iff-orange": "#CC7755",
        "body-grey": "#888888",
        "bg-dark-grey": "#212121",
        "bg-light-grey": "#2E2E2E",
        "heading-black": "#171717",
        "number-grey": "#E7E7E7",
        'white': '#ffffff',
        "search": 'AAAAAA'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
