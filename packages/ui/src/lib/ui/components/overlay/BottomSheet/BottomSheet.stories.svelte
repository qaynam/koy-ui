<script lang="ts" context="module">
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'components/overlay/BottomSheet',
		argTypes: {
			height: {
				control: {
					type: 'number',
					min: 30,
					max: 100
				}
			}
		},
		args: {
			show: false,
			height: 30
		}
	});
</script>

<script lang="ts">
	import { HStack, VStack, BottomSheet, Typography } from '$ui/components';

	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>)}
	<BottomSheet show={false} {...args}>
		<VStack>
			<Typography font="body_M_Bold">Bottom Sheet Modal</Typography>
			<HStack wrap>
				{#each Array.from({ length: 4 }).fill('https://picsum.photos/200/200?random=5') as item}
					<img src={String(item)} alt="random" />
				{/each}
			</HStack>
		</VStack>
	</BottomSheet>
{/snippet}

<Story name="Default"></Story>
