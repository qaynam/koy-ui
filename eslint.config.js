import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		plugins: { 'unused-imports': unusedImports }
	},
	{
		files: ['**/*.svelte'],
		rules: {
			'no-unused-vars': 'off',
			'@typescript-eslint/no-unused-vars': 'off',
			'unused-imports/no-unused-imports': 'warn',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern:
						'^(_|\\$\\$Props|\\$\\$RestProps|\\$\\$Slots|\\$\\$Events|\\$\\$PropsDef|\\$\\$EventsDef)',
					args: 'after-used',
					argsIgnorePattern:
						'^(_|\\$\\$Props|\\$\\$RestProps|\\$\\$Slots|\\$\\$Events|\\$\\$PropsDef|\\$\\$EventsDef)'
				}
			],
			'@typescript-eslint/no-empty-object-type': [
				'error',
				{
					allowWithName: 'Props$'
				}
			],
			'no-console': 'error',
			'no-undef': 'off',
			'svelte/valid-compile': [
				'error',
				{
					ignoreWarnings: false
				}
			],
			'svelte/html-closing-bracket-spacing': ['warn'],
			'svelte/html-quotes': ['error']
		},
		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	}
);
