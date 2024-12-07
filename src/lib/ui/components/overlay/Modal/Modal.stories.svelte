<script lang="ts" context="module">
	import { Button, Modal } from '$ui/components';
	import ModalRoot from './Modal.svelte';
	import { defineMeta } from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'components/overlay/Modal',
		component: ModalRoot,
		tags: ['autodocs']
	});
</script>

<script lang="ts">
	export let show = false;
</script>

<Story name="Default">
	<Button onClick={() => (show = !show)}>Open Modal</Button>
	<Modal.Root {show}>
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
			<Button onClick={() => (show = false)} shadow={false} variant="primary" width="wider">
				Ok
			</Button>
			<Button onClick={() => (show = false)} shadow={false} variant="secondary" width="wider">
				Close
			</Button>
		</Modal.Footer>
	</Modal.Root>
</Story>
