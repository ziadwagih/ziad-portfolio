// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        accent: '#A78BFA', // Your custom accent
      },
      fontFamily: {
        techno: ['Orbitron', 'sans-serif'], // NEW: techno font
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
};
