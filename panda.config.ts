import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";
import neutral from "@park-ui/panda-preset/colors/neutral";
import slate from "@park-ui/panda-preset/colors/slate";

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    presets: [
        createPreset({ accentColor: slate, grayColor: neutral, radius: "md" }),
    ],

    // Where to look for your css declarations
    include: [
        "./src/**/*.{js,jsx,ts,tsx,astro}",
        "./pages/**/*.{js,jsx,ts,tsx,astro}",
    ],

    jsxFramework: "solid",

    // Files to exclude
    exclude: [],

    // Useful for theme customization
    theme: {
        extend: {
            semanticTokens: {},
        },
    },

    // The output directory for your css system
    outdir: "styled-system",
});
