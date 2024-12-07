<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	import Portal from 'svelte-portal';
	import style from './style';

	interface $$Props {
		/**
		 * 表示非表示を制御する
		 *
		 * @default false
		 */
		show: boolean;
		/**
		 * 高さ
		 *
		 * @default 30
		 * @description
		 * ％表なので、最大値100で、デフォルトでは30%
		 */
		height?: number | undefined;
	}

	export let show: boolean = false;
	export let height: number | undefined = 30;
</script>

<!--

@component
@name BottomSheet


-->
<Portal target="#portal">
	{#if show}
		<!-- eslint-disable-next-line svelte/valid-compile -->
		<div
			transition:fade
			class={style.BottomSheetBackDrop}
			role="button"
			tabindex="0"
			on:click={() => {
				show = false;
			}}
			on:keydown={(event) => {
				if (event.key === 'Escape') {
					show = false;
				}
			}}
		></div>
		<div
			transition:slide={{
				duration: 250,
				easing: cubicInOut
			}}
			class={style.BottomSheet({ height })}
		>
			<slot />
		</div>
	{/if}
</Portal>
