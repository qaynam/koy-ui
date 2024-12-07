<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { PasswordInput } from '$ui/components';

	const { Story } = defineMeta({
		title: 'components/form/PasswordInput',
		component: PasswordInput,
		argTypes: {
			placeholder: { control: 'text' },
			id: { control: 'text' },
			name: { control: 'text' }
		},
		args: {
			placeholder: 'Password',
			id: 'password',
			name: 'password'
		}
	});
</script>

<Story name="Default"></Story>
