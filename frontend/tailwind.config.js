/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#023d02"
      }
    },
  },
  plugins: [require("flowbite/plugin")],
}

