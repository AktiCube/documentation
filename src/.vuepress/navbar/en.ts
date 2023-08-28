import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  "/en/",
  {
    text: "Docs",
    icon: "lightbulb",
    prefix: "/en/docs/",
    children: [
      {
        text: "Automatic-phpMyAdmin",
        icon: "lightbulb",
        prefix: "/en/docs/automatic-phpmyadmin/",
        children: [],
      },
      {
        text: "Permission-Manager",
        icon: "lightbulb",
        prefix: "permission-manager/",
        children: [],
      },
    ],
  }
]);
