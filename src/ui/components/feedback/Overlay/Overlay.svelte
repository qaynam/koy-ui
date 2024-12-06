<script lang="ts">
	import Spinner from '../Spinner/Spinner.svelte';

	import style from './style';

	interface $$Props {
		show: boolean;
	}

	export let show: boolean = false;
</script>

{#if show}
	<div class={style.Overlay}>
		<Spinner />
	</div>
{/if}

<slot />
