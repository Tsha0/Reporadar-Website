import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#F4F6FB",
          100: "#E5EAF3",
          200: "#C5D0E4",
          300: "#94A6C5",
          400: "#5E78A6",
          500: "#3A537F",
          600: "#243D63",
          700: "#172B4A",
          800: "#0F2143",
          900: "#0A172F",
        },
        coral: {
          50: "#FFF3EE",
          100: "#FFE3D6",
          200: "#FFC6AC",
          300: "#FFAA88",
          400: "#FF9B7A",
          500: "#F87E58",
          600: "#E0613B",
          700: "#B94A2A",
        },
        cream: {
          50: "#FBF8F3",
          100: "#F5F0E6",
          200: "#EBE3D0",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(15, 33, 67, 0.18)",
        glow: "0 0 0 1px rgba(255, 155, 122, 0.35), 0 18px 40px -16px rgba(255, 155, 122, 0.45)",
      },
      backgroundImage: {
        "radar-grid":
          "radial-gradient(circle at 50% 50%, rgba(15,33,67,0.08) 0%, rgba(15,33,67,0) 60%), repeating-radial-gradient(circle at 50% 50%, rgba(15,33,67,0.06) 0px, rgba(15,33,67,0.06) 1px, transparent 1px, transparent 56px)",
      },
    },
  },
  plugins: [],
};

export default config;
