/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#121212', // Deep Charcoal
        primary: '#BB86FC',    // Soft Purple
        secondary: '#03DAC6',  // Aqua Teal
        textPrimary: '#FFFFFF',// Pure White
        textSecondary: '#333', // Light Gray
        error: '#CF6679',      // Soft Red
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Replace 'Roboto' with any of the suggested fonts
        heading: ['Montserrat', 'sans-serif'], // Example for heading font
      },
    },
  },
  plugins: [],
};
