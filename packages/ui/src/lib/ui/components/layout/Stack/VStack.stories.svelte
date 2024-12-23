<script lang="ts" context="module">
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import { VStack } from '$ui/components';

	const { Story } = defineMeta({
		title: 'components/layout/VStack',
		component: VStack,
		args: {
			spacing: 'default'
		}
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>)}
	<VStack {...args}>
		<div>Item 1</div>
		<div>Item 2</div>
		<div>Item 3</div>
	</VStack>
{/snippet}

<Story name="Default"></Story>
