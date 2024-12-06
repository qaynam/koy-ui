<script lang="ts">
	import { onMount } from 'svelte';
	import Button from '../ui/components/base/Button/Button.svelte';

	onMount(() => {
		console.log('Document mounted');
	});
</script>

<Button></Button>
