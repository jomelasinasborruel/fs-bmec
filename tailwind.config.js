const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00a74f",
      },
    },
    fontFamily: {
      terminatorTwo: ['"Terminator Two"', ...defaultTheme.fontFamily.sans],
      caviarDreams: ['"Caviar Dreams"', ...defaultTheme.fontFamily.sans],
      lato: ["Lato", ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
};

// sm	640px	@media (min-width: 640px) { ... }
// md	768px	@media (min-width: 768px) { ... }
// lg	1024px	@media (min-width: 1024px) { ... }
// xl	1280px	@media (min-width: 1280px) { ... }
// 2xl	1536px	@media (min-width: 1536px) { ... }
