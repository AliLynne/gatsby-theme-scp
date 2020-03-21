// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---gatsby-theme-scp-src-pages-theme-layout-js": () => import("./../../gatsby-theme-scp/src/pages/ThemeLayout.js" /* webpackChunkName: "component---gatsby-theme-scp-src-pages-theme-layout-js" */)
}

