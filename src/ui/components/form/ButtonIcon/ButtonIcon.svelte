<script lang="ts">
	import { colors } from '$ui/styles';
	import Icon from '../../icons';

	interface $$Props {
		icon: keyof typeof Icon;
		iconSize?: string | number;
		/**
		 * @deprecated use `iconSize` instead
		 */
		size?: string | number;
		class?: string | undefined;
		style?: string | undefined;
		/**
		 * アイコンの色
		 *
		 * @default colors.dark
		 */
		color?: string;

		onClick?: (e: MouseEvent) => void;
	}

	export let icon: keyof typeof Icon;
	export let size: string | number = 24;
	export let style: string | undefined = undefined;
	export let color: string | undefined = undefined;
	export let onClick: ((e: MouseEvent) => void) | undefined = undefined;
	let className: string | undefined = undefined;

	$: width = typeof size === 'string' ? size : `${size}px`;
	$: height = typeof size === 'string' ? size : `${size}px`;

	export { className as class };
</script>

<!-- 
	@component ButtonIcon
	@slot default
	@description
		アイコンを表示するボタンコンポーネント
	@props
		- icon: keyof typeof Icon
			- アイコンの種類
		- iconSize: string | number
			- アイコンのサイズ
		- class: string | undefined
			- クラス名
		- style: string | undefined
			- スタイル
 -->
<button
	class={className}
	style:display="flex"
	style:align-items="center"
	style:justify-content="center"
	{style}
	style:height
	style:width
	style:color={color ?? colors.dark}
	on:click={onClick}
>
	<svelte:component this={Icon[icon]} />
</button>
