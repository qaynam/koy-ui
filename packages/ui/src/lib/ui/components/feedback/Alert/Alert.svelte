<script lang="ts">
	import style from './style';
	import type { AlertComponentTypes } from './types';

	interface $$Props {
		type: AlertComponentTypes.Type;
	}

	export let type: $$Props['type'] = 'info';
</script>

<div class={style.Alert({ type })}><slot /></div>
