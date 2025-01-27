/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "375px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
        extend: {
            colors: {
                primary: 'var(--primary-color)',
                secondary: 'var(--secondary-color)',
                background: 'var(--bg-color)',
                text: 'var(--text-color)',
                cardBackground: 'var(--card-bg)',
                navBackground: 'var(--nav-bg)',
                overlay: 'var(--overlay-color)',
                navBackgroundSmall: 'var(--nav-bg-sm)',
                aboutBackground: 'var(--about-bg)',
            },
        },
    },
    plugins: [],
    darkMode: 'class',
};
