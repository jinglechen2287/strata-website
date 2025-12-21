// @ts-check
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: node({
    mode: "standalone",
  }),
  integrations: [solidJs()],
  vite: {
    resolve: {
      alias: {
        "~": "/src",
      },
    },
  },
});
