/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Padauk", "Montserrat", "sans-serif"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "Padauk", "Montserrat", "sans-serif"],
        montserrat: ["Montserrat", "Poppins", "Padauk", "sans-serif"],
        serif: ["serif", "Padauk", "Montserrat", "serif"],
      },
      colors: {
        primary: "#ffffff",
        secondary: "#000000",
        accent: "#ff0000",
      }
    },
  },
  plugins: [],
};
