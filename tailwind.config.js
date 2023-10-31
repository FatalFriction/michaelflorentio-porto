/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        blueberry: {
          "primary": "#1F4762",
          "secondary": "#FDA300",
          "accent": "#FFC619",
          "neutral": "#E09F5A",
          "base-100": "#faf7f5",
          "info": "#153040",
          "success": "#182833",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui"),require('tailwind-scrollbar-hide')],
}
