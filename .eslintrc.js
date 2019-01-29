module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/recommended",
    "plugin:vue/essential",
    "prettier"
  ],
  "rules": {
    "quotes": ["error", "single"],
    'max-len': [1, 100, 4],
    'no-console': 0,
    'vue/html-self-closing': 1,
    'vue/max-attributes-per-line': [2, {
      singleline: 3,
      multiline: {
        max: 1,
        allowFirstLine: false
      }
    }]
  },
  "parserOptions": {
    "parser": "babel-eslint"
  }
};