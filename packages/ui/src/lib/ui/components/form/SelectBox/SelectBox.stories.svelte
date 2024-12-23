<script lang="ts" context="module">
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import SelectBox from './SelectBox.svelte';

	const { Story } = defineMeta({
		title: 'components/form/SelectBox',
		component: SelectBox
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>)}
	<SelectBox placeholder="Select Box" {...args}>
		{#each Array.from({ length: 10 }) as _, index}
			<option value={index}>Option {index}</option>
		{/each}
		<option value="1">Option 1</option>
	</SelectBox>
{/snippet}

<Story name="Default"></Story>
