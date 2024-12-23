<script lang="ts">
	import type { HTMLLabelAttributes } from 'svelte/elements';
	import styles from './style';

	interface $$Props extends Pick<HTMLLabelAttributes, 'for'> {
		required?: boolean;
	}

	export let required: $$Props['required'] = undefined;
</script>

<label class={styles.Base({ required: Boolean(required) })} {...$$restProps}><slot /></label>
