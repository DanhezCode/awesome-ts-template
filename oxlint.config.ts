import { defineConfig } from "oxlint";

// oxlint-disable-next-line import/no-default-export
export default defineConfig({
  categories: {
    // Code that is definitely wrong or useless
    correctness: "error",

    // Rules under development that may change
    nursery: "warn",

    // Extra strict rules that may have false positives
    pedantic: "warn",

    // Rules that aim to improve runtime performance
    perf: "error",

    // Rules that ban specific patterns or features
    restriction: "error",

    // Idiomatic and consistent style rules
    style: "warn",

    // Code that is likely to be wrong or useless
    suspicious: "error",
  },

  plugins: [
    "node",
    "promise",
    "typescript",
    // "vitest",
    "import",
    "oxc",
    "react",
    "react-perf",
    "jsx-a11y",
    "unicorn",
  ],

  rules: {
    "capitalized-comments": "off",
    // curly: ["error", "multi-line"],
    "func-names": ["error", "as-needed", { generators: "never" }],
    "func-style": "off",
    "id-length": "off",
    "import/no-default-export": "warn",
    "import/no-duplicates": "off",
    "import/no-empty-named-blocks": "error",
    "import/no-named-export": "off",
    "import/no-nodejs-modules": "off",
    "import/prefer-default-export": "off",
    "no-duplicate-imports": "error",
    "no-magic-numbers": [
      "warn",
      {
        detectObjects: false,
        enforceConst: true,
        ignore: [-1, 0, 1, 2],
        ignoreArrayIndexes: true,
        ignoreClassFieldInitialValues: true,
        ignoreDefaultValues: true,
        ignoreEnums: true,
        ignoreNumericLiteralTypes: true,
        ignoreReadonlyClassProperties: true,
        ignoreTypeIndexes: true,
      },
    ],
    "no-undef": "off",
    "no-unused-vars": "off",
    "oxc/no-rest-spread-properties": "off",
    "prefer-object-spread": "error",
    "typescript/explicit-function-return-type": "off",
    "typescript/no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_{1,2}",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_{1,2}",
        destructuredArrayIgnorePattern: "^_{1,2}",
        fix: {
          imports: "safe-fix",
          variables: "suggestion",
        },
        ignoreRestSiblings: true,
        ignoreUsingDeclarations: true,
        reportUsedIgnorePattern: false,
        reportVarsOnlyUsedAsTypes: false,
        vars: "all",
        varsIgnorePattern: "^_{1,2}",
      },
    ],
    "unicorn/require-module-specifiers": "off",
  },
});
