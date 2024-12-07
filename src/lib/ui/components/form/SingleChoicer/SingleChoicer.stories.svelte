<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import SingleChoicer from './SingleChoicer.svelte';

	const { Story } = defineMeta({
		title: 'components/form/SingleChoicer',
		component: SingleChoicer,
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	let selectedItem = 'label1';
	const items = [
		{ label: 'label1', value: 'value1' },
		{ label: 'label2', value: 'value2' },
		{ label: 'label3', value: 'value3' }
	];

	// こうしないと、再描画されない
	$: handleActive = ({ label }: { label: string; value: string }) => label === selectedItem;

	const handleChange = (params: { item: { label: string; value: string } }) => {
		selectedItem = params.item.label;
	};
</script>

<Story name="Default">
	<SingleChoicer {items} onChange={handleChange} name="single-choicer" active={handleActive} />
</Story>
