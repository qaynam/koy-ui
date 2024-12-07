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
	<meta name="title" content="Koy UI" />
  <meta
    name="description"
    content="Koy UI is a collection of Svelte components for building web applications."
    />
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://koy-ui.vercel.app/"
    />
  <meta property="og:title" content="Koy UI" />
  <meta
    property="og:type"
    content="article"
    />
  <meta property="og:site_name" content="Koy UI" />
  <meta
    property="og:description"
    content="Koy UI is a collection of Svelte components for building web applications."
    />
  <meta property="og:image" content="https://i.gyazo.com/babc5a2a332d3c0a4263d8e4b52e343b.jpeg" />
  <meta
    property="og:image:alt"
    content="Koy UI CoverImage"
    />
  <!-- Twitter -->
  <meta property="twitter:site" content="@qaynam1" />
  <meta
    property="twitter:card"
    content="summary_large_image"
    />
  <meta property="twitter:url" content="https://koy-ui.vercel.app/" />
  <meta
    property="twitter:title"
    content="Koy UI"
    />
  <meta property="twitter:description" content="Koy UI is a collection of Svelte components for building web applications." />
  <meta
    property="twitter:image"
    content="https://i.gyazo.com/babc5a2a332d3c0a4263d8e4b52e343b.jpeg"
    />
  `
};
export default config;
