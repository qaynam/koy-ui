<script lang="ts">
	type RouteList = $$Generic<`/${string}`>;
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import style from './style';

	type External = $$Generic<true | false>;
	interface $$Props
		extends Pick<HTMLAnchorAttributes, 'href' | 'aria-label' | 'about' | 'download'> {
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
			: RouteList | `${RouteList}?${string}` | `${RouteList}/?${string}` | '/';
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
		/**
		 * prefetch
		 */
		prefetch?: boolean;
		/**
		 * ナビゲーション時にhistoryをreplaceをするかどうか
		 */
		replaceStateWhenNavigation?: boolean;
	}

	export let external = false;
	export let href = '';
	export let underline = false;
	export let inline = true;
	export let prefetch = false;
	export let replaceStateWhenNavigation = false;

	$: preload = prefetch ? 'hover' : 'off';
</script>

<a
	{...$$restProps}
	{href}
	class={style.Base({ underline, inline })}
	target={external ? '_blank' : undefined}
	rel="noreferrer"
	data-sveltekit-preload-data={preload}
	data-sveltekit-replacestate={replaceStateWhenNavigation}
>
	<slot />
</a>
