const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/jackieennis/Coding/ClimateCabinet Git/insights-explorer/acc-map/.cache/dev-404-page.js"))),
  "component---src-pages-explore-jsx": hot(preferDefault(require("/Users/jackieennis/Coding/ClimateCabinet Git/insights-explorer/acc-map/src/pages/Explore.jsx"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/jackieennis/Coding/ClimateCabinet Git/insights-explorer/acc-map/src/pages/index.js")))
}
