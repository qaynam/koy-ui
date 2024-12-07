<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ProgressBar from './ProgressBar.svelte';
	import { Button, HStack } from '../..';

	const { Story } = defineMeta({
		title: 'components/display/ProgressBar',
		component: ProgressBar,
		argTypes: {
			started: {
				control: {
					type: 'boolean'
				}
			},
			complete: {
				control: {
					type: 'boolean'
				}
			},
			canceled: {
				control: {
					type: 'boolean'
				}
			}
		}
	});
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
