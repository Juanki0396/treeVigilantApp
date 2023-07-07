/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{html,js,ts,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
        "backgroundImage":{
            "forest": "url('./public/forest_bg.jpg')"
        }
    },
  },
  plugins: [],
}

