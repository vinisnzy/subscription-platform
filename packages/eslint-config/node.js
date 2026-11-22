import globals from "globals";

import base from "./base.js";

export default [
  ...base,
  {
    files: ["**/*.{js,mjs,ts}"],
    languageOptions: {
      globals: globals.node,
    },
  },
];
