const withFonts = require("next-fonts")
const withCss = require("@zeit/next-css")
const withSass = require("@zeit/next-sass")

module.exports = withCss(withSass(withFonts({
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]-[hash:base64:5]',
    url: false,
  },
})))