// @ts-check
import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import angular from "@angular-eslint/eslint-plugin";
import angularTemplate from "@angular-eslint/eslint-plugin-template";
import prettier from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
    plugins: {
      "@typescript-eslint": ts,
      "@angular-eslint": angular,
      prettier,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...ts.configs["recommended"].rules,
      ...ts.configs["stylistic"].rules,
      ...angular.configs["recommended"].rules,
      "prettier/prettier": "error",
    },
  },
  {
    files: ["**/*.html"],
    plugins: {
      "@angular-eslint/template": angularTemplate,
      prettier,
    },
    rules: {
      ...angularTemplate.configs["recommended"].rules,
      "prettier/prettier": [
        "error",
        {
          parser: "angular",
        },
      ],
    },
  },
  // Global ignores for all files and blocks
  {
    ignores: ["dist/", "node_modules/", "build/", "**/*.spec.ts"],
  },
];
