import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const __dirname = new URL('.', import.meta.url).pathname;

export default defineConfig({
	plugins: [svelte()],
	resolve: {
		alias: [
			{
				find: '$ui/',
				replacement: `${__dirname}/src/ui/`
			}
		]
	},
	build: {
		lib: {
			entry: `${__dirname}/src/ui/index.ts`,
			name: 'index'
		},
		sourcemap: 'inline'
	}
});
