<script lang="ts">
	import type { RouteList } from '$lib/type';
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import style from './style';

	type External = $$Generic<true | false>;
	interface $$Props extends Pick<HTMLAnchorAttributes, 'href'> {
		/**
		 * 外部リンクかどうか
		 *
		 * @default false
		 */
		external?: External;
		/**
		 * パス
		 *
		 * @default ''
		 */
		href: External extends true
			? string
			: RouteList | `${RouteList}?${string}` | `${RouteList}/?${string}`;
		/**
		 * 下線を表示するかどうか
		 *
		 * @default false
		 */
		underline?: boolean;
		/**
		 * インライン要素かどうか
		 *
		 * @default true
		 */
		inline?: boolean;
	}

	export let external = false;
	export let href = '';
	export let underline = false;
	export let inline = true;
</script>

<a
	{...$$restProps}
	{href}
	class={style.Base({ underline, inline })}
	target={external ? '_blank' : undefined}
	rel="noreferrer"
>
	<slot />
</a>
