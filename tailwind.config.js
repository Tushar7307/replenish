module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { colors: {
        white: "#fff",
        dimgray: "#535353",
        darkslategray: {
          100: "#3c3c3c",
          200: "#2d2d2b",
        },
        tablegray:"#EAEAEA",
        lightgray: "#cecece",
        lightblack:"#130F26",
        gray: "#0b0b0b",
        "gray-500":'#EAE8E8',
        "gray-scale-gray-500": "#525151",
        silver: "#c4c4c4",
        "gray-secondary-color-gray": "#010010",
        whitesmoke: "#ededed",
        "neutral-600": "#6f6c90",
        "final-design-color-final-design-color-primary-pink-1": "#fe5e71",
      },
      spacing: {},
      fontFamily: {
        poppins: "Poppins",
        "paragraph-regular": "Inter",
      },},
  },
  plugins: [
  
    // ... other plugins
  ]
}