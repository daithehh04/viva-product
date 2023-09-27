/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pageComponent/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgGreen: 'linear-gradient(90deg, #29B662 0%, #24BD63 0.01%, #1A9B4F 100%)',
        bgYellow: 'linear-gradient(180deg, #FFF8DC 13.18%, #FFD220 54.87%)',
        menuOverlaySty:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.29) 40.05%, rgba(0, 0, 0, 0.59) 100%)',
        menuOverlayDes:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.37) 41.89%, rgba(0, 0, 0, 0.81) 100%)',
        bgCircle: 'linear-gradient(0deg, rgba(255, 210, 32, 0.00) 33.65%, #FFD220 100%)',
        overlayBanner:
          'linear-gradient(270deg, #FFF 0%, rgba(255, 255, 255, 0.49) 63.88%, rgba(255, 255, 255, 0.00) 100%)',
        overlayBanner2: 'linear-gradient(0, #FFF 0%, rgba(255, 255, 255, 0.49) 63.88%, rgba(255, 255, 255, 0.00) 100%)',
        overlayTrip:
          'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 54.17%, rgba(0, 0, 0, 0.30) 67.61%, rgba(0, 0, 0, 0.49) 78.08%, rgba(0, 0, 0, 0.60) 100%);'
      },
      colors: {
        primaryColor: '#FFD220',
        textColor: '#171717'
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        optima: ['Optima'],
        manrope: ['Manrope'],
        viva: ['Viva Travel']
      }
    }
  },
  plugins: []
}
