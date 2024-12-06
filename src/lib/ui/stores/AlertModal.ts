import * as Store from 'svelte/store';

interface ErrorModal {
	show: boolean;
	message: string;
	closeAction?: () => void;
}

export const globalErrorState = Store.writable<ErrorModal>({
	show: false,
	message: 'エラーが発生しました'
});

export const showErrorModal = (message: string, closeAction?: () => void) => {
	globalErrorState.update((prev) => ({
		...prev,
		show: true,
		message,
		closeAction: closeAction ?? prev.closeAction
	}));
};
