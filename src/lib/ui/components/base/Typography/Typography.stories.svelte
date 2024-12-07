<script lang="ts" context="module">
	import Typography from './Typography.svelte';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { VStack } from '../..';

	const { Story } = defineMeta({
		title: 'components/base/Typography',
		component: Typography,
		argTypes: {
			as: {
				control: {
					type: 'select',
					options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']
				}
			},
			font: {
				control: {
					type: 'select',
					options: ['title', 'body_M_Bold', 'body_M', 'body_S_Bold', 'body_S']
				}
			}
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<VStack>
		<Typography as="h1" font="title">h1. Heading (title)</Typography>
		<Typography as="h2" font="body_M_Bold">h2. Heading (body m bold)</Typography>
		<Typography as="p">p. Paragraph</Typography>
	</VStack>
</Story>
