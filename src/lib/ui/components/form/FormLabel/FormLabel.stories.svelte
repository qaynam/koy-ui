<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import FormLabel from './FormLabel.svelte';

	const { Story } = defineMeta({
		title: 'components/form/FormLabel',
		component: FormLabel,
		argTypes: {
			// label: { control: 'text' },
			// required: { control: 'boolean' },
			// disabled: { control: 'boolean' },
			// error: { control: 'boolean' },
			// helpText: { control: 'text' }
		},
		parameters: {
			controls: { expanded: true }
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<FormLabel>Form label</FormLabel>
</Story>
