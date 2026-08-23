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
          cream: '#FAF8F5',
          espresso: '#1A1918',
          charcoal: '#1A1918',
          surface: '#1A1918',
          card: '#242220',
          gold: '#C5A880',
          champagne: '#C5A880',
          goldLight: '#EFE2CE',
          goldMuted: '#A48358',
          accent: '#C5A880',
          whatsapp: '#128C7E',
          whatsappHover: '#0E7065'
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
