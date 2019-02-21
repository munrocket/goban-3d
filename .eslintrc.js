module.exports = {
  "root": true,
  "env": {
    "es6": true,
    "node": true
  },
  "extends": [
    "plugin:vue/recommended",
    "plugin:vue/essential"
  ],
  "rules": {
    "quotes": ["error", "single"],
    'max-len': [1, 110, 4],
    'no-console': 1,
    'vue/html-self-closing': 1,
    'vue/max-attributes-per-line': [2, {
      singleline: 5,
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