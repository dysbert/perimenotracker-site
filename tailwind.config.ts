import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{astro,html,js,ts,jsx,tsx,md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        umbra: "#2C2825",
        creta: "#F5F0E8",
        siena: "#C4714A",
        salvia: "#7A9E8E",
        lavanda: "#7C6E8A",
        ambar: "#E8B86D",
        pizarra: "#9EA3A8"
      },
      fontFamily: {
        display: ['"DM Serif Display"', "Georgia", "serif"],
        body: ["Inter", "-apple-system", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
