/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./docs/**/*.{mdx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}
