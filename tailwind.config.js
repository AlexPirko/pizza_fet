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
                primaryDark: '#4f0f13',
                secondary: '#ed2d3a',
                
                dark: '#3b2829',
                white: '#fff',
                light: '#fcfcfc',
            },
        },
    },
    plugins: [],
};
