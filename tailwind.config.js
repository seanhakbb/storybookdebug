const plugin = require("tailwindcss/plugin");
const { fontFamily } = require("tailwindcss/defaultTheme");
const fontelloIcons = require("./tailwind.fontello.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.tsx", "./src/**/*.tsx", "./src/**/*.stories.tsx"],

  theme: {
    fontFamily: {
      sans: ["var(--font-roboto)", ...fontFamily.sans],
      icon: ["var(--font-demo)"],
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents(fontelloIcons);
    }),
  ],
};
