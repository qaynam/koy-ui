<script lang="ts" context="module">
	import { Story } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import type { SvelteComponent } from 'svelte';
	import TextArea from './TextArea.svelte';
	import { Typography, VStack } from '$ui/components';

	export const meta: Meta<SvelteComponent<TextArea>> = {
		title: 'components/form/TextArea'
	};
</script>

<Story name="Default">
	<div style:width="400px">
		<VStack>
			<Typography font="medium_M_bold">TextArea</Typography>
			<TextArea rows={10} width="full" />
		</VStack>
	</div>
</Story>
