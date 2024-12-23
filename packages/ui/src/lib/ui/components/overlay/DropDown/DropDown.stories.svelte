<script lang="ts" context="module">
	import { defineMeta, setTemplate } from '@storybook/addon-svelte-csf';
	import { DropDown, Divider, Button, Typography } from '$ui/components';

	const { Story } = defineMeta({
		title: 'components/overlay/DropDown',
		component: DropDown.Root,
		args: {}
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template()}
	<DropDown.Root>
		<DropDown.Button slot="button">
			<Button variant="secondary">DropDown Menu</Button>
		</DropDown.Button>
		<DropDown.Items slot="items">
			<DropDown.Item>
				<Button icon="Plus" variant="secondary" shadow={false} width="fill">商品を追加</Button>
			</DropDown.Item>
			<DropDown.Item>
				<Divider />
			</DropDown.Item>
			<DropDown.Item>
				<Typography font="body_M_Bold">user name</Typography>
			</DropDown.Item>
		</DropDown.Items>
	</DropDown.Root>
{/snippet}

<Story name="Default"></Story>
