<script lang="ts">
	import style from './style';

	interface $$Props {
		onClick?: () => void;
	}

	export let onClick: $$Props['onClick'] = () => {};
</script>

<!-- eslint-disable-next-line svelte/valid-compile -->
<div on:click={onClick} class={style.DropDownItem}>
	<slot />
</div>
