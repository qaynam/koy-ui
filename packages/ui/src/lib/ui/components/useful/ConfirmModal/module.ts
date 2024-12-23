import { type Writable } from 'svelte/store';

export type ConfirmModalState = Writable<State>;

export type State = {
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
