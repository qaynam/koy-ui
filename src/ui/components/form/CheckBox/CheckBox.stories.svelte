<script lang="ts" context="module">
	import { Story } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import type { SvelteComponent } from 'svelte';
	import CheckBox from './CheckBox.svelte';
	import { FormLabel } from '$ui/components';

	export const meta: Meta<SvelteComponent<CheckBox>> = {
		title: 'components/form/CheckBox'
	};
</script>

<Story name="Default">
	<FormLabel>
		<CheckBox checked={true} />
		CheckBox
	</FormLabel>
</Story>
