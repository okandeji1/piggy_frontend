module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
    },
    purge: [
        "./components/**/*.{js,ts,jsx,tsx}",
        "./container/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // @ignore-prettier
                primary: "var(--color-primary)",
                secondary: "var(--color-secondary)",
                tertiary: "var(--color-tertiary)",
                succes: "var(--color-success)",
                error: "var(--color-error)",
                transparent: "var(--color-transparent)",
                lightPrimary: "var(--color-light-primary)",
            },
            minHeight: {
                "1/4": "25%",
                "1/2": "50%",
                "3/4": "75%",
                full: "100%",
            },
            spacing: {
                13: "13rem",
            },
            variants: {},
        },
    },
    variants: {},
    plugins: [],
};