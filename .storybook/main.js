/** @type { import('@storybook/sveltekit').StorybookConfig } */
const config = {
	stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|ts|svelte)'],
	addons: [
		'@storybook/addon-svelte-csf',
		'@storybook/addon-essentials',
		'@chromatic-com/storybook',
		'@storybook/addon-interactions'
	],
	framework: {
		name: '@storybook/sveltekit',
		options: {}
	},
	managerHead: `
	<meta name="title" content="Koy UI" /><meta
		name="description"
		content="Koy UI is a collection of Svelte components for building web applications."
/><!-- Open Graph / Facebook --><meta property="og:type" content="website" /><meta
		property="og:url"
		content="https://koy-ui.vercel.app/"
/><meta property="og:title" content="Koy UI" /><meta
		property="og:type"
		content="article"
/><meta property="og:site_name" content="Koy UI" /><meta
		property="og:description"
		content="Koy UI is a collection of Svelte components for building web applications."
/><meta property="og:image" content="https://images.unsplash.com/photo-1530188270989-d9f7b6df3a69?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" /><meta
		property="og:image:alt"
		content="Koy UI CoverImage"
/><!-- Twitter --><meta property="twitter:site" content="@qaynam1" /><meta
		property="twitter:card"
		content="summary_large_image"
/><meta property="twitter:url" content="https://koy-ui.vercel.app/" /><meta
		property="twitter:title"
		content="Koy UI"
/><meta property="twitter:description" content="Koy UI is a collection of Svelte components for building web applications." /><meta
		property="twitter:image"
		content="https://images.unsplash.com/photo-1530188270989-d9f7b6df3a69?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
/>
  `
};
export default config;
