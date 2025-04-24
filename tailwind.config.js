/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}', // Include all files in the app directory
      './components/**/*.{js,ts,jsx,tsx}',
     './app/sections/**/*.{js,ts,jsx,tsx}', // Include all files in the components directory
     
    ],
    theme: {
      extend: {
        screens: {
          xs: '375px',  // Custom extra-small breakpoint
          sm: '640px',  // Default small breakpoint
          md: '768px',  // Default medium breakpoint
          lg: '1024px', // Default large breakpoint
          xl: '1280px', // Default extra-large breakpoint
          '2xl': '1440px', // Custom double extra-large breakpoint
        },
        
            fontFamily: {
                chivo: ["'Chivo'", "sans-serif"],
                sora: ["'Sora'", "sans-serif"],
                inter: ["'Inter'", "sans-serif"],
              },     
       
      },
    },
    plugins: [],
  };