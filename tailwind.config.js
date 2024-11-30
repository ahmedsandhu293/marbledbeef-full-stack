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
      },
      colors: {
        // theme colors
        'background-primary': 'var(--background-primary)',
        'background-secondary': 'var(--background-secondary)',

        'border-primary': 'var(--border-primary)',

        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        'text-tertiary': 'var(--text-tertiary)',

        "button-primary": "var(--button-primary)",

        // normal colors
        'red-primary': 'var(--red-primary)',
        'red-secondary': 'var(--red-secondary)',
      },
    },
  },
  plugins: [nextui()],
}
