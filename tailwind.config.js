/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      screens: {
        // sm: { max: "500px" }, // ==> min 0 to 500px
        md: {  max: "992px" },
        // lg: { min: "769px", max: "992px" },
        xl: { min: "993px", max: "1200px" },
        xxl: { min: "1200px" },

        zeroToTo768 : {max:"700px"}, 
        from768 : {min:"701px"}, 

      },

      gridTemplateColumns: {
        'autoFill': 'repeat(auto-fit, minmax(150px, 1fr))',
        }


    },
  },
  plugins: [ flowbite.plugin(),],
}
