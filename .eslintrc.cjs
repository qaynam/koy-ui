/** @type { import("eslint").Linter.Config } */
module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "unused-imports"],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    extraFileExtensions: [".svelte"],
  },
  rules: {
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern:
          "^(_|\\$\\$Props|\\$\\$RestProps|\\$\\$Slots|\\$\\$Events|\\$\\$PropsDef|\\$\\$EventsDef)",
        args: "after-used",
        argsIgnorePattern:
          "^(_|\\$\\$Props|\\$\\$RestProps|\\$\\$Slots|\\$\\$Events|\\$\\$PropsDef|\\$\\$EventsDef)",
      },
    ],
    "no-console": "error",
    "no-undef": "off",
    "svelte/valid-compile": [
      "error",
      {
        ignoreWarnings: false,
      },
    ],
    "svelte/html-closing-bracket-spacing": ["warn"],
    "svelte/html-quotes": ["error"],
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
  overrides: [
    {
      files: ["*.svelte"],
      parser: "svelte-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
    },
  ],
};
