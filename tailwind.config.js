const colors = require("tailwindcss/colors")
const plugin = require("tailwindcss/plugin")

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      "sm": {"max": "800px"},
      "lg": {"min": "1400px"},
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.emerald,
      blue: colors.blue,
      red: colors.red,
    },
  },
  plugins: [
    plugin(function ({addVariant, e}) {
      // polyfill upcoming :enter pseudo selecter which combines hover and focus
      addVariant("enter", ({modifySelectors, separator}) => {
        modifySelectors(({className}) => {
          return `.${e(`enter${separator}${className}`)}:hover,.${e(`enter${separator}${className}`)}:focus`
        })
      })
    }),
  ],
}
