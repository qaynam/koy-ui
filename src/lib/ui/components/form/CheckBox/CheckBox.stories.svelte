<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import CheckBox from './CheckBox.svelte';
	import { FormLabel } from '$ui/components';

	const { Story } = defineMeta({
		title: 'components/form/CheckBox',
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<FormLabel>
		<CheckBox checked={true} />
		CheckBox
	</FormLabel>
</Story>
