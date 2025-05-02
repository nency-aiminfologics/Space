/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './app/**/*.{js,ts,jsx,tsx}', // Include all files in the app directory
      './components/**/*.{js,ts,jsx,tsx}',
     './app/sections/**/*.{js,ts,jsx,tsx}', // Include all files in the components directory
     
    ],
    theme: {
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