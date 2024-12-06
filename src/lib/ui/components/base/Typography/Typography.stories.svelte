<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import type { SvelteComponent } from 'svelte';
	import Typography from './Typography.svelte';
	import { Story } from '@storybook/addon-svelte-csf';
	import { VStack } from '../..';

	export const meta: Meta<SvelteComponent<Typography>> = {
		title: 'components/base/Typography'
	};
</script>

<Story name="Default">
	<VStack>
		<Typography as="h1" font="title">h1. Heading (title)</Typography>
		<Typography as="h2" font="body_M_Bold">h2. Heading (body m bold)</Typography>
		<Typography as="p">p. Paragraph</Typography>
	</VStack>
</Story>
