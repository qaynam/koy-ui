<script lang="ts">
	import Icon, { type IconType } from '$ui/';
	import type { HTMLInputAttributes } from 'svelte/elements';
	import styles from './style';
	import type { InputComponentType } from './type';

	interface $$Props extends HTMLInputAttributes {
		icon?: IconType | undefined;
		iconPosition?: InputComponentType.IconPosition;
		'on:iconClick'?: CustomEvent<null> | undefined;
		iconClickable?: boolean;
		width?: 'fill';
		inputmode?: InputComponentType.InputMode;
		checked?: boolean;
		error?: boolean;
		onIconClick?: () => void;
	}

	export let icon: IconType | undefined = undefined;
	export let iconPosition: InputComponentType.IconPosition = 'right';
	export let iconClickable: boolean = false;
	export let value: string = '';
	export let type: $$Props['type'] = 'text';
	export let width: $$Props['width'] = undefined;
	export let error: $$Props['error'] = false;
	export let inputmode: $$Props['inputmode'] = 'text';
	export let onIconClick: () => void = () => {};
</script>

{#if icon}
	<div class={styles.Wrapper}>
		<input
			class={styles.Base({ withIcon: !!icon, fill: !!width, error: !!error, iconPosition })}
			bind:value
			on:change
			{inputmode}
			{...{ type }}
			{...$$restProps}
		/>
		<button
			class={styles.Icon({ iconClickable, iconPosition })}
			tabindex="-1"
			on:click={() => iconClickable && onIconClick?.()}
			on:keydown={() => {}}
		>
			<svelte:component this={Icon[icon]} />
		</button>
	</div>
{:else}
	<input
		class={styles.Base({ withIcon: !!icon, fill: !!width, error: !!error, iconPosition })}
		bind:value
		{...{ type }}
		{inputmode}
		{...$$restProps}
	/>
{/if}
