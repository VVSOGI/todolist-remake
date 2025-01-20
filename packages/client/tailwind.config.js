/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@todolist/ui-components/app/**/*.{js,jsx,ts,tsx}' // ui-components 경로 추가
  ],
  theme: {
    extend: {}
  },
  plugins: []
}
