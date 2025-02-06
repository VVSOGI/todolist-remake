/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@vvsogi/ui-components/app/**/*.{js,jsx,ts,tsx}",
    "../../node_modules/@vvsogi/ui-components/app/**/*.{js,jsx,ts,tsx}",
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
      "red-100": "#fcc7c5",
      "red-200": "#e89b99",
      "red-300": "#e67775",
      "red-400": "#e85856",
      "red-500": "#ec4442",
      "red-600": "#e82f2c",
      "gray-100": "#f7f7f7",
      "gray-200": "#e6e6e6",
      "gray-300": "#c2c2c2",
      "gray-400": "#969696",
      "gray-500": "#5c5c5c",
      "gray-600": "#363636",
      "cloud-blue-100": "#d7dce6",
      "cloud-blue-200": "#c3cee3",
      "cloud-blue-300": "#a3bae3",
      "cloud-blue-400": "#86a8e3",
      "cloud-blue-500": "#608fe0",
      "cloud-blue-600": "#427adb",
      white: "#ffffff",
      black: "#0d0d0d",
    },
    extend: {
      spacing: {
        xs: "0.5rem",
        sm: "0.75rem",
        md: "1rem",
        lg: "1.25rem",
        xl: "1.5rem",
      },
      width: {
        "section-mobile": "20rem",
        "section-tablet": "45rem",
        "section-desktop": "75rem",
      },
      minWidth: {
        "section-mobile": "20rem",
        "section-tablet": "45rem",
        "section-desktop": "75rem",
      },
      maxWidth: {
        "section-mobile": "20rem",
        "section-tablet": "45rem",
        "section-desktop": "75rem",
      },
      height: {
        "todolist-headers": "4.21875rem",
        "todolist-create": "2.5rem",
      },
      minHeight: {
        "todolist-headers": "4.21875rem",
        "todolist-create": "2.5rem",
      },
      maxHeight: {
        "todolist-headers": "4.21875rem",
        "todolist-create": "2.5rem",
      },
      boxShadow: {
        primary: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.2)",
        secondary: "0 0.25rem 0.5rem rgba(0, 0, 0, 0.15)",
      },
      borderRadius: {
        small: "0.25rem",
        medium: "0.5rem",
        large: "0.75rem",
      },
    },
  },
  plugins: [],
};
