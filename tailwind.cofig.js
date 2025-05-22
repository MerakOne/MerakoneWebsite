/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      
      screens: {
        xs: "400px",  // Extra small screens
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px", // Ensure this is valid (Tailwind does not have `xs` by default)
      },
      
    },
  },
  plugins: [
    require("flowbite/plugin"),
  ],
};
