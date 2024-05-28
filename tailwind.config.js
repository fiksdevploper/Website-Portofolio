/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'putih': '#ffffff',
        'unggu': '#4637C8',
        'ungutua': '#3D2DC9',
        'gelap': '#141420',
        'metal': '#353444',
        'graywhite': '#1C1C2C',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}