<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { PasswordInput, VStack } from '$ui/components';

	const { Story } = defineMeta({
		title: 'components/form/PasswordInput',
		component: PasswordInput,
		argTypes: {
			placeholder: { control: 'text' },
			id: { control: 'text' },
			name: { control: 'text' }
		},
		tags: ['autodocs']
	});
</script>

<Story name="Default">
	<VStack>
		<PasswordInput id="password-input" name="password" placeholder="Placeholder" />
	</VStack>
</Story>
