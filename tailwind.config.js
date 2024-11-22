/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cerezo: {
          primary: "#f9d2db",
          secondary: "#450c23",
          light: "#FAD6D6",
          dark: "#9C252F",
        },
      },
    },
  },
  plugins: [],
};
