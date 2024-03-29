/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './core/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    fontFamily: {
      sans: "'Graphik', Arial, sans-serif",
      heading: 'Graphik, Arial, sans-serif',
      body: "'Graphik', Arial, sans-serif",
    },
    extend: {
      colors: {
        'brand-dark-blue': '#10069F',
        'brand-gray': '#777777',
        'hienfeld-gray': '#EFEFEF',
        'hienfeld-ultra-marine': '#1703C7',
        'hienfeld-light-blue': '#9BBDED',
        'hienfeld-deep-sea': '#0A0466',
        'private-instruments': '#851EAA',
        'private-renaissance': '#690064',
        'private-trip': '#0648A3',
        'private-car': '#465800',
        'private-art': '#A11C9B',
        'private-accidents': '#4B8700',
        'private-abroad': '#090C66',
        'private-yacht': '#296A9A',
        'business-fraud': '#118884',
        'business-money': '#DBD314',
        'business-policy': '#EC8160',
        'business-instruments': '#A456C0',
        'business-travel': '#296AC5',
        'business-kidnap': '#28B07D',
        'business-accidents': '#A5BF3F',
        'business-liability': '#F58D52',
        'business-art': '#CA74D9',
        'business-wegas': '#708FCB',
        'business-cyber': '#36D1B5',
        'business-warranty': '#BAD964',
        'business-directors': '#FFB36D',
      },
    },
  },
  plugins: [],
};
