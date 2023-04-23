/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      fontFamily: {
        reggaeone: "Reggae One, cursive",
      },
      transition: {
        slow: "transition duration-500",
      },
    },
  },
  plugins: [],
};
