const path = require("path");
module.exports = {
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, "src/pages")
      }
    }
  ]
};
