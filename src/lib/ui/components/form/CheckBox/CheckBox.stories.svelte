<script lang="ts" context="module">
	import { defineMeta, type Args, setTemplate } from '@storybook/addon-svelte-csf';
	import { FormLabel, CheckBox } from '$ui/components';

	const { Story } = defineMeta({
		title: 'components/form/CheckBox',
		component: CheckBox,
		args: {
			value: false
		}
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>)}
	<FormLabel>
		<CheckBox checked={true} {...args} />
		CheckBox
	</FormLabel>
{/snippet}

<Story name="Default">
	<FormLabel>
		<CheckBox checked={true} />
		CheckBox
	</FormLabel>
</Story>
