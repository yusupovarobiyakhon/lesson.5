/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","./index.html"],
  theme: {
    extend: {},
     screens: {
      "mb": { max: '510px' }
    }
  },
  plugins: [],
}

