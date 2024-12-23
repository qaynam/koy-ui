<script lang="ts" context="module">
	const createDropDown = () => {
		const dropDown = writable({
			show: false,
			setShow: (show: boolean) => {
				dropDown.update((state) => ({ ...state, show }));
			}
		});

		return dropDown;
	};

	export type DropDownContext = ReturnType<typeof createDropDown>;
</script>

<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';
	import style from './style';

	setContext('dropdown', createDropDown());
</script>

<div class={style.DropDown}>
	<slot name="button" />
	<slot name="items" />
</div>
