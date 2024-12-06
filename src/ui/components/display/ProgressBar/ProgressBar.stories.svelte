<script lang="ts" context="module">
	import { Story } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import type { SvelteComponent } from 'svelte';
	import ProgressBar from './ProgressBar.svelte';
	import { Button, HStack } from '../..';

	export const meta: Meta<SvelteComponent<ProgressBar>> = {
		title: 'components/display/ProgressBar'
	};
</script>

<script lang="ts">
	let started = false;
	let complete = false;
	let canceled = false;
</script>

<Story name="Default">
	<ProgressBar bind:started bind:complete bind:canceled />
	<HStack>
		<Button variant="secondary" onClick={() => (started = true)}>start</Button>
		<Button variant="secondary" onClick={() => (complete = true)}>complete</Button>
		<Button variant="secondary" onClick={() => (canceled = true)}>canceled</Button>
	</HStack>
</Story>
