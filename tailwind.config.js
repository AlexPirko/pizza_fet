/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '20px',
            screens: {
                xl: '1280px',
                lg: '969px',
                md: '768px',
                sm: '540px',
            },
        },
        extend: {
            colors: {
                primary: '#b6474e',
                primaryHover: '#b65d47',
                primaryDark: '#532124',
                secondary: '#fcf665',
                dark: '#3b2829',
                white: '#fff',
                light: '#fcfcfc',
            },
        },
    },
    plugins: [],
};
