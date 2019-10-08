const RobotstxtPlugin = require("robotstxt-webpack-plugin");

const robotsTxtOpts = {
  policy: [
    {
      userAgent: "*",
      allow: "/"
    }
  ],
  sitemap: `${process.env.VUE_APP_HOST}/sitemap.xml`,
  host: `${process.env.VUE_APP_HOST}`
}

const devHost = 'http://localhost:5000/kellyferrone/us-central1';
module.exports = {
  publicPath: process.env.VUE_APP_HOST,
  devServer: {
    proxy: {
      '/contact-me': {
        target: `${devHost}/sendgridEmail`
      },
      '/sitemap.xml': {
        target: `${devHost}/siteMap`
      },
      '/rss.xml': {
        target: `${devHost}/rssFeed`,
        changeOrigin: true
      },
      '/atom.xml': {
        target: `${devHost}/atomFeed`
      },
      '/meta': {
        target: `${devHost}/metaFx`
      },
      '^/blog/*': {
        target: `${devHost}/blogFx`
      }
    }
  },
  chainWebpack: config => {

    //for coffee
    config.module
      .rule('coffee')
      .test(/\.coffee$/)
      .use('coffee-loader')
      .loader('coffee-loader')
      .end();

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


