module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 8,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:import/recommended",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    indent: [
      2,
      2
    ],
    quotes: [
      2,
      "double"
    ],
    "linebreak-style": [
      2,
      "unix"
    ],
    semi: [
      2,
      "always"
    ],
    "object-curly-spacing": [
      "error",
      "always",
      {
        arraysInObjects: true
      }
    ],
    "import/order": ["error", {
      groups: [
        ["builtin", "external"],
        "internal",
        ["parent", "index", "sibling", "object"],
      ],
      pathGroups: [
        {
          pattern: "*.scss",
          patternOptions: { matchBase: true },
          group: "unknown",
          position: "after",
        }
      ],
      "newlines-between": "always",
      alphabetize: {
        order: "asc",
      }
    }],
    "import/named": 0,
    "import/no-unresolved": 0,
    "no-undef": 0,
    "no-unused-vars": 0,
    "no-var": 2,
    "compat/compat": 0,
    "react/react-in-jsx-scope": 0,
    "jsx-a11y/click-events-have-key-events": 0,
    "jsx-a11y/no-noninteractive-element-interactions": 0,
  }
};
