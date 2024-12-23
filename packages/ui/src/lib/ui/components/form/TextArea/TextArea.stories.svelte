<script lang="ts" context="module">
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import { TextArea } from '$ui/components';

	const { Story } = defineMeta({
		title: 'components/form/TextArea',
		component: TextArea
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>)}
	<TextArea {...args}></TextArea>
{/snippet}

<Story name="Default"></Story>
