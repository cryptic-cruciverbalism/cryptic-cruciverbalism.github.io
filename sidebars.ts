import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  sidebar: [
    {
      type: "doc",
      id: "index",
      label: "Home",
    },
    {
      type: "doc",
      id: "videos",
      label: "Live Solve Videos",
    },
    {
      type: "category",
      label: "Mechanics",
      items: [
        // "mechanics/anagrams",
        // "mechanics/homophones",
        // "mechanics/spoonerisms",
        "mechanics/voices",
      ],
    },
    {
      type: "doc",
      id: "crossword-companion-extension/index",
      label: "Crossword Companion",
    },
  ],
};

export default sidebars;
