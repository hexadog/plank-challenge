module.exports = {
    content: [
        "./*.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    '50': '#fff8ed',
                    '100': '#fff0d4',
                    '200': '#ffdea8',
                    '300': '#ffc571',
                    '400': '#ffa238',
                    '500': '#fe8817',
                    '600': '#ef6807',
                    '700': '#c64e08',
                    '800': '#9d3e0f',
                    '900': '#7e3510',
                    '950': '#441806',
                },
                secondary: '#3b82f6', // blue-500
                warrior: '#8b5cf6', // purple-500
                legend: '#ef4444', // red-500
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}