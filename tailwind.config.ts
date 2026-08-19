import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#EEF3FC",
          100: "#D8E3F7",
          200: "#B0C5EC",
          300: "#7B9BDB",
          400: "#4570C4",
          500: "#1F4CA6",
          600: "#123B88",
          700: "#0D3678",
          800: "#061F55",
          900: "#04143A",
          950: "#020C25",
        },
        leaf: {
          50: "#EFFAF1",
          100: "#D6F5DC",
          200: "#A9E9B7",
          300: "#6FD787",
          400: "#33BF57",
          500: "#05A83F",
          600: "#048733",
          700: "#046A2A",
          800: "#065223",
          900: "#06421F",
        },
        lime: {
          400: "#A8D227",
          500: "#8CC63F",
        },
        ember: {
          50: "#FFF3ED",
          100: "#FFE3D4",
          200: "#FFC2A6",
          300: "#FF9A6D",
          400: "#FF7233",
          500: "#FC5012",
          600: "#E23C06",
          700: "#B92E08",
        },
      },
      fontFamily: {
        sans: [
          "Inter Variable",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "sans-serif",
        ],
      },
      maxWidth: {
        wrap: "1200px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(6,31,85,.04), 0 8px 24px -8px rgba(6,31,85,.12)",
        lift: "0 18px 48px -16px rgba(6,31,85,.28)",
        glow: "0 0 0 1px rgba(5,168,63,.25), 0 12px 40px -12px rgba(5,168,63,.35)",
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(120deg,#05A83F 0%,#061F55 52%,#FC5012 100%)",
        "navy-mesh":
          "radial-gradient(1000px 500px at 12% 8%, rgba(5,168,63,.22), transparent 60%), radial-gradient(900px 520px at 88% 18%, rgba(252,80,18,.18), transparent 60%), radial-gradient(900px 600px at 50% 110%, rgba(31,76,166,.42), transparent 62%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
        spinslow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "pulse-ring": {
          "0%": { transform: "scale(.85)", opacity: "0.7" },
          "100%": { transform: "scale(1.6)", opacity: "0" },
        },
      },
      animation: {
        "fade-up": "fade-up .7s cubic-bezier(.16,.84,.44,1) both",
        float: "float 6s ease-in-out infinite",
        spinslow: "spinslow 26s linear infinite",
        marquee: "marquee 32s linear infinite",
        shimmer: "shimmer 2.4s linear infinite",
        "pulse-ring": "pulse-ring 2.4s ease-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
