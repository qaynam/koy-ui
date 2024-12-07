<script lang="ts">
	import style from './style';

	interface $$Props {
		show: boolean;
		/**
		 * @default 100%
		 */
		width?: string;
		/**
		 * @default 100%
		 */
		height?: string;
	}

	export let show = false;
	export let width = '100%';
	export let height = '100%';
</script>

{#if show}
	<div
		class={style.Skeleton({
			width,
			height
		})}
	>
		<span style:visibility="hidden">
			<slot />
		</span>
	</div>
{:else}
	<slot />
{/if}
