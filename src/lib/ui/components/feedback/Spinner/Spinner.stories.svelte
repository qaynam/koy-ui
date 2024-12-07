<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Spinner from './Spinner.svelte';

	const { Story } = defineMeta({
		title: 'components/feedback/Spinner',
		component: Spinner,
		argTypes: {
			fill: {
				control: {
					type: 'select',
					options: ['lighter', 'darker', 'default']
				}
			},
			size: {
				control: {
					type: 'number',
					min: 24
				}
			}
		},
		args: {
			fill: 'darker',
			size: 24
		}
	});
</script>

<Story name="Default" />
