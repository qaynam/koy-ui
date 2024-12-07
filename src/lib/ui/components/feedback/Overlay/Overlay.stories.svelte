<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import { Overlay } from '$ui/components';

	const { Story } = defineMeta({
		title: 'components/feedback/Overlay',
		component: Overlay,
		argTypes: {
			show: {
				control: {
					type: 'boolean'
				}
			}
		},
		args: {
			show: true
		}
	});
</script>

<p>
	Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic omnis neque illum eaque nihil modi
	facilis, vero nulla nobis ipsa, praesentium eos? Ipsum quae maxime tempora nesciunt a, dolore
	quasi.
</p>
<Story name="default" />
