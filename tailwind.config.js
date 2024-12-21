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

        'border-primary': 'var(--border-primary)',

        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',

        'text-gold': 'var(--gold-primary)',

        'gold': 'var(--gold-primary)',

        "button-primary": "var(--button-primary)",

        // normal colors
        'red-primary': 'var(--red-primary)',
        'red-secondary': 'var(--red-secondary)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, rgba(150,119,49,1) 0%, rgba(191,164,59,1) 100%)',
        'gradient-secondary': 'linear-gradient(90deg,  rgba(19, 20, 21, 1) 0%, rgba(5, 5, 5, 1) 100%)'
      },

    },
  },
  plugins: [nextui()],
}
