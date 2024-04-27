/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { max: "576px" }, // Mobile
        md: { min: "577px", max: "1100px" }, // Table
        xl: { min: "1100px", max: "5000px" }, // Desktop
      },
      spacing: {
        32: "31rem",
        30: "25rem",
        "23rem": "23rem",
        "5rem": "5rem",
        "8rem": "8rem",
        "9rem": "10rem",
        "10rem": "12rem",
        "40rem": "40rem",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
