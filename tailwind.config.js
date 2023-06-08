/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
      },
      colors: {
        // backgrounddark: "#111827",
        backgrounddark: "#111111",
        primary: "#191919",
      },
    },
  },
  plugins: [],
};
