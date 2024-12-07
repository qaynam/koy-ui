<script lang="ts" context="module">
	import VStack from './VStack.svelte';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'components/layout/VStack',
		component: VStack
	});
</script>

<Story name="Default">
	<VStack>
		<div>Item 1</div>
		<div>Item 2</div>
		<div>Item 3</div>
	</VStack>
</Story>
