/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        trust: '#0a3d6b',
        'trust-mid': '#1a5fa8',
        'trust-light': '#e8f0fb',
        'trust-border': '#b8d0ef',
        green: '#0d6b4a',
        'green-light': '#e6f4ef',
        'green-border': '#8dcab8',
        dark: '#000000',
        dark2: '#1d1d1f',
        mid: '#424245',
        soft: '#6e6e73',
        border: '#d2d2d7',
        bg: '#f5f5f7',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        eyebrow: ['12px', { lineHeight: '1.4', letterSpacing: '0.8px', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
}
