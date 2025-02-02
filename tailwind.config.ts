import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Qatar flag colors
        'qatar-maroon': '#8B1538',
        'qatar-white': '#FFFFFF',
        primary: {
          DEFAULT: '#8B1538',
          dark: '#6A102A',
        },
        secondary: {
          DEFAULT: '#F5F5F5',
          dark: '#1A1A1A',
        },
        background: {
          light: '#FFFFFF',
          dark: '#121212',
        },
      },
    },
  },
  plugins: [],
};

export default config;
