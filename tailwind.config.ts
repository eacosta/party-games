import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "pop-in": {
          "0%": { transform: "scale(0.8)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        "confetti-rise": {
          "0%": { transform: "translateY(0) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(-90vh) rotate(720deg)", opacity: "0" },
        },
      },
      animation: {
        "pop-in": "pop-in 0.25s ease-out",
        float: "float 4s ease-in-out infinite",
        "confetti-rise": "confetti-rise 2.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
