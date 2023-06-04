/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "650px",
      lg: "1200px",
    },
    extend: {
      colors: {
        purple: "#AD1FEA",
        "dark-blue": "#4661E6",
        orange: "#F49F85",
        "light-blue": "#62BCFA",
        neutral: {
          100: "#FFFFFF",
          200: "#F2F4FF",
          300: "#F7F8FD",
          500: "#647196",
          600: "#3A4374",
          700: "#373F68",
        },
      },
      fontSize: {
        h1: "1.5rem",
        h2: "1.25rem",
        h3: "1.125rem",
        h4: "0.875rem",
        body1: "1rem",
        body2: "0.937rem",
        body3: "0.8125rem",
      },
      letterSpacing: {
        h1: "-0.33px",
        h2: "-0.25px",
        h3: "-0.25px",
        h4: "-0.2px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "logo-box-radial": "radial-gradient(#E84D70,#A337F6,  #28A7ED)",
        "header-bg-mobile": "url('/suggestions/mobile/background-header.png')",
        "header-bg-tablet": "url('/suggestions/tablet/background-header.png')",

        "header-bg-desktop":
          "url('/suggestions/desktop/background-header.png')",
      },
    },
  },
  plugins: [],
};
