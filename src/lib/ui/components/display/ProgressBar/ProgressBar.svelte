<script lang="ts">
	import Portal from 'svelte-portal';
	import style from './style';

	interface $$Props {
		started?: boolean;
		canceled?: boolean;
		complete?: boolean;
	}

	export let complete = false;
	export let canceled = false;
	export let started = false;

	$: {
		let timer: ReturnType<typeof setTimeout> | null = null;
		if (started === true) {
			timer = setTimeout(() => {
				canceled = true;
				started = false;
			}, 10000);
		}

		if ((complete || canceled) && timer) {
			clearTimeout(timer);
		}
	}

	$: {
		if (complete || canceled) {
			setTimeout(() => {
				started = false;
				complete = false;
				canceled = false;
			}, 1000);
		}
	}
</script>

<Portal target="#portal">
	{#if started}
		<div class={style.ProgressBar({ canceled, complete })}></div>
	{/if}
</Portal>
