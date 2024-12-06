<script lang="ts">
	import Stack from './Stack.svelte';
	import type { StackType } from './types';

	interface $$Props extends Omit<StackType.Props, 'direction'> {}
</script>

<Stack {...$$props} direction="row"><slot /></Stack>
