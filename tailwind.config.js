/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'Poppins', 'system-ui', 'sans-serif'],
        'inter': ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        deep: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        // New Color Scheme
        primary: {
          DEFAULT: '#3E5C76', // Steel Blue
          50: '#f0f3f4',
          100: '#e8ecef',
          200: '#d1d9e0',
          300: '#b8c2cc',
          400: '#9ca9b8',
          500: '#3E5C76',
          600: '#4a6b8a',
          700: '#5a7b9a',
          800: '#6c7a89',
          900: '#212121',
        },
        secondary: {
          DEFAULT: '#6C7A89', // Slate Gray
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8ecef',
          300: '#d1d9e0',
          400: '#b8c2cc',
          500: '#6C7A89',
          600: '#7a8b9a',
          700: '#8a9baa',
          800: '#9ca9b8',
          900: '#4a5568',
        },
        accent: {
          DEFAULT: '#FF6B35', // Industrial Orange
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#FF6B35',
          600: '#e55a2b',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        background: {
          DEFAULT: '#F0F3F4', // Cloud White
          50: '#ffffff',
          100: '#f8f9fa',
          200: '#f1f3f4',
          300: '#e8ecef',
          400: '#d1d9e0',
          500: '#F0F3F4',
          600: '#e8ecef',
          700: '#d1d9e0',
          800: '#b8c2cc',
          900: '#9ca9b8',
        },
        text: {
          DEFAULT: '#212121', // Blackened Gray
          50: '#f8f9fa',
          100: '#f1f3f4',
          200: '#e8ecef',
          300: '#d1d9e0',
          400: '#b8c2cc',
          500: '#212121',
          600: '#1a1a1a',
          700: '#141414',
          800: '#0f0f0f',
          900: '#0a0a0a',
        }
      },
      animation: {
        'wave': 'wave 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'bubble': 'bubble 4s ease-in-out infinite',
        'flow': 'flow 8s linear infinite',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(5deg)' },
        },
        bubble: {
          '0%': { transform: 'scale(0) translateY(0px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1) translateY(-100px)', opacity: '0' },
        },
        flow: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'ocean-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 50%, #0369a1 100%)',
      },
    },
  },
  plugins: [],
}
