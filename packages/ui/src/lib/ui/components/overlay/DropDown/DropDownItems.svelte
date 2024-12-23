<script lang="ts">
	import { getContext } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { type TransitionConfig } from 'svelte/transition';
	import { VStack } from '$ui/components';
	import type { Spacing } from '$ui/styles/types';
	import style from './style';
	import type { DropDownContext } from './DropDown.svelte';

	interface $$Props {
		/**
		 * 左揃うか、右の揃うか
		 */
		align?: 'left' | 'right';
		/**
		 * スペースの種類
		 *
		 * @default "default"
		 */
		spacing?: Spacing;
	}

	export let spacing: $$Props['spacing'] = 'default';
	export let align: $$Props['align'] = 'left';

	const dropDown = getContext<DropDownContext>('dropdown');
	$: show = $dropDown.show;

	function fadeInOut(
		node: HTMLDivElement,
		{ delay = 0, duration = 200, easing = cubicInOut } = {}
	): TransitionConfig {
		const o = +getComputedStyle(node).opacity;
		return {
			delay,
			duration,
			easing,
			css: (t) => `
				opacity: ${t * o};
				transform: translateY(${(1 - t) * -5}px) scale(${1 - t / 120});
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

{#if show}
	<div
		class={style.DropDownItems({ align })}
		transition:fadeInOut
		on:blur={close}
		use:clickOutside={close}
	>
		<VStack {spacing} width="fill">
			<slot />
		</VStack>
	</div>
{/if}
