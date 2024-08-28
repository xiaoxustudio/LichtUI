import js from "@eslint/js";
import eslintPluginVue, { rules } from "eslint-plugin-vue";
import ts from "typescript-eslint";

export default ts.config(
	js.configs.recommended,
	...ts.configs.recommended,
	...eslintPluginVue.configs["flat/recommended"],
	{
		files: ["*.vue", "**/*.vue"],
		languageOptions: {
			parserOptions: {
				parser: "@typescript-eslint/parser",
				parserOptions: {
					vueFeatures: {
						filter: true,
						interpolationAsNonHTML: false,
						rules: {
							"@typescript-eslint/no-unused-vars": "off",
						},
					},
				},
			},
		},
		rules: {
			"vue/max-attributes-per-line": "off",
			"vue/html-indent": "off",
			"@typescript-eslint/no-unused-vars": "off",
		},
	}
);
