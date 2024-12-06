<script lang="ts" context="module">
	import { Button, Modal } from '$ui/components';
	import { get, writable, type Writable } from 'svelte/store';

	export type ConfirmModalState = Writable<State>;

	type State = {
		show: boolean;
		message: string;
		resolver?: (value: boolean) => void;
		onCancel?: () => void;
		onOk?: () => void;
	};

	export const createConfirmModal = (confirm: Writable<State> | undefined) => {
		if (!confirm) {
			return;
		}

		return (message: string) => {
			return new Promise((_resolve) => {
				confirm.update((prev) => ({ ...prev, message, resolver: _resolve, show: true }));
			});
		};
	};
</script>

<script lang="ts">
	export let state = writable<State>({
		show: false,
		message: '',
		resolver: undefined
	});

	$: handleCancel = () => {
		$state.resolver?.(false);
		state.update((prev) => ({ ...prev, show: false, resolver: undefined }));
	};

	$: handleOk = () => {
		$state.resolver?.(true);
		state.update((prev) => ({ ...prev, show: false, resolver: undefined }));
	};
</script>

<Modal.Root show={$state.show}>
	<Modal.Title>注意</Modal.Title>
	<Modal.Body>
		{$state.message}
	</Modal.Body>
	<Modal.Footer>
		<Button variant="secondary" shadow={false} width="wider" onClick={handleCancel}
			>キャンセル</Button
		>
		<Button variant="primary" shadow={false} width="wider" onClick={handleOk}>削除</Button>
	</Modal.Footer>
</Modal.Root>
