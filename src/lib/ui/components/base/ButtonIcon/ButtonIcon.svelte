<script lang="ts">
	import { type Component } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import Button from '../Button/Button.svelte';
	import type { ButtonTypes } from '../Button/types';

	interface $$Props {
		/**
		 * ボタンに表示するアイコン
		 * @default undefined
		 */
		icon: Component | undefined;
		/**
		 * ボタンの種類
		 */
		type?: HTMLButtonAttributes['type'];
		/**
		 * ボタンの種類
		 *
		 * @description
		 * - primary: 塗りつぶし
		 * - secondary: アウトライン
		 *
		 * @default 'primary'
		 */
		variant?: Exclude<ButtonTypes.ButtonVariant, 'tertiary'>;
		/**
		 * ボタンの影
		 *
		 * @default true
		 */
		shadow?: boolean;
		/**
		 * ボタンの無効化
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * ボタンのローディング
		 * @default false
		 */
		loading?: boolean;
		/**
		 * ボタンクリック時のイベント
		 */
		onClick?: () => void;
	}

	export let icon: Component | undefined;
	export let type: HTMLButtonAttributes['type'] = 'button';
	export let variant: Exclude<ButtonTypes.ButtonVariant, 'tertiary'> = 'primary';
	export let shadow: boolean = false;
	export let disabled: boolean = false;
	export let loading: boolean = false;
	export let onClick: (() => void) | undefined = undefined;
</script>

<Button {type} {variant} {shadow} {disabled} {loading} on:click={onClick}>
	{#if icon}
		<svelte:component this={icon} />
	{/if}
</Button>
