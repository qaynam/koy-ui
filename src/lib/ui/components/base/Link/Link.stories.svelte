<script context="module" lang="ts">
	import Link from './Link.svelte';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { VStack } from '../..';

	const { Story } = defineMeta({
		title: 'components/base/Link',
		component: Link,
		argTypes: {
			external: {
				control: 'boolean',
				defaultValue: false
			},
			underline: {
				control: 'boolean',
				defaultValue: false
			}
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<VStack>
		<Link href="https://google.com" external={true}>Google (External link)</Link>
		<Link href="/" external={false}>Home</Link>
		<Link href="/404" underline>link with underline</Link>
	</VStack>
</Story>
