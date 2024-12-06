<script lang="ts" context="module">
	import { Story } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import type { SvelteComponent } from 'svelte';
	import FormLabel from './FormLabel.svelte';

	export const meta: Meta<SvelteComponent<FormLabel>> = {
		title: 'components/form/FormLabel',
		component: FormLabel,
		argTypes: {
			label: { control: 'text' },
			required: { control: 'boolean' },
			disabled: { control: 'boolean' },
			error: { control: 'boolean' },
			helpText: { control: 'text' }
		},
		parameters: {
			controls: { expanded: true }
		}
	};
</script>

<Story name="Default">
	<FormLabel>Form label</FormLabel>
</Story>
