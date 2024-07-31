/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        // sm: "600px",
        // // => @media (min-width: 640px) { ... }
        // md: "728px",
        // // => @media (min-width: 768px) { ... }
        // lg: "970px",
        // // => @media (min-width: 1024px) { ... }
        // xl: "1220px",
        // // => @media (min-width: 1280px) { ... }
        // xxl: "1460px",
        // // => @media (min-width: 1536px) { ... }
      },
    },
    extend: {
      colors: {
        primary: "#565acf",
        secondary: "#1e40af",
        darkText: "#1f2278",
        light: "#f7f7ff",
      },
      animation: {
        moveY1: "moveY1 1.8s ease-in-out infinite alternate",
        moveY2: "moveY2 1s ease-in-out infinite alternate",
        moveSp: "moveSp 20s linear infinite",
        moveX: "moveX 1s ease-in-out infinite alternate",
        shake: "shake 1s ease infinite alternate",
      },
      keyframes: {
        moveY1: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-10px)" },
        },
        moveY2: {
          "0%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        moveSp: {
          from: { transform: "rotate(0deg)" },
          to: {
            transform: "rotate(360deg)",
          },
        },
        moveX: {
          "0%": { transform: "translateX(-10px)" },
          "100%": { transform: "translateX(0px)" },
        },
        shake: {
          "  0%": { transform: "translateX(0, 0)" },
          "25% ": { transform: "translateX(-5px)" },
          "50% ": { transform: "translateX(5px)" },
          "75% ": { transform: "translateX(-5px)" },
          "100%": { transform: "translateX(5px)" },
        },
      },
    },
  },
  plugins: [],
};
