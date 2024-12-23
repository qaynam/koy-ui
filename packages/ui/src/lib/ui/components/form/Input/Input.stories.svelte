<script lang="ts" context="module">
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import { Icon, Input } from '$ui/components';

	const { Story } = defineMeta({
		title: 'components/form/Input',
		component: Input,
		argTypes: {
			width: {
				control: {
					type: 'select',
					options: ['fill', 'auto']
				}
			},
			icon: {
				control: {
					type: 'select',
					options: Object.keys(Icon)
				}
			}
		},
		args: {
			placeholder: 'Placeholder',
			width: 'fill',
			error: false,
			icon: 'ArrowLeft',
			iconPosition: 'left'
		}
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>)}
	<Input {...args} />
{/snippet}

<Story name="Default"></Story>
