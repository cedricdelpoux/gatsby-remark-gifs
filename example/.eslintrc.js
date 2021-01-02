module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module",
  },
  extends: ["eslint:recommended", "plugin:react/recommended", "prettier"],
  settings: {
    react: {
      version: "16.12",
    },
  },
  rules: {
    "react/prop-types": "off",
    "react/display-name": "off",
  },
}
