/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          50: '#f6f7f9',
          100: '#eceef2',
          200: '#d5d9e2',
          300: '#b0b7c6',
          400: '#848fa5',
          500: '#65708a',
          600: '#505972',
          700: '#41485c',
          800: '#383e4d',
          900: '#1f232e',
          950: '#13161d',
        },
        brand: {
          50: '#eefdf6',
          100: '#d6fbeb',
          200: '#aff5d6',
          300: '#79e9ba',
          400: '#3fd494',
          500: '#18ba76',
          600: '#0b985f',
          700: '#0a784d',
          800: '#0b5e3e',
          900: '#0a4d34',
          950: '#042b1e',
        },
        gold: {
          50: '#fdf9ee',
          100: '#faf0d2',
          200: '#f4df9f',
          300: '#edc761',
          400: '#e8b23a',
          500: '#d99520',
          600: '#bb7218',
          700: '#955218',
          800: '#7a411a',
          900: '#68361a',
        },
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(31, 35, 46, 0.08), 0 8px 24px -8px rgba(31, 35, 46, 0.10)',
        lift: '0 12px 40px -12px rgba(31, 35, 46, 0.22)',
        glow: '0 0 0 1px rgba(24, 186, 118, 0.18), 0 16px 50px -16px rgba(11, 152, 95, 0.45)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.8s ease both',
        float: 'float 6s ease-in-out infinite',
        'gradient-pan': 'gradient-pan 8s ease infinite',
        marquee: 'marquee 28s linear infinite',
      },
    },
  },
  plugins: [],
};
