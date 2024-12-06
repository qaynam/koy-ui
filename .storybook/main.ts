// Replace sveltekit with svelte-vite if you are not working with SvelteKit
import type { StorybookConfig } from '@storybook/svelte-vite';
import path from 'path';

const config: StorybookConfig = {
	framework: '@storybook/svelte-vite',
	// stories: ['../src/**/*.stories.svelte'],
	stories: ['../src/ui/components/form/SingleChoicer/*.stories.svelte'],

	addons: [
		// '@storybook/addon-links',
		// '@storybook/addon-essentials',
		// '@storybook/addon-interactions',
		// Other Storybook addons
		{
			name: '@storybook/addon-svelte-csf',
			options: {
				legacyTemplate: true // Enables the legacy template syntax
			}
		} //👈 The Svelte CSF addon goes here
	],

	viteFinal: async (config) => ({
		...config,
		esbuild: {
			treeShaking: true
		},
		resolve: {
			alias: [
				{
					find: '$ui/',
					replacement: path.resolve(__dirname, '../src/ui/')
				}
			]
		}
	}),
	typescript: {
		check: false
	},
	docs: {
		autodocs: false
	}
};

export default config;
