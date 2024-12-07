<script module lang="ts">
	import { defineMeta, type Args, setTemplate } from '@storybook/addon-svelte-csf';
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

<script>
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>)}
	<Overlay show={true} {...args}>
		<p>some other contents</p>
		<img src="https://picsum.photos/200/?random=5" style:object-fit="contain" alt="random sample" />
	</Overlay>
{/snippet}

<Story name="default" />
