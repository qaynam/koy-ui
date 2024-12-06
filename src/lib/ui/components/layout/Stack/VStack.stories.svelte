<script lang="ts" context="module">
	import type { SvelteComponent } from 'svelte';
	import VStack from './VStack.svelte';
	import type { Meta } from '@storybook/svelte';
	import { Story } from '@storybook/addon-svelte-csf';

	export const meta: Meta<SvelteComponent<VStack>> = {
		title: 'components/layout/VStack'
	};
</script>

<Story name="Default">
	<VStack>
		<div>Item 1</div>
		<div>Item 2</div>
		<div>Item 3</div>
	</VStack>
</Story>
