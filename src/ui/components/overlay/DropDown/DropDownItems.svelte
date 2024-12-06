<script lang="ts">
	import { getContext } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { type TransitionConfig } from 'svelte/transition';
	import type { DropDownContext } from './DropDown.svelte';
	import style from './style';
	import { VStack } from '$ui/components';
	import type { Spacing } from '$ui/styles/types';

	interface $$Props {
		/**
		 * スペースの種類
		 *
		 * @default "default"
		 */
		spacing?: Spacing;
	}

	export let spacing: $$Props['spacing'] = 'default';

	$: dropDown = getContext<DropDownContext>('dropdown');

	function fadeInOut(
		node: HTMLDivElement,
		{ delay = 0, duration = 300, easing = cubicInOut } = {}
	): TransitionConfig {
		const o = +getComputedStyle(node).opacity;
		return {
			delay,
			duration,
			easing,
			css: (t) => `
				opacity: ${t * o};
				transform: translateY(${(1 - t) * 10}px);
			`
		};
	}

	function clickOutside(element: HTMLDivElement, callbackFunction: () => void) {
		function onClick(event: MouseEvent) {
			if (!element.contains(event.target as Node)) {
				callbackFunction();
			}
		}

		document.body.addEventListener('click', onClick);

		return {
			update(newCallbackFunction: () => void) {
				callbackFunction = newCallbackFunction;
			},
			destroy() {
				document.body.removeEventListener('click', onClick);
			}
		};
	}

	$: close = () => {
		if (!$dropDown.show) {
			return;
		}

		$dropDown.setShow(false);
	};
</script>

{#if $dropDown.show}
	<div class={style.DropDownItems} transition:fadeInOut on:blur={close} use:clickOutside={close}>
		<VStack {spacing} width="fill">
			<slot />
		</VStack>
	</div>
{/if}
