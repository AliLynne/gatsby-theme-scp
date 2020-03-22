const path = require("path");
module.exports = {
  plugins: [
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: path.join(__dirname, "src/pages")
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Baumans`,
          `Nanum Gothic\:400,700,800`,
          `Verdana`,
          `Helvetica`
        ]
      }
    }
  ]
};
