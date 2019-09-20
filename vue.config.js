const RobotstxtPlugin = require("robotstxt-webpack-plugin");

const robotsTxtOpts = {
  policy: [
    {
      userAgent: "*",
      allow: "/"
    }
  ],
  sitemap: `${process.env.VUE_APP_HOST}/${process.env.VUE_APP_BLOG_ID}/sitemap.xml`,
  host: `${process.env.VUE_APP_HOST}`
}

module.exports = {
  publicPath: process.env.VUE_APP_HOST,
  chainWebpack: config => {

    //for coffee
    config.module
      .rule('coffee')
      .test(/\.coffee$/)
      .use('coffee-loader')
      .loader('coffee-loader')
      .end()

  },
  configureWebpack: {
    devtool: 'source-map',
    plugins: [new RobotstxtPlugin(robotsTxtOpts)]
  },
  css: {
    loaderOptions: {
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: `@import "./src/theme/style.scss"`,
        options: {
          indentedSyntax: true
        }
      }
    }
  }
}


