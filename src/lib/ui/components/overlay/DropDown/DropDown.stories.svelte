<script lang="ts" context="module">
	import { Button, Divider } from '$ui/components';
	import Typography from '$ui/components/base/Typography/Typography.svelte';
	import Icon from '$ui/components/icons';
	import { Story } from '@storybook/addon-svelte-csf';
	import type { Meta } from '@storybook/svelte';
	import type { SvelteComponent } from 'svelte';
	import DropDown from './';

	export const meta: Meta<SvelteComponent<typeof DropDown.Root>> = {
		title: 'components/overlay/DropDown'
	};
</script>

<Story name="Default">
	<DropDown.Root>
		<DropDown.Button slot="button">
			<Button variant="secondary">Menu</Button>
		</DropDown.Button>
		<DropDown.Items slot="items">
			<DropDown.Item>
				<Button icon={Icon.Plus} variant="secondary" shadow={false} width="fill">商品を追加</Button>
			</DropDown.Item>
			<DropDown.Item>
				<Divider />
			</DropDown.Item>
			<DropDown.Item>
				<Typography font="body_M_Bold">user name</Typography>
			</DropDown.Item>
		</DropDown.Items>
	</DropDown.Root>
</Story>
