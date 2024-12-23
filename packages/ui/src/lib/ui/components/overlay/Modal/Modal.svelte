<script lang="ts">
	import { sineInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { ZIndexs, type ZIndex } from '$ui/styles';
	import Portal from 'svelte-portal';
	import styles from './style';
	import type { ModalTypes } from './type';

	interface $$Props {
		/**
		 * モーダルの表示非常を制御します
		 *
		 * @default {boolean} false
		 */
		show: ModalTypes.Show;
		/**
		 * モーダルのサイズを指定します
		 *
		 * @default {ModalType.Size} "default"
		 */
		size?: ModalTypes.Size;
		zIndex?: ZIndex;
	}

	export let show = false;
	export let zIndex: ZIndex = 'MODAL';
	export let size: ModalTypes.Size = 'default';
</script>

<!--
	@component Modalコンポーネント
	@param {boolean} show - モーダルの表示非常を制御します
	@param {ModalType.Size} size - モーダルのサイズを指定します
 -->
<Portal target="#portal">
	{#if show}
		<div class={styles.ModalWrapper} style:z-index={ZIndexs[zIndex]}>
			<div class={styles.BackDrop} transition:fade></div>
			<div class={styles.Modal({ size })} transition:fade={{ duration: 150, easing: sineInOut }}>
				<slot />
			</div>
		</div>
	{/if}
</Portal>
