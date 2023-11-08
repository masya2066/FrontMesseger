module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  plugins: ["@typescript-eslint"],
  parserOptions: {
    ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/eslint-recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    //'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    "object-shorthand": ["error", "always"],
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "require-await": "error",
    "no-empty-function": "error",
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: ["return"] },
      { blankLine: "always", prev: "*", next: ["block-like"] },
    ],
    yoda: "error",
    "operator-assignment": ["error", "always"],
  },
};
