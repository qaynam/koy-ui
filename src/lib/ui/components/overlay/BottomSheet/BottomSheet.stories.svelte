<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'components/overlay/BottomSheet',
		argTypes: {
			height: {
				control: {
					type: 'text'
				}
			}
		},
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	import { Button, HStack, VStack, BottomSheet, Typography, SelectBox } from '$ui/components';

	let show = false;
	let height: string | undefined = undefined;

	$: handleClick = () => (show = !show);
	$: bottomSheetHeight = height ? Number(height) : undefined;
</script>

<Story name="Default">
	<div>
		<VStack width="fill" wrap={false}>
			<Button onClick={handleClick}>Open BottomSheet</Button>
			<SelectBox bind:value={height} placeholder="bottom sheet height">
				<option value="30">30(default)</option>
				<option value="50">50</option>
				<option value="80">80</option>
			</SelectBox>
		</VStack>
	</div>
	<BottomSheet bind:show height={bottomSheetHeight}>
		<VStack>
			<Typography font="body_M_Bold">Bottom Sheet Modal</Typography>
			<HStack wrap>
				{#each Array.from({ length: 4 }).fill('https://picsum.photos/200/200?random=5') as item}
					<img src={String(item)} alt="random" />
				{/each}
			</HStack>
		</VStack>
	</BottomSheet>
</Story>
