<script context="module" lang="ts">
	import type { Meta } from '@storybook/svelte';
	import type { SvelteComponent } from 'svelte';
	import Link from './Link.svelte';
	import { Story } from '@storybook/addon-svelte-csf';
	import { VStack } from '../..';

	export const meta: Meta<SvelteComponent<typeof Link>> = {
		title: 'components/base/Link'
	};
</script>

<Story name="Default">
	<VStack>
		<Link href="https://google.com" external={true}>Google (External link)</Link>
		<Link href="/" external={false}>Home</Link>
		<Link href="/404" underline>link with underline</Link>
	</VStack>
</Story>
