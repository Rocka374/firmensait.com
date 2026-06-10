import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "#E8DED0",
        input: "#E8DED0",
        ring: "#B8914F",
        background: "#FAF8F4",
        foreground: "#171717",
        primary: {
          DEFAULT: "#B8914F",
          foreground: "#FFFFFF",
          dark: "#8A6A34",
          soft: "#EFE5D2",
        },
        secondary: {
          DEFAULT: "#5F5A52",
          foreground: "#FFFFFF",
          light: "#F7F2EA",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F7F2EA",
          foreground: "#5F5A52",
        },
        accent: {
          DEFAULT: "#EFE5D2",
          foreground: "#8A6A34",
        },
        popover: {
          DEFAULT: "#FFFFFF",
          foreground: "#171717",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#171717",
        },
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;