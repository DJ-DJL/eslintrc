import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintComments from 'eslint-plugin-eslint-comments';


export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      "eslint-comments": eslintComments
    },
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "eslint-comments/require-description": "error",
    }
  }
];
