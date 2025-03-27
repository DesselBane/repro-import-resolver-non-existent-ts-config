import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import {configs as tseslintConfigs} from "typescript-eslint";
import importPlugin from 'eslint-plugin-import-x'
import {createTypeScriptImportResolver} from "eslint-import-resolver-typescript";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },
  tseslintConfigs.recommended,
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          project: import.meta.dirname,
        }),
      ],
    },
  },
]);