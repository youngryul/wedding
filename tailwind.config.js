/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'noto-serif': ['Noto Serif KR', 'serif'],
      },
      colors: {
        'wedding': {
          'pink': '#F8E8E8',
          'rose': '#F5C6C6',
          'cream': '#FFF8F0',
          'beige': '#F5F0E8',
          'gold': '#D4AF37',
          'sage': '#9CAF88',
          'soft-pink': '#FDF2F8',
          'warm-pink': '#FCE7F3',
          'deep-rose': '#E879F9',
          'lavender': '#E0E7FF',
          'soft-purple': '#F3E8FF',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'wedding-gradient': 'linear-gradient(135deg, #FDF2F8 0%, #FCE7F3 50%, #E0E7FF 100%)',
        'hero-gradient': 'linear-gradient(135deg, rgba(253, 242, 248, 0.9) 0%, rgba(252, 231, 243, 0.8) 50%, rgba(224, 231, 255, 0.7) 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
