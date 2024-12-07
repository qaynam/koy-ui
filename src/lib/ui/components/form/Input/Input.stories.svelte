<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { VStack } from '../..';
	import Input from './Input.svelte';

	const { Story } = defineMeta({
		title: 'components/form/Input'
	});
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
