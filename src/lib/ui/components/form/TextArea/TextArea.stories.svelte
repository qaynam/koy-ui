<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import TextArea from './TextArea.svelte';
	import { Typography, VStack } from '$ui/components';

	const { Story } = defineMeta({
		title: 'components/form/TextArea',
		component: TextArea,
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<div style:width="400px">
		<VStack>
			<Typography font="medium_M_bold">TextArea</Typography>
			<TextArea rows={10} width="full" />
		</VStack>
	</div>
</Story>
