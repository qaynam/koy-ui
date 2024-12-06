<script lang="ts">
	import { Spinner } from '$ui/components';
	import { type ComponentType, type SvelteComponent } from 'svelte';
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import styles from './style';
	import type { ButtonTypes } from './types';

	interface $$Props {
		/**
		 * ボタンに表示するアイコン
		 * @default undefined
		 */
		icon?: ComponentType<SvelteComponent>;
		/**
		 * ボタンに表示するアイコンの位置
		 *
		 * @default 'left'
		 */
		iconPin?: ButtonTypes.IconPosition;
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
		 * - tertiary: ターシャリーボタン
		 *
		 * @default 'primary'
		 */
		variant?: ButtonTypes.ButtonVariant;
		/**
		 * ボタンの幅
		 *
		 * @description
		 * - auto: ボタンの幅を自動調整
		 * - center-fill: ボタンの幅を親要素いっぱいに広げる（コンテンツは中央寄せ）
		 * - fill: ボタンの幅を親要素いっぱいに広げる
		 * - wider: ボタンの幅を固定
		 *
		 * @default 'auto'
		 */
		width?: ButtonTypes.Width;
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
		 * ボタンの枠線を表示するかどうか
		 *
		 * @default true
		 */
		border?: boolean | undefined;
		/**
		 * ボタンの色
		 */
		color?: ButtonTypes.Color;

		/**
		 * ボタンクリック時のイベント
		 */
		onClick?: (e: MouseEvent) => void;
	}

	export let icon: ComponentType<SvelteComponent> | undefined = undefined;
	export let iconPosition: 'left' | 'right' = 'left';
	export let variant: ButtonTypes.ButtonVariant = 'primary';
	export let width: ButtonTypes.Width = 'auto';
	export let disabled: boolean = false;
	export let loading: boolean = false;
	export let shadow: boolean = true;
	export let border = true;
	export let color: ButtonTypes.Color = 'default';
	export let onClick: (e: MouseEvent) => void = () => {};

	$: spinnerFill =
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		(variant === 'primary' ? 'lighter' : variant == 'secondary' ? 'default' : 'darker') as any;
</script>

<!-- 
	@component Button
	これはボタンコンポーネントです。
	
	@param icon ボタンに表示するアイコン

	@param variant ボタンの種類
		- primary: 塗りつぶし
		- secondary: アウトライン(ボーターあり)
		- tertiary: ボーターが丸い
		- quaternary: アウトラインで(ボーターなし)

	@param width ボタンの幅
		- auto: ボタンの幅を自動調整
		- fill: ボタンの幅を親要素いっぱいに広げる
		- wider: ボタンpaddingがちょっと広い

	@param disabled ボタンの無効化
	@param loading ボタンのローディング
	@param shadow ボタンの影
-->

<button
	class={styles.Base({ variant, width, shadow, border })}
	on:click={onClick}
	disabled={loading || disabled}
	{...$$restProps}
>
	{#if loading}
		<div
			style:display="flex"
			style:position="absolute"
			style:top="50%"
			style:left="50%"
			style:transform="translate(-50%, -50%)"
			style:justify-content="center"
			style:z-index="1"
		>
			<Spinner bind:fill={spinnerFill} />
		</div>
	{/if}
	<div class={styles.ButtonContent({ withIcon: Boolean(icon), loading, width, color, variant })}>
		{#if iconPosition === 'left' && icon}
			<svelte:component this={icon} />
		{/if}
		<slot />
		{#if iconPosition === 'right' && icon}
			<svelte:component this={icon} />
		{/if}
	</div>
</button>
