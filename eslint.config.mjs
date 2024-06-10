import eslint from "@eslint/js"
import tseslint from "typescript-eslint"
import nextPlugin from "@next/eslint-plugin-next"
import stylistic from "@stylistic/eslint-plugin"
import hooksPlugin from "eslint-plugin-react-hooks"
import { fixupConfigRules, fixupPluginRules } from "@eslint/compat"
import reactPlugin from "eslint-plugin-react"

export default tseslint.config(
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      "@next/next": fixupPluginRules(nextPlugin),
      "react-hooks": fixupPluginRules(hooksPlugin),
      "@stylistic": stylistic,
      react: reactPlugin,
    },
    rules: {
      ...reactPlugin.configs["jsx-runtime"].rules,
      ...hooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "react/sort-comp": "error",
      "react/jsx-no-bind": "error",
      "react/jsx-closing-bracket-location": "error",
      "react/self-closing-comp": "error",
      "react/jsx-wrap-multilines": "error",
      "react/no-array-index-key": "error",
      "react/jsx-boolean-value": "error",
      "react/jsx-curly-spacing": "error",
      "react/jsx-tag-spacing": "error",
      "@stylistic/quotes": "warn",
      "react/jsx-closing-tag-location": "error",
      "react/jsx-pascal-case": "error",
      "react/jsx-filename-extension": [
        "error",
        { extensions: [".tsx", ".ts"] },
      ],
      "react/prefer-es6-class": "error",
      "react/prefer-stateless-function": "error",
      "react/no-multi-comp": ["error", { ignoreStateless: true }],
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } },
      ],
    },
  },
  eslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked
)
