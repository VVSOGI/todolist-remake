/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "37.5rem",
      tablet: "45rem",
      desktop: "90.125rem",
    },
    fontSize: {
      xs: "0.875rem",
      sm: "1rem",
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
    },
    colors: {
      RED_100: "#fcc7c5",
      RED_200: "#e89b99",
      RED_300: "#e67775",
      RED_400: "#e85856",
      RED_500: "#ec4442",
      RED_600: "#e82f2c",
      GRAY_100: "#f7f7f7",
      GRAY_200: "#e6e6e6",
      GRAY_300: "#c2c2c2",
      GRAY_400: "#969696",
      GRAY_500: "#5c5c5c",
      GRAY_600: "#363636",
      CLOUD_BLUE_100: "#d7dce6",
      CLOUD_BLUE_200: "#c3cee3",
      CLOUD_BLUE_300: "#a3bae3",
      CLOUD_BLUE_400: "#86a8e3",
      CLOUD_BLUE_500: "#608fe0",
      CLOUD_BLUE_600: "#427adb",
      WHITE: "#ffffff",
      BLACK: "#0d0d0d",
    },
    extend: {
      width: {
        "section-mobile": "20rem",
        "section-tablet": "45rem",
        "section-desktop": "75rem",
      },
      boxShadow: {
        primary: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.2)",
        secondary: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.15)",
      },
      height: {
        "todolist-headers": "4.21875rem",
        "todolist-create": "2.5rem",
      },
    },
  },
  plugins: [],
};
