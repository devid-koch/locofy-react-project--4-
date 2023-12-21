/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#010711",
          "200": "rgba(1, 7, 17, 0.75)",
        },
        white: "#fff",
        darkslateblue: {
          "100": "#1e447f",
          "200": "#0e4499",
          "300": "#153059",
          "400": "#06265b",
          "500": "rgba(11, 49, 110, 0.65)",
        },
        darkgray: "#a6a6a6",
        deepskyblue: {
          "100": "rgba(50, 183, 246, 0.25)",
          "200": "rgba(50, 183, 246, 0.5)",
        },
        cornflowerblue: "rgba(79, 130, 209, 0.35)",
        royalblue: "#4157cb",
        "dark-stroke": "#32b7f6",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
      },
      borderRadius: {
        "6xl": "25px",
        xl: "20px",
        "3xs": "10px",
        "57xl": "76px",
      },
    },
    fontSize: {
      "11xl": "30px",
      xs: "12px",
      base: "16px",
      "6xl": "25px",
      "17xl": "36px",
      "3xs": "10px",
      "20xl-1": "39.1px",
      "12xl-3": "31.3px",
      sm: "14px",
      "6xs": "7px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
