import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                // Providence Legal Co. Brand Colors
                blush: {
                    50: '#fef8f7',
                    100: '#fdf1ef',
                    200: '#fbe3df',
                    300: '#f5d6d2', // Main Soft Blush Pink
                    400: '#f0c9c4',
                    500: '#eabbb6',
                    600: '#e5aea8',
                    700: '#dfa09a',
                    800: '#da938c',
                    900: '#d4857e',
                },
                rose: {
                    50: '#f9f0f2',
                    100: '#f3e1e5',
                    200: '#e7c3cb',
                    300: '#dba5b1',
                    400: '#cf8797',
                    500: '#b76e79', // Main Rose Gold Metallic
                    600: '#a35b66',
                    700: '#8f4853',
                    800: '#7b3540',
                    900: '#67222d',
                },
                ivory: {
                    50: '#ffffff',
                    100: '#fffcfa',
                    200: '#fff8f3', // Main Ivory/Warm White
                    300: '#fff4ec',
                    400: '#fff0e5',
                    500: '#ffecde',
                    600: '#ffe8d7',
                    700: '#ffe4d0',
                    800: '#ffe0c9',
                    900: '#ffdcc2',
                },
            },
            fontFamily: {
                sans: ['var(--font-lora)', 'Lora', 'Georgia', 'serif'],
                serif: ['var(--font-playfair)', 'Playfair Display', 'Georgia', 'serif'],
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
}

export default config
