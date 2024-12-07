<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import HStack from './HStack.svelte';

	const { Story } = defineMeta({
		title: 'components/layout/HStack',
		component: HStack
	});
</script>

<Story name="Default">
	<HStack>
		<div>Item 1</div>
		<div>Item 2</div>
		<div>Item 3</div>
	</HStack>
</Story>
