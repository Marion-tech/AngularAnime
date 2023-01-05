/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint.
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": ["tsconfig.json"],
    "sourceType": "module"
  },
  "plugins": ["@typescript-eslint", "import"],
  "rules": {
    "@typescript-eslint/explicit-member-accessibility": ["off", {
      "accessibility": "explicit"
    }],
    "@typescript-eslint/naming-convention": ["error", {
      "selector": "interface",
      "format": ["PascalCase"],
      "custom": {
        "regex": "^I[A-Z]",
        "match": true
      }
    }],
    "@typescript-eslint/indent": ["error", 2],
    "@typescript-eslint/member-delimiter-style": ["error", {
      "multiline": {
        "delimiter": "semi",
        "requireLast": true
      },
      "singleline": {
        "delimiter": "semi",
        "requireLast": false
      }
    }],
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/quotes": ["error", "single"],
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/type-annotation-spacing": "error",
    "import/order": ["warn", {
      "groups": [["external", "builtin"], ["internal", "index", "sibling", "parent"]]
    }],
    "curly": "error",
    "dot-notation": "off",
    "eol-last": "error",
    "eqeqeq": ["error", "smart"],
    "guard-for-in": "error",
    "id-blacklist": "off",
    "id-match": "off",
    "max-len": ["error", {
      "code": 500
    }],
    "function-call-argument-newline": ["error", "consistent"],
    "function-paren-newline": ["error", "consistent"],
    "constructor-super": "error",
    "no-bitwise": "error",
    "no-caller": "error",
    "no-console": ["error", {
      "allow": ["log", "warn", "dir", "timeLog", "assert", "clear", "count", "countReset", "group", "groupEnd", "table", "debug", "dirxml", "error", "groupCollapsed", "Console", "profile", "profileEnd", "timeStamp", "context"]
    }],
    "no-debugger": "error",
    "no-empty": "off",
    "no-eval": "error",
    "no-fallthrough": "error",
    "no-new-wrappers": "error",
    "no-redeclare": "error",
    "no-shadow": ["error", {
      "hoist": "all"
    }],
    "no-trailing-spaces": "error",
    "no-underscore-dangle": "off",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-var": "error",
    "radix": "error",
    "spaced-comment": "error"
  },
  extends: ["plugin:storybook/recommended"]
};