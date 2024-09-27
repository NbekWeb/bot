module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Include your Vue and other files
  ],
  theme: {
    extend: {
      spacing: {
        13: "52px",
        15: "60px",
        18: "72px",
        19: "76px",
        23: "92px",
        25: "100px",
        26: "104px",
        42: "168px",
        50: "200px",

        174: "174px",
        374: "374px",
      },  
      fontSize: {
        xs: ["12px", "1"],
      },
      screens: {
        'xs': '400px', 
      },
    },
  },
  plugins: [],
};
