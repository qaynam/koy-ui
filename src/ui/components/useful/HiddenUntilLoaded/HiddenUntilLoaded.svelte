<script lang="ts">
	import { Spinner } from '$ui/components';

	interface $$Props {
		/**
		 * 読み込みが完了したかどうか
		 *
		 * @default false
		 */
		loading: boolean;
		/**
		 * loadedがまだfalseのときにspinnerを表示する
		 *
		 * @default true
		 */
		showSpinner?: boolean;
	}

	export let loading: boolean = false;
	export let showSpinner: boolean | undefined = true;
</script>

{#if showSpinner && loading}
	<Spinner />
{/if}

{#if !loading}
	<slot />
{/if}
