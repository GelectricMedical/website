/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./resources/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /grid-cols-.*/, // Matches grid-cols-[4fr] or grid-cols-[4fr_6fr]
    },
    {
      pattern: /grid-rows-.*/, // Matches grid-rows-[0fr] or grid-rows-[0fr_0fr_0fr]
    },
  ],
}

