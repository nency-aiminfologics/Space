/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}', // Include all files in the app directory
      './components/**/*.{js,ts,jsx,tsx}',
     './app/sections/**/*.{js,ts,jsx,tsx}', // Include all files in the components directory
     
    ],
    theme: {
      screens: {
        sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      },
      extend: {
        
        
            fontFamily: {
              sora: ['Sora', 'sans-serif'],
              inter: ['Inter', 'sans-serif'],
              chivo: ['Chivo', 'sans-serif'],
              'chivo-mono': ['Chivo Mono', 'monospace'],
              },     

              animation: {
                'spin-slow': 'spin 8s linear infinite',
              },
       
      },
    },
    plugins: [],
  };