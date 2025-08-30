// @ts-check
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs()],
  vite: {
    resolve: {
      alias: {
        "~": "/src",
      },
    },
  },
});
