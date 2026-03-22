/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        card: "rgb(var(--card) / <alpha-value>)",
        cardHover: "rgb(var(--card-hover) / <alpha-value>)",
        primary: "rgb(var(--primary) / <alpha-value>)",
        primaryDark: "rgb(var(--primary-dark) / <alpha-value>)",
        textMain: "rgb(var(--text-main) / <alpha-value>)",
        textMuted: "rgb(var(--text-muted) / <alpha-value>)",
        sectionAlt: "rgb(var(--section-alt) / <alpha-value>)",
        cardAlt: "rgb(var(--card-alt) / <alpha-value>)",
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #ff7e7e, #ff5757)',
      }
    },
  },
  plugins: [],
}
