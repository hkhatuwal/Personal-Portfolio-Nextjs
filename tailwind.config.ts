import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      dropShadow:{
        'main':[
            '10px 10px 19px #1c1e22',
            '-10px -10px 19px #262a2e'

        ],
      },
      colors:{
        bg:"#212428",
        bg2:"linear-gradient(145deg, #1e2024, #23272b)",
        primary:"#EF750D",
        portfolio_image_bg:"#f1f0ec"
      },
      fontFamily: {
        secondary: [
          "Lato', sans-serif",

        ],
      },


    },
  },
  plugins: [],
}
export default config
