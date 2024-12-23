<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Divider from './Divider.svelte';

	const { Story } = defineMeta({
		title: 'components/base/Divider',
		component: Divider,
		argTypes: {
			text: {
				control: 'text',
				defaultValue: 'inside text'
			}
		},
		args: {
			text: 'inside text'
		}
	});
</script>

<Story name="default" />
