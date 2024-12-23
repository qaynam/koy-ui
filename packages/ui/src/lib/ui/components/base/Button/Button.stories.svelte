<script module lang="ts">
	import {
		defineMeta,
		setTemplate,
		type Args,
		type StoryContext
	} from '@storybook/addon-svelte-csf';
	import { Button, Icon } from '$ui/components';

	const { Story } = defineMeta({
		title: 'components/base/Button',
		component: Button,
		argTypes: {
			width: {
				control: {
					type: 'select',
					options: ['auto', 'center-fill', 'fill', 'wider']
				}
			},
			icon: {
				control: {
					type: 'select',
					options: [...Object.keys(Icon)]
				}
			}
		},
		args: {
			loading: false,
			shadow: true,
			width: 'auto',
			icon: undefined,
			disabled: false,
			variant: 'primary',
			color: 'default',
			iconPosition: 'left',
			onClick: () => {
				alert('clicked');
			},
			type: 'button'
		}
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>, context: StoryContext<typeof Story>)}
	<Button {...args}>Button</Button>
{/snippet}

<Story name="Default"></Story>
