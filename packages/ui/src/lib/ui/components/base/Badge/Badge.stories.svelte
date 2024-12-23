<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Badge from './Badge.svelte';

	const { Story } = defineMeta({
		title: 'components/base/Badge',
		component: Badge,
		tags: ['autodocs']
	});
</script>

<Story
	name="Default"
	args={{
		text: 'Badge Component'
	}}
/>
