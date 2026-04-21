import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // RetailPuzzle Brand System
        primary: {
          DEFAULT: "#0D1321",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#5B6AF0",
          foreground: "#FFFFFF",
          warm: "#F76D3C",
          light: "#EEF0FE",
          hover: "#4A59E0",
        },
        success: {
          DEFAULT: "#22C55E",
          light: "#DCFCE7",
        },
        warning: {
          DEFAULT: "#F59E0B",
          light: "#FEF3C7",
        },
        danger: {
          DEFAULT: "#EF4444",
          light: "#FEE2E2",
        },
        surface: "#FFFFFF",
        bg: "#F7F8FC",
        muted: {
          DEFAULT: "#6B7280",
          foreground: "#374151",
        },
        border: "#E5E7EB",
        // ShadCN compatibility
        background: "#F7F8FC",
        foreground: "#0D1321",
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#0D1321",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#0D1321",
        },
        secondary: {
          DEFAULT: "#F3F4F6",
          foreground: "#374151",
        },
        input: "#E5E7EB",
        ring: "#5B6AF0",
        // Loyalty tiers
        bronze: "#CD7F32",
        silver: "#C0C0C0",
        gold: "#FFD700",
        platinum: "#E5E4E2",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.7" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["2rem", { lineHeight: "2.5rem" }],
        "4xl": ["3rem", { lineHeight: "3.5rem" }],
        "5xl": ["4rem", { lineHeight: "4.5rem" }],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "112": "28rem",
        "128": "32rem",
      },
      borderRadius: {
        lg: "0.75rem",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
        "card-hover": "0 10px 30px -5px rgb(91 106 240 / 0.15), 0 4px 12px -4px rgb(0 0 0 / 0.1)",
        product: "0 4px 20px -2px rgb(0 0 0 / 0.08)",
        "product-hover": "0 20px 40px -8px rgb(91 106 240 / 0.2)",
        ai: "0 0 20px rgb(91 106 240 / 0.3)",
        glow: "0 0 30px rgb(91 106 240 / 0.4)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "linear-gradient(135deg, #0D1321 0%, #1a2235 50%, #0D1321 100%)",
        "accent-gradient": "linear-gradient(135deg, #5B6AF0 0%, #7C3AED 100%)",
        "warm-gradient": "linear-gradient(135deg, #F76D3C 0%, #F59E0B 100%)",
        "ai-gradient": "linear-gradient(135deg, #5B6AF0 0%, #818CF8 50%, #A78BFA 100%)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in-right": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 10px rgb(91 106 240 / 0.3)" },
          "50%": { boxShadow: "0 0 25px rgb(91 106 240 / 0.6)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "countdown-tick": {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-50%)", opacity: "0" },
          "51%": { transform: "translateY(50%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "scroll-x": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in-right": "slide-in-right 0.3s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        shimmer: "shimmer 2s infinite",
        float: "float 3s ease-in-out infinite",
        "scroll-x": "scroll-x 30s linear infinite",
      },
      transitionTimingFunction: {
        "retail": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
