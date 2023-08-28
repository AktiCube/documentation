import { hopeTheme } from "vuepress-theme-hope";
import { enNavbar, frNavbar } from "./navbar/index.js";
import { enSidebar, frSidebar } from "./sidebar/index.js";

export default hopeTheme({
  hostname: "https://akticube.fr",
  author: {
    name: "AktiCube Development Team",
    url: "https://discord.gg/we3WzvFM5C",
  },
  iconAssets: "fontawesome-with-brands",
  logo: "/logo.svg",
  repo: "AktiCube/themes-and-addons-documentation",
  docsDir: "src",
  locales: {
    "/en/": {
      navbar: enNavbar,
      sidebar: enSidebar,
      footer: "Default footer",
      displayFooter: true,
      editLink: false,
      contributors: true,
      metaLocales: {
        date: "Last Updated",
      },
    },
    "/fr/": {
      navbar: frNavbar,
      sidebar: frSidebar,
      footer: "Pied de page par défaut",
      displayFooter: true,
      editLink: false,
      contributors: true,
      metaLocales: {
        date: "Dernière mise-à-jour",
      },
    },
  },
  encrypt: {},
  plugins: {
    comment: {},
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },

    pwa: {
      favicon: "/favicon.ico",
      cacheHTML: true,
      cachePic: true,
      appendBase: true,
      apple: {
        icon: "/assets/icon/apple-icon-152.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/assets/icon/ms-icon-144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/assets/icon/chrome-mask-512.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-mask-192.png",
            sizes: "192x192",
            purpose: "maskable",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/assets/icon/chrome-192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Demo",
            short_name: "Demo",
            url: "/demo/",
            icons: [
              {
                src: "/assets/icon/guide-maskable.png",
                sizes: "192x192",
                purpose: "maskable",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
