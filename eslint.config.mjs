import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintPluginBetterTailwindcss from "eslint-plugin-better-tailwindcss";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    plugins: {
      "better-tailwindcss": eslintPluginBetterTailwindcss,
    },
    rules: {
      ...eslintPluginBetterTailwindcss.configs["recommended-warn"].rules,
    },
    settings: {
      "better-tailwindcss": {
        // Use entryPoint for Tailwind v4:
        entryPoint: "src/styles/global.css",
        // Or use tailwindConfig for Tailwind v3:
        // tailwindConfig: "tailwind.config.js",
      },
    },
  },
  {
    ignores: ["dist/", ".astro/", "node_modules/"],
  },
];
