/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"], // Add other extensions if needed
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
          '-webkit-overflow-scrolling': 'touch',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Hide scrollbar for WebKit browsers */
        },
      };

      addUtilities(newUtilities);
    },
  ],
}
