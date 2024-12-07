<script lang="ts">
	import type { Spacing } from '$ui/styles';
	import styles from './style';
	import type { StackType } from './types';

	interface $$Props extends StackType.Props {}

	export let spacing: Spacing = 'default';
	export let items: StackType.Justify = 'auto';
	export let justify: StackType.Justify = 'auto';
	export let width: StackType.Width = 'auto';
	export let direction: StackType.Direction = 'row';
	export let wrap: boolean = false;
</script>

<div class={styles.Stack({ items, justify, width, direction, spacing, wrap })}>
	<slot />
</div>
