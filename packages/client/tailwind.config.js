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
    screens: {
      mobile: '37.5rem',
      tablet: '45rem',
      desktop: '90.125rem'
    },
    fontSize: {
      xs: '0.875rem',
      sm: '1rem',
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem'
    },
    extend: {}
  },
  plugins: []
}
