/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        race: {
          950: '#07090e',
          900: '#0d1117',
          850: '#131822',
          800: '#1b2230',
          700: '#283245',
          600: '#3d4b63',
          border: '#1f293d',
        },
        telemetry: {
          red: '#ef4444',
          amber: '#f59e0b',
          green: '#10b981',
          cyan: '#06b6d4',
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
