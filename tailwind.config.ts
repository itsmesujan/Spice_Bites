import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        spice: {
          50:  "#FFF8F0",
          100: "#FEEFD9",
          200: "#FCD9A8",
          300: "#F9BE6E",
          400: "#F59E38",
          500: "#E07B2E",
          600: "#C85E18",
          700: "#A0440F",
          800: "#7B330B",
          900: "#5C2508",
        },
        gold: {
          400: "#D4A017",
          500: "#BF8A30",
          600: "#A67020",
        },
        curry: {
          900: "#1C1008",
          800: "#2D1F0E",
          700: "#3D2B1F",
          600: "#5C3D28",
        },
        cream: {
          50:  "#FDFAF5",
          100: "#FFF5E6",
          200: "#F5E6CC",
        },
      },
      fontFamily: {
        sans:    ["var(--font-noto-sans-jp)", "sans-serif"],
        display: ["var(--font-playfair)", "serif"],
        jp:      ["var(--font-noto-serif-jp)", "serif"],
      },
      backgroundImage: {
        "spice-gradient": "linear-gradient(135deg, #E07B2E 0%, #BF8A30 100%)",
        "dark-overlay":   "linear-gradient(to bottom, rgba(28,16,8,0.35) 0%, rgba(28,16,8,0.65) 100%)",
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "fade-in":    "fadeIn 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
