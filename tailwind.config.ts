import type { Config } from "tailwindcss";

const config: Config = {
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      'md-reg': ['var(--font-new-york-medium-regular)', 'serif'],
      'md-reg-italic': ['var(--font-new-york-medium-regular-italic)', 'serif'],
      'md-bold': ['var(--font-new-york-medium-bold)', 'serif'],
      'md-bold-italic': ['var(--font-new-york-medium-bold-italic)', 'serif'],
    },
    extend: {
      colors: {
        'green': '#b6cd84',
        'white': '#fffafa',
        'black': '#212217',
      },
    },
  },
  plugins: [],
};

export default config;
