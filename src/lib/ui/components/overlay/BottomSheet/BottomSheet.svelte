<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { fade, slide } from 'svelte/transition';
	import Portal from 'svelte-portal';
	import style from './style';

	interface $$Props {
		show: boolean;
		height?: number | undefined;
	}

	export let show: boolean = false;
	export let height: number | undefined = undefined;
</script>

<Portal target="#portal">
	{#if show}
		<!-- eslint-disable-next-line svelte/valid-compile -->
		<div
			transition:fade
			class={style.BottomSheetBackDrop}
			on:click={() => {
				show = false;
			}}
		/>
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
