/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#FAF3E0", // Light Gold background
          dark: "hsl(40, 76%, 81%)", // Darker gold shade requested
          border: "#E7D8B4",
        },
        cream: {
          warm: "#FFF9EE",
        },
        purple: {
          brand: "#3B0764",
          secondary: "#5B21B6",
        },
        orange: {
          cta: "#F97316",
        },
        text: {
          primary: "#111827",
          secondary: "#374151",
        }
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
      borderRadius: {
        luxury: "24px",
      }
    },
  },
  plugins: [],
}
