/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Vos couleurs personnalisées
        primary: "#FF0000",
        secondary: "#00FF00",
        accent: "#0000FF",
        "primary-light": "#FF3333",
        "primary-dark": "#CC0000",
        blueOnglet: "#2563eb",
        pinkOnglet: "#db2777",
        orangeOnglet: "#ea580c",
        greenOnglet: "#15803d",
      },
    },
  },
  plugins: [],
};
