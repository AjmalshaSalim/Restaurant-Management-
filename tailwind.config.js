/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        "size-200": "200% 200%",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        // You can add more custom fonts here if needed
      },
    },
  },
  plugins: [],
});

