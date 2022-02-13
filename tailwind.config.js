module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          0: "#0DE82F",
          50: "#0ce83161",
          100: "#433C44"
        },
        secondary: {
          0: "#433C44"
        },
        dashboardBg: "#F6F7FA"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};
