<script lang="ts" context="module">
	import { Modal, Button } from '$ui/components';
	import {
		defineMeta,
		setTemplate,
		type Args,
		type StoryContext
	} from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'components/overlay/Modal',
		component: Modal.Root,
		args: {
			show: false,
			size: 'default',
			zIndex: 'MODAL'
		}
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>, context: StoryContext<typeof Story>)}
	<Modal.Root show={false} {...args}>
		<Modal.Title>
			<h2>Modal</h2>
		</Modal.Title>
		<Modal.Body>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam labore autem rerum
				voluptates, itaque eligendi officia voluptatum in porro. Ipsam, optio? Consectetur deleniti,
				nihil commodi repellendus quos possimus praesentium facere?
			</p>
		</Modal.Body>
		<Modal.Footer>
			<Button
				onClick={() => {
					args.show = false;
				}}
				shadow={false}
				variant="primary"
				width="wider"
			>
				Ok
			</Button>
			<Button onClick={() => (args.show = false)} shadow={false} variant="secondary" width="wider">
				Close
			</Button>
		</Modal.Footer>
	</Modal.Root>
{/snippet}

<Story name="Default"></Story>
