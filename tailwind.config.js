module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    0: "#4F45BA",
                    50: "#aea7fa40",
                    100: "#433C44"
                },
                secondary: {
                    0: "#433C44"
                },
                dashboardBg: "#f6faff"
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [require("@tailwindcss/forms")]
};