<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { VStack } from '../..';
	import Icons from '../../icons';
	import Button from './Button.svelte';

	const { Story } = defineMeta({
		title: 'components/base/Button',
		component: Button,
		argTypes: {
			variant: {
				control: {
					type: 'select',
					options: ['primary', 'secondary', 'tertiary']
				}
			}
		},
		tags: ['autodocs']
	});
</script>

<Story
	name="Default"
	args={{
		loading: false,
		shadow: true,
		width: 'auto',
		icon: undefined,
		disabled: false,
		children: 'Button'
	}}
>
	<Button>button</Button>
</Story>

<Story name="Secondary">
	<VStack>
		<div>
			<Button variant="secondary">Button</Button>
		</div>
		<div>
			<Button variant="secondary" loading>Button</Button>
		</div>
		<div>
			<Button variant="secondary" width="wider" shadow={false}>Button</Button>
		</div>
		<div>
			<Button icon={Icons.Eye} variant="secondary">With Icon</Button>
		</div>
		<div>
			<Button icon={Icons.Eye} variant="secondary" disabled>With Icon (disabled)</Button>
		</div>
	</VStack>
</Story>

<Story name="Tertiary">
	<VStack>
		<div>
			<Button variant="tertiary">Button</Button>
		</div>
		<div>
			<Button variant="tertiary" loading>Button</Button>
		</div>
		<div>
			<Button icon={Icons.Eye} variant="tertiary">With Icon</Button>
		</div>
		<div>
			<Button icon={Icons.Eye} variant="tertiary" disabled>With Icon (disabled)</Button>
		</div>
	</VStack>
</Story>
