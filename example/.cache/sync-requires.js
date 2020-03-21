const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/AliLynne/Documents/projects/scp/gatsby-theme-scp/example/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/AliLynne/Documents/projects/scp/gatsby-theme-scp/example/src/pages/index.js"))),
  "component---gatsby-theme-scp-src-pages-theme-layout-js": hot(preferDefault(require("/Users/AliLynne/Documents/projects/scp/gatsby-theme-scp/gatsby-theme-scp/src/pages/ThemeLayout.js")))
}

