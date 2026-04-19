import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Clash Display'", "sans-serif"],
        body:    ["'DM Sans'",       "sans-serif"],
        mono:    ["'JetBrains Mono'","monospace"],
      },
      colors: {
        brand: {
          blue:          "#4B5CC4",
          blueLight:     "#6B7FE3",
          blueDark:      "#3345A8",
          orange:        "#F5A623",
          orangeLight:   "#FFB940",
          orangeDark:    "#D4891A",
          ink:           "#0D0D0D",
          inkSoft:       "#2A2A2A",
          inkMuted:      "#555555",
          surface:       "#FFFFFF",
          surface1:      "#F7F8FF",
          surface2:      "#EEF0FF",
          surface3:      "#E4E7FF",
        },
      },
    },
  },
  plugins: [],
};
export default config;
