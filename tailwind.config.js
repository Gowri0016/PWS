/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      animation: {
        cloudDrift: 'cloudDrift 60s linear infinite',
      },
      keyframes: {
        cloudDrift: {
          '0%': { transform: 'translateX(-50vw)' },
          '100%': { transform: 'translateX(100vw)' },
        },
      },
    },
  },
  plugins: [],
};
