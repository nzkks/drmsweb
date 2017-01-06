module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jquery" : true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "indent": [
      "error",
      2
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "no-empty": [
      "error",
      { "allowEmptyCatch": true }
    ],
    "no-console": [
      "error",
      { 
        "allow": [
        "warn",
        "error"
      ]
      }
    ]
  }
};
