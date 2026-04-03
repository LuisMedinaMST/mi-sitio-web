/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-profundo': '#0f2a44',
        'turquesa-tech': '#1fa4a9',
        'gris-carbon': '#3a3f45',
        'nube-clara': '#f4f6f8',
      },
    },
  },
  plugins: [],
}