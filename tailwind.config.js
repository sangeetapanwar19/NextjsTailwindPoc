module.exports = {
  purge: [
    "./src/components/**/*.js",
    "./src/pages/**/*.js",
    "./src/styles/*.scss",
  ],
  theme: {
    extend: {
      screens:{
        "sm" : "480px"
      },
      spacing: {
        "big" : "48rem"
      },
      keyframes: {
        carouselAnim: {
          from: { transform: "translate(0, 0)" },
          to: { transform: "translate(calc(-100% + (6 * 300px)))" },
        },
        wave: {
          to: {
            "margin-left": "-51%",
          },
        },
      },
      animation: {
        carousel: "carouselAnim 10s infinite alternate linear",
        wave: "wave 1.5s ease-in-out infinite",
      },
    },
	fontFamily:{
		nunito: ['Nunito','sans-serif']
	}
  },
  variants: {},
  plugins: [require("tailwindcss"), require("precss"), require("autoprefixer")],
};
