import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        urbanist: ["var(--font-urbanist)", "sans-serif"], // Use the CSS variable

      },
      colors: {
        // theme colors
        'background-primary': 'var(--background-primary)',
        'background-secondary': 'var(--background-secondary)',
        'background-light-gold': 'rgba(233, 210, 141, 0.38)',

        'border-primary': 'var(--border-primary)',

        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',

        'text-gold': 'var(--gold-primary)',

        'gold': 'var(--gold-primary)',

        "button-primary": "var(--button-primary)",

        // normal colors
        'red-primary': '#B22222',
        'red-secondary': 'var(--red-secondary)',

        'green-primary': '#41C683',

        "gradient-gold": {
          100: '#B28A3B',
          200: '#D4AF37',
          300: '#F2D14A',
          400: '#F9E29B',

        },

      },
      boxShadow: {
        glow: '0 0 15px rgba(249, 226, 155, 0.7)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, rgba(150,119,49,1) 0%, rgba(191,164,59,1) 100%)',
        'gradient-secondary': 'linear-gradient(90deg,  rgba(19, 20, 21, 1) 0%, rgba(5, 5, 5, 1) 100%)',

      },

    },
  },
  plugins: [nextui()],
}
