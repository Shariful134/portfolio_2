/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#302C42",
        secondery: "#AFA6D9",
      },
    },
  },
  plugins: [require("daisyui")],
};
