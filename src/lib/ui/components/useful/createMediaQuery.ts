import { breakpoints } from '$ui/styles';
import { onMount } from 'svelte';
import { derived, writable } from 'svelte/store';

export const createWatchMediaQuery = (
	condition: 'lessThen' | 'greaterThen',
	size: keyof typeof breakpoints
) => {
	const isMatched = writable(false);

	onMount(() => {
		const mediaQuery = window.matchMedia(
			`(${condition === 'lessThen' ? 'max-width' : 'min-width'}: ${breakpoints[size]}px)`
		);
		const listener = (e: MediaQueryListEvent) => {
			isMatched.set(e.matches);
		};

		isMatched.set(mediaQuery.matches);

		mediaQuery.addEventListener('change', listener);
		// window.addEventListener('change', listener);

		return () => mediaQuery.removeEventListener('change', listener);
	});

	return derived(isMatched, ($isMatched) => $isMatched);
};
