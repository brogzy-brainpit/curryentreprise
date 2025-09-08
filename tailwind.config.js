// /** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      keyframes: {
    'color-fade': {
      '0%': { color: '#000' },
      '50%': { color: '#ff6600' },
      '100%': { color: '#000' },
    },
  },
  animation: {
    'color-fade': 'color-fade 3s ease-in-out infinite',
  },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
         fontSize:{
        'regular': 'clamp(24px, 3vw, 32px)',
        'button': 'clamp(14px, 3.5vw, 18px)',
        'heading': 'clamp(60px, 10vw, 90px)',
        'footer': 'clamp(40px, 8vw, 60px)',
        'heading2': 'clamp(45px, 8vw, 80px)',
        'para': 'clamp(16px, 1vw, 38px)',
      },
      lineHeight:{
         'regular': 'clamp(24px, 3vw, 32px)',
        'button': 'clamp(14px, 3.5vw, 18px)',
        'heading': 'clamp(60px, 10vw, 90px)',
        'footer': 'clamp(44px, 8vw, 65px)',
        'heading2': 'clamp(48px, 8vw, 84px)',
        'para': 'clamp(18px, 1vw, 28px)',
      },
      colors:{
        'brand-text':"#1c2218",
        'brand-text-dark':"#f7f0bc",
        'brand-accent':"#FDEB87", //accent for links, hover state 
        'brand-secondaryx':"#FDEB87", //orange best
        'brand-secondaryy':"#10B981", //emerald best
        'brand-secondary':"#94b141", //blue best
        'brand-background':"#f7fbe2",
        'brand-backgroundz':"#CFCFCF",
        'brand-background-dark':"#1c2218",
      },
      fontFamily:{
        'normal':['Helvetica_Neue, Helvetica'],
        'custom-condensed':['NewSpiritCondensed','Helvetica_Neue', 'Helvetica'],
        'custom':['NewSpirit','Helvetica_Neue', 'Helvetica'],
        'custom2':['Neuebit','Helvetica_Neue', 'Helvetica'],
      }
    },
  },
 plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
