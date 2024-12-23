<script lang="ts" context="module">
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import HStack from './HStack.svelte';

	const { Story } = defineMeta({
		title: 'components/layout/HStack',
		component: HStack
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>)}
	<HStack {...args}>
		<div>Item 1</div>
		<div>Item 2</div>
		<div>Item 3</div>
	</HStack>
{/snippet}

<Story name="Default"></Story>
