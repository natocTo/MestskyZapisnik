let fs = require("fs");
let path = require("path");
let glob = require("glob-all");
let PurgecssPlugin = require("purgecss-webpack-plugin");
let sanitizeHtml = require("sanitize-html");

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || [];
  }
}

const cities = fs
  .readdirSync(path.join(__dirname, "faqs"))
  .map(city => `/${city}`);

module.exports = {
  mode: "spa",
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Užitečné informace a telefonní čísla z tvého města."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    bodyAttrs: {
      class: "h-full w-full"
    }
  },
  generate: {
    routes: cities
  },
  router: {
    mode: "hash",
    base: process.env.DEPLOY_ENV === "GH_PAGES" ? "/mestsky-zapisnik/" : "/"
  },
  manifest: {
    lang: "cs",
    name: "Městský zápisník",
    short_name: "Zápisník SY"
  },
  modules: ["@nuxtjs/pwa"],
  plugins: [{ src: "~plugins/ga.js", ssr: false }],
  css: ["~/assets/tailwind.css", "~/assets/app.css"],
  build: {
    extractCSS: true,
    postcss: [
      require("tailwindcss")(path.join(__dirname, "tailwind.js")),
      require("autoprefixer")
    ],
    extend(config, { isDev }) {
      config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: "html-loader"
          },
          {
            loader: "markdown-loader",
            options: {
              renderer: require(path.join(__dirname, "markedRenderer.js")),
              headerIds: false,
              sanitize: true,
              sanitizer: sanitizeHtml
            }
          }
        ]
      });

      if (!isDev) {
        config.plugins.push(
          new PurgecssPlugin({
            paths: glob.sync([
              path.join(__dirname, "pages/**/*.vue"),
              path.join(__dirname, "layouts/**/*.vue"),
              path.join(__dirname, "components/**/*.vue")
            ]),
            extractors: [
              {
                extractor: TailwindExtractor,
                extensions: ["vue"]
              }
            ],
            whitelist: ["html", "body", "nuxt-progress"]
          })
        );
      }
    }
  }
};
