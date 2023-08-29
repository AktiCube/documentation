import { navbar } from "vuepress-theme-hope";

export const frNavbar = navbar([
  {
    text: "Docs",
    icon: "lightbulb",
    prefix: "/fr/docs/",
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
      },
      {
        text: "Minecraft",
        prefix: "/minecraft/",
        children: []
      }
    ],
  }
]);
