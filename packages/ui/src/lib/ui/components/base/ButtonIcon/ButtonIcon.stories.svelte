<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { ButtonIcon, Icon } from '$ui/components';

	const { Story } = defineMeta({
		title: 'components/base/ButtonIcon',
		component: ButtonIcon,
		argTypes: {
			icon: {
				control: {
					type: 'select',
					options: Object.keys(Icon)
				}
			},
			type: {
				control: {
					type: 'select',
					options: ['button', 'submit', 'reset']
				}
			},
			variant: {
				control: {
					type: 'select',
					options: ['primary', 'secondary', 'tertiary']
				}
			},
			shadow: {
				control: {
					type: 'boolean'
				}
			},
			disabled: {
				control: {
					type: 'boolean'
				}
			},
			loading: {
				control: {
					type: 'boolean'
				}
			}
		},
		args: {
			icon: 'ArrowLeft',
			type: 'button',
			variant: 'secondary',
			shadow: false,
			disabled: false,
			loading: false,
			onClick: () => void 0
		}
	});
</script>

<Story name="default"></Story>
