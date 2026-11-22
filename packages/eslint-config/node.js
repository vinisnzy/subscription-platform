import base from "./base";

export default [
  ...base,
  {
    files: ["**/*.{js,mjs,ts}"],
    languageOptions: {
      globals: globals.node,
    },
  },
];
