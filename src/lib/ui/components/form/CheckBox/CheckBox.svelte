<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';
	import style from './style';

	interface $$Props extends Omit<HTMLInputAttributes, 'type'> {
		value?: boolean;
		checked: boolean;
	}

	export let value: $$Props['value'] = false;
	export let checked: $$Props['checked'] = false;
</script>

<input class={style.CheckBox} type="checkbox" bind:value bind:checked {...$$restProps} />
