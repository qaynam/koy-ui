<script lang="ts" context="module">
	import { Story } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import type { SvelteComponent } from 'svelte';
	import { VStack } from '../..';
	import Input from './Input.svelte';

	export const meta: Meta<SvelteComponent<Input>> = {
		title: 'components/form/Input'
	};
</script>

<Story name="Default">
	<VStack>
		<Input placeholder="Placeholder" />
		<Input placeholder="Placeholder" disabled />
		<Input
			placeholder="Placeholder"
			icon="Eye"
			iconClickable
			on:iconClick={() => alert('clicked')}
		/>
	</VStack>
</Story>
