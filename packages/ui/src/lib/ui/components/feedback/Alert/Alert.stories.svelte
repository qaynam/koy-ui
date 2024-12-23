<script lang="ts" context="module">
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import { Alert } from '$ui/components';

	const { Story } = defineMeta({
		title: 'components/feedback/Alert',
		component: Alert,
		argTypes: {
			type: {
				control: {
					type: 'select',
					options: ['info', 'success', 'error']
				}
			}
		},
		args: {
			type: 'info'
		}
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>)}
	<Alert type="info" {...args}>
		Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum excepturi magnam, quidem,
		quisquam, sed perspiciatis dolore fugiat quasi amet suscipit ipsa laboriosam voluptate harum
		quam dicta odio delectus iure adipisci?
	</Alert>
{/snippet}

<Story name="Default"></Story>
