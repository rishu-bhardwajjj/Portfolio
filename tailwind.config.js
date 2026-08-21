/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: '#0A121D',
        panel: '#101B2C',
        panel2: '#142134',
        hair: 'rgba(231,238,245,0.09)',
        fg: '#E8EEF5',
        muted: '#8DA0B4',
        gold: '#E7B455',
        goldd: '#C7933A',
        teal: '#49D7C2',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
