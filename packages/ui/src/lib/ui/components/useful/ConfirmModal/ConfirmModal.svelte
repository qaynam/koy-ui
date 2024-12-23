<script lang="ts">
	import { writable } from 'svelte/store';
	import type { State } from './module';
	import { Modal, Button } from '$ui/components';

	export let state = writable<State>({
		show: false,
		message: '',
		resolver: undefined
	});

	$: show = $state.show;
	$: message = $state.message;

	$: handleCancel = () => {
		$state.resolver?.(false);
		state.update((prev) => ({ ...prev, show: false, resolver: undefined }));
	};

	$: handleOk = () => {
		$state.resolver?.(true);
		state.update((prev) => ({ ...prev, show: false, resolver: undefined }));
	};
</script>

<Modal.Root {show}>
	<Modal.Title>注意</Modal.Title>
	<Modal.Body>
		{message}
	</Modal.Body>
	<Modal.Footer>
		<Button variant="secondary" shadow={false} width="wider" onClick={handleCancel}
			>キャンセル</Button
		>
		<Button variant="primary" shadow={false} width="wider" onClick={handleOk}>削除</Button>
	</Modal.Footer>
</Modal.Root>
