<script lang="ts" context="module">
	import { Story } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import type { SvelteComponent } from 'svelte';
	import Badge from './Badge.svelte';
	import { VStack } from '$ui/components';

	export const meta: Meta<SvelteComponent<Badge>> = {
		title: 'components/base/Badge'
	};
</script>

<Story name="Default">
	<VStack>
		<Badge text="greenLight" bg="greenLight" />
		<Badge text="gray400" bg="gray400" />
	</VStack>
</Story>
