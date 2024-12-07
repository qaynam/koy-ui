<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import SelectBox from './SelectBox.svelte';

	const { Story } = defineMeta({
		title: 'components/form/SelectBox',
		component: SelectBox
	});
</script>

<Story name="Default">
	<SelectBox placeholder="Select Box">
		{#each Array.from({ length: 10 }) as _, index}
			<option value={index}>Option {index}</option>
		{/each}
		<option value="1">Option 1</option>
	</SelectBox>
</Story>
