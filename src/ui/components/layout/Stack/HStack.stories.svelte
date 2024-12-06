<script lang="ts" context="module">
	import type { SvelteComponent } from 'svelte';
	import type { Meta } from '@storybook/svelte';
	import { Story } from '@storybook/addon-svelte-csf';
	import HStack from './HStack.svelte';

	export const meta: Meta<SvelteComponent<HStack>> = {
		title: 'components/layout/HStack'
	};
</script>

<Story name="Default">
	<HStack>
		<div>Item 1</div>
		<div>Item 2</div>
		<div>Item 3</div>
	</HStack>
</Story>
