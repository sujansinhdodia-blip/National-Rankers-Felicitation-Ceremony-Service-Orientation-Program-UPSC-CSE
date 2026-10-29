import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F0F4FC",
          100: "#E2EAF8",
          200: "#C4D4F0",
          300: "#9FBCE6",
          400: "#6B98D6",
          500: "#3B72C2",
          600: "#2455A4",
          700: "#1A4182",
          800: "#132E61",
          900: "#0B1F4B", // Primary official navy
          950: "#06112C",
        },
        maroon: {
          50: "#FDF4F5",
          100: "#FBE8EA",
          200: "#F6D2D6",
          300: "#EFAEB6",
          400: "#E17C8A",
          500: "#C74B5D",
          600: "#A92D40",
          700: "#8B1E2D", // Primary official maroon
          800: "#741925",
          900: "#5F141F",
          950: "#360A10",
        },
        gold: {
          50: "#FDFBF3",
          100: "#FAF6E2",
          200: "#F4ECC1",
          300: "#ECDF99",
          400: "#DFCD69",
          500: "#D3B73E",
          600: "#C9A227", // Primary ceremonial gold
          700: "#A7821B",
          800: "#86661A",
          900: "#6E5319",
          950: "#3F2E09",
        },
        offwhite: "#F8F9FB",
        tricolour: {
          saffron: "#FF9933",
          white: "#FFFFFF",
          green: "#138808",
          ashoka: "#000080",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        official: "0 4px 20px -2px rgba(11, 31, 75, 0.08), 0 2px 6px -1px rgba(11, 31, 75, 0.04)",
        "official-lg": "0 10px 30px -4px rgba(11, 31, 75, 0.12), 0 4px 10px -2px rgba(11, 31, 75, 0.06)",
        gold: "0 4px 20px -2px rgba(201, 162, 39, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
