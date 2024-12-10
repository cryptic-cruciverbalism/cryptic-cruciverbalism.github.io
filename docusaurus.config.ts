import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

import packageJson from "./package.json";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Cryptic Cruciverbalism",
  tagline:
    "Guidance on Tactics, Strategies, Mechanics, Abbreviations and more to help you learn about Cryptic Crosswords",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://cryptic-cruciverbalism.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "cryptic-cruciverbalism", // Usually your GitHub org/user name.
  projectName: "cryptic-cruciverbalism.github.io", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          routeBasePath: "/",

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/cryptic-cruciverbalism/cryptic-cruciverbalism.github.io/tree/main/packages/create-docusaurus/templates/shared/",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Cryptic Cruciverbalism",
      logo: {
        alt: "Cryptic Cruciverbalism Logo",
        src: "img/cryptic-cruciverbalism-logo.jpg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "sidebar",
          position: "left",
          label: "Home",
        },
        {
          href: "https://github.com/cryptic-cruciverbalism/cryptic-cruciverbalism.github.io",
          label: "GitHub",
          position: "right",
        },
        {
          href: "https://chromewebstore.google.com/detail/crossword-companion/olnojhhheedghnpnfaompfeombpcpbnk",
          label: "Crossword Companion",
          position: "right",
        },
        {
          href: "https://www.youtube.com/channel/UCs9yHYYcG358Dw34Faa_J1Q",
          label: "YouTube - Live Solves",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/facebook/docusaurus",
            },
          ],
        },
      ],
      copyright: `Version ${packageJson.version}. Copyright © ${new Date().getFullYear()} Cryptic Cruciverbalism Technical Lead. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
