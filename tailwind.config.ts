import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        header: ['var(--font-header)'],
        body: ['var(--fontRoboto)'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'bg-primary': "#205269",
        'button-color': "#32A7B1",
        'primary-dark': "#0E455F",
        'black': "#000",
        'light-black': "#333",
        'text-black': "#242424",
        
      }
    },
  },
  plugins: [],
};
export default config;
