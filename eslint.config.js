import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import jsxA11y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { react, "jsx-a11y": jsxA11y } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  prettier,
  ...tseslint.configs.recommended,
];
