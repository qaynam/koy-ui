<script lang="ts" context="module">
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import FormLabel from './FormLabel.svelte';

	const { Story } = defineMeta({
		title: 'components/form/FormLabel',
		component: FormLabel,
		argTypes: {},
		args: {
			required: false
		}
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>)}
	<FormLabel required={false} {...args}>Form Label</FormLabel>
{/snippet}

<Story name="Default"></Story>
