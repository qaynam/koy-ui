<script lang="ts">
	import style from './style';

	export let onClick = () => {};
</script>

<!-- eslint-disable-next-line svelte/valid-compile -->
<div on:click={onClick} class={style.DropDownItem}>
	<slot />
</div>
