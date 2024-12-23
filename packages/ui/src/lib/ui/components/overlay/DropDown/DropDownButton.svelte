<script lang="ts">
	import { getContext } from 'svelte';
	import type { DropDownContext } from './DropDown.svelte';

	$: dropDown = getContext<DropDownContext>('dropdown');

	const handleClick = () => {
		$dropDown.setShow(!$dropDown.show);
	};
</script>

<!-- eslint-disable-next-line svelte/valid-compile -->
<span on:click|stopPropagation|preventDefault={handleClick}>
	<slot />
</span>
