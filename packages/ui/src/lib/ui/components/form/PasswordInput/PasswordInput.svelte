<script lang="ts">
	import { Input } from '$ui/components';
	import type { ComponentProps } from 'svelte';

	interface $$Props extends ComponentProps<Input> {
		value?: string;
	}

	let showPassword = false;
	export let value = '';
</script>

<Input
	{...$$restProps}
	bind:value
	type={showPassword ? 'text' : 'password'}
	inputmode="text"
	iconClickable
	onIconClick={() => (showPassword = !showPassword)}
	icon={showPassword ? 'EyeOff' : 'Eye'}
/>
