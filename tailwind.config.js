/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // tus archivos react
    ],
    theme: {
      extend: {
        colors: {
          pink: {
            100: "#ffe4e6",
            200: "#fecdd3",
            300: "#fda4af",
            400: "#fb7185",
            500: "#f43f5e",
            600: "#e11d48",
            700: "#be123c",
          },
          purple: {
            100: "#f3e8ff",
            200: "#e9d5ff",
            300: "#d8b4fe",
            400: "#c084fc",
            500: "#a855f7",
            600: "#9333ea",
            700: "#7e22ce",
          },
          rose: {
            100: "#fff1f2",
            200: "#ffe4e6",
            300: "#fecdd3",
            400: "#fda4af",
            500: "#fb7185",
            600: "#f43f5e",
            700: "#e11d48",
          },
        },
        animation: {
          floatElement: 'floatElement 12s linear infinite',
          fadeIn: 'fade-in 1.2s ease-out forwards',
          fadeInDelay: 'fade-in 1.2s ease-out 0.3s forwards',
          fadeInDelay2: 'fade-in 1.2s ease-out 0.6s forwards',
          zoomIn: 'zoomIn 0.4s ease forwards',
        },
      },
    },
    plugins: [],
  };
  