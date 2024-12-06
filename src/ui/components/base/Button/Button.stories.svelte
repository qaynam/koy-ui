<script context="module" lang="ts">
	import { Story } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import { VStack } from '../..';
	import Icons from '../../icons';
	import Button from './Button.svelte';

	export const meta: Meta<Button> = {
		title: 'components/base/Button',
		component: Button
	};
</script>

<!-- Dynamic snippet should be disabled for this story -->
<Story name="Primary">
	<VStack>
		<div>
			<h2>Primary</h2>
			<hr />
		</div>
		<div>
			<Button>Button</Button>
		</div>
		<div>
			<Button loading>Button</Button>
		</div>
		<div>
			<Button width="wider" shadow={false}>Button</Button>
		</div>
		<div>
			<Button icon={Icons.Eye}>With Icon</Button>
		</div>
		<div>
			<Button icon={Icons.Eye} disabled>With Icon (disabled)</Button>
		</div>
	</VStack>
</Story>

<Story name="Secondary">
	<VStack>
		<div>
			<h2>Secondary</h2>
			<hr />
		</div>
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

<Story name="tertiary">
	<VStack>
		<div>
			<h2>tertiary</h2>
			<hr />
		</div>
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
