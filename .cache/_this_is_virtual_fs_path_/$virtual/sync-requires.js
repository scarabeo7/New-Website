
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/home/chizim/Documents/New-Website/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/home/chizim/Documents/New-Website/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/home/chizim/Documents/New-Website/src/pages/about.js")),
  "component---src-pages-contact-js": preferDefault(require("/home/chizim/Documents/New-Website/src/pages/contact.js")),
  "component---src-pages-index-js": preferDefault(require("/home/chizim/Documents/New-Website/src/pages/index.js")),
  "component---src-pages-projects-js": preferDefault(require("/home/chizim/Documents/New-Website/src/pages/projects.js"))
}

