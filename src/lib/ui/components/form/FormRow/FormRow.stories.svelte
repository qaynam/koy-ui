<script lang="ts" context="module">
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import FormLabel from '../FormLabel/FormLabel.svelte';
	import Input from '../Input/Input.svelte';
	import FormRow from './FormRow.svelte';

	const { Story } = defineMeta({
		title: 'components/form/FormRow',
		component: FormRow
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>)}
	<FormRow>
		<FormLabel for="input" {...args}>label</FormLabel>
		<Input placeholder="Placeholder" name="input" id="input" />
	</FormRow>
{/snippet}

<Story name="Default"></Story>
