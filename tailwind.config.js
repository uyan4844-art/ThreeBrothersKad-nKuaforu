/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./public/**/*.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          espresso: '#0F0F11',
          charcoal: '#141417',
          surface: '#18181C',
          card: '#1F1F24',
          gold: '#D4AF37',
          champagne: '#C5A880',
          goldLight: '#EFE2CE',
          goldMuted: '#9E8057',
          accent: '#E5C07B'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif']
      },
      screens: {
        'xs': '420px'
      }
    }
  },
  plugins: []
};
