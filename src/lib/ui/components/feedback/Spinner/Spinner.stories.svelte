<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Spinner from './Spinner.svelte';

	const { Story } = defineMeta({
		title: 'components/feedback/Spinner',
		component: Spinner,
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<Spinner />
</Story>
