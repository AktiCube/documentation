import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",
  locales: {
    "/en/": {
      lang: "en-US",
      title: "Docs",
      description: "The documentation used for every AktiCube Development Team project.",
    },
    "/fr/": {
      lang: "fr-FR",
      title: "Docs",
      description: "La documentation utilisée pour chaque projet d'AktiCube Development Team.",
    },
  },
  theme: theme,
  shouldPrefetch: false,
});