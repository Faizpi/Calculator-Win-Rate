/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-dark': '#050505',
                'accent-blue': '#00f2ff',
                'accent-purple': '#7000ff',
            },
            fontFamily: {
                'main': ['Outfit', 'sans-serif'],
                'mono': ['Space Grotesk', 'monospace'],
            },
        },
    },
    plugins: [],
}
