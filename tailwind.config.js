/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'large': '12px',
      '4xl': '50px',
    },
    extend: {
      colors: {
        glassy: {
          50 : "rgba(255, 255, 255, 0.303)",
          100:  "#e7e7e7bc",
          150: "#e7e7e7",
        },
        darkOverlay: "rgba(0, 0, 0, 0.717)",
      },
    },
  },
  plugins: [],
}
