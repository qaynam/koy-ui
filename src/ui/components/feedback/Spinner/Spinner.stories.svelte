<script lang="ts" context="module">
	import { Story } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import type { SvelteComponent } from 'svelte';
	import Spinner from './Spinner.svelte';

	export const meta: Meta<SvelteComponent<Spinner>> = {
		title: 'components/feedback/Spinner'
	};
</script>

<Story name="Default">
	<Spinner />
</Story>
