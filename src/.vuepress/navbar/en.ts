import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  {
    text: "Product",
    icon: "shop",
    prefix: "/en/products/",
    children: [
      {
        text: "Pterodactyl",
        icon: "shop",
        prefix: "/pterodactyl/",
        children: [
          {
            text: "Automatic-phpMyAdmin",
            icon: "/assets/icon/pterodactyl/Automatic-phpMyAdmin-16x16.png",
            prefix: "/automatic-phpmyadmin/",
            children: [],
          },
          {
            text: "Permission-Manager",
            icon: "/assets/icon/pterodactyl/Permission-Manager-16x16.png",
            prefix: "/permission-manager/",
            children: [],
          },
          {
            text: "Choosable-Start-Command",
            icon: "/assets/icon/pterodactyl/Choosable-Start-Command-16x16.png",
            prefix: "/choosable-start-command/",
            children: [],
          },
          {
            text: "Node-Backup",
            icon: "/assets/icon/pterodactyl/Node-Backup-16x16.png",
            prefix: "/node-backup/",
            children: [],
          }
        ]
      }
    ]
  },
  {
    text: "Our Market Profile",
    icon: "shop",
    children: [
      {
        text: "Pterodactyl",
        children: [
          {
            text: "PterodactylMarket",
            link: "https://pterodactylmarket.com/team/6227976"
          },
          {
            text: "SourceXChange",
            link: "https://www.sourcexchange.net/teams/5/profile"
          },
          {
            text: "BuildByBit",
            link: "https://builtbybit.com/creators/louis_xi.287614/"
          }
        ]
      },
      {
        text: "Minecraft",
        children: []
      }
    ]
  },
  {
    text: "Docs",
    icon: "lightbulb",
    prefix: "/en/docs/",
    children: [
      {
        text: "Pterodactyl",
        prefix: "/pterodactyl/",
        children: [
          {
            text: "Automatic-phpMyAdmin",
            icon: "/assets/icon/pterodactyl/Automatic-phpMyAdmin-16x16.png",
            prefix: "/automatic-phpmyadmin/",
            children: [],
          },
          {
            text: "Permission-Manager",
            icon: "/assets/icon/pterodactyl/Permission-Manager-16x16.png",
            prefix: "/permission-manager/",
            children: [],
          },
          {
            text: "Choosable-Start-Command",
            icon: "/assets/icon/pterodactyl/Choosable-Start-Command-16x16.png",
            prefix: "/permission-manager/",
            children: [],
          },
          
          {
            text: "Node-Backup",
            icon: "/assets/icon/pterodactyl/Node-Backup-16x16.png",
            prefix: "permission-manager/",
            children: [],
          }
        ]
      }
    ],
  }
]);
