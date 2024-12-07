<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Skeleton from './Skeleton.svelte';

	const { Story } = defineMeta({
		title: 'components/feedback/Skeleton',
		component: Skeleton,
		argTypes: {
			show: {
				control: { type: 'boolean' }
			},
			width: {
				control: { type: 'text' }
			},
			height: {
				control: { type: 'text' }
			}
		},
		args: {
			show: true,
			width: '100%',
			height: '400px'
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default"></Story>
