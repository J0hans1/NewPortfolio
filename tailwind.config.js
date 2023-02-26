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
      screens: {
        '3xl': '1750px',
      },
      backgroundImage: {
        'PBG': "linear-gradient(142.84deg, rgba(88, 147, 173, 0.584) 30.3%, rgba(211, 93, 232, 0.544) 85.27%, rgba(212, 93, 232, 0.33) 85.27%);",
        'PBG-lite' : "linear-gradient(rgb(124, 224, 255), rgb(238, 141, 255))",
      },
      width: {
        '100': '500px',
      },
      height: {
        '100': '500px',
      },
      margin: {
        '10%': '10%',
      },
      colors: {
        glassy: {
          25 : "rgba(255, 255, 255, 0.185)",
          50 : "rgba(255, 255, 255, 0.303)",
          100: "#e7e7e7bc",
          150: "#e7e7e7",
        },
        darkOverlay: "rgba(0, 0, 0, 0.717)",
        background: '#171717',
        gradients: {
          purpleBlue: "linear-gradient(rgb(124, 224, 255), rgb(238, 141, 255))",
        },
      },
    },
  },
  plugins: [],
}
