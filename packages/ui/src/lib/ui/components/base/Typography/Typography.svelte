<script lang="ts">
	import type { Colors, FontKey } from '$ui/styles/types';
	import type { Properties } from 'csstype';

	import style from './style';
	import type { Align } from './types';

	type TagNames = keyof Pick<
		HTMLElementTagNameMap,
		'h1' | 'h2' | 'h3' | 'p' | 'pre' | 'code' | 'span' | 'label'
	>;

	interface $$Props {
		as?: TagNames;
		font?: FontKey;
		color?: Colors;
		align?: Align;
		wordBreak?: Properties['wordBreak'];
		whiteSpace?: Properties['whiteSpace'];
		/**
		 * Truncate the text if it overflows the container.
		 */
		truncate?: boolean;
	}

	export let font: FontKey = 'body';
	export let as: TagNames = 'span';
	export let color: Colors = 'dark';
	export let align: 'left' | 'center' | 'right' = 'left';
	export let whiteSpace: Properties['whiteSpace'] = undefined;
	export let wordBreak: Properties['wordBreak'] = undefined;
	export let truncate: boolean = false;
</script>

<!-- @component
	@name Typography
	@description
		`Typography` is a component that provides a consistent way to style text.

		@params
		- as: TagNames - The HTML tag to render the text as.

		- font: FontKey - The font to use for the text.

		- color: Colors - The color to use for the text.

		- align: Align - The alignment of the text.

		- wordBreak: - The word break to use for the text.

		- whiteSpace: - The white space to use for the text.

		- truncate: boolean - Truncate the text if it overflows the container.

	@example
		<Typography as="h1" font="heading1" color="primary" align="center">
			Hello, world!
		</Typography>

 -->
<svelte:element
	this={as}
	class={style.Base({ fontKey: font, color, align, whiteSpace, wordBreak, truncate })}
	{...$$restProps}><slot /></svelte:element
>
