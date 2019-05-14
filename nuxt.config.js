import fs from "fs";
import path from "path";
import glob from "glob-all";
import PurgecssPlugin from "purgecss-webpack-plugin";
import sanitizeHtml from "sanitize-html";

import markedRenderer from "./markedRenderer.js";

class TailwindExtractor {
  static extract(content) {
    return content.match(/[A-z0-9-:/]+/g) || [];
  }
}

let cities = require("./cities.js").map(city => `/${city.path}`);

export default {
  mode: "spa",
  env: {
    repository: "https://github.com/natocTo/mestsky-zapisnik"
  },
  head: {
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Všechny informace z města na jednom místě."
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "Všechny informace z města na jednom místě."
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    bodyAttrs: {
      class: "h-full w-full"
    }
  },
  generate: {
    subFolders: false,
    routes: cities
  },
  manifest: {
    lang: "cs",
    name: "Městský zápisník",
    short_name: "Zápisník"
  },
  modules: ["@nuxtjs/pwa", "@nuxtjs/sitemap"],
  plugins: [
    { src: "~plugins/find-polyfill.js", ssr: false },
    { src: "~plugins/ga.js", ssr: false }
  ],
  sitemap: {
    hostname: "https://mestsky-zapisnik.cz",
    generate: true,
    routes: cities
  },
  css: ["~/assets/tailwind.css", "~/assets/app.css"],
  build: {
    extractCSS: true,
    postcss: [require("tailwindcss"), require("autoprefixer")],
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
              renderer: markedRenderer,
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
