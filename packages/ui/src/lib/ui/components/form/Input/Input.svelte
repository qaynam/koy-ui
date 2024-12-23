<script lang="ts">
	import Icon, { type IconType } from '$ui/components/icons';
	import styles from './style';
	import type { InputComponentType } from './type';
	import type { FormEventHandler, HTMLInputAttributes } from 'svelte/elements';

	interface $$Props
		extends Omit<
			HTMLInputAttributes,
			`aria-${string}` | `on:${string}` | `on${string}` | `bind:${string}`
		> {
		icon?: IconType | undefined;
		iconPosition?: InputComponentType.IconPosition;
		iconClickable?: boolean;
		width?: 'fill' | 'auto';
		inputmode?: InputComponentType.InputMode;
		checked?: boolean;
		error?: boolean;
		onIconClick?: () => void;
		onChange?: (e: Event) => void;
		onInput?: FormEventHandler<HTMLInputElement>;
	}

	export let icon: IconType | undefined = undefined;
	export let iconPosition: InputComponentType.IconPosition = 'right';
	export let iconClickable: boolean = false;
	export let value: string = '';
	export let type: $$Props['type'] = 'text';
	export let width: $$Props['width'] = 'auto';
	export let error: $$Props['error'] = false;
	export let inputmode: $$Props['inputmode'] = 'text';
	export let onIconClick: $$Props['onIconClick'] = () => {};
	export let onChange: $$Props['onChange'] = () => {};
	export let onInput: NonNullable<$$Props['onInput']> = () => {};
</script>

{#if icon}
	<div class={styles.Wrapper}>
		<input
			class={styles.Base({
				withIcon: !!icon,
				fill: width === 'fill',
				error: !!error,
				iconPosition
			})}
			bind:value
			on:change={onChange}
			on:input={onInput}
			{inputmode}
			{...{ type }}
			{...$$restProps}
		/>
		<button
			class={styles.Icon({ iconClickable, iconPosition })}
			tabindex={iconClickable ? 0 : -1}
			type="button"
			on:click={() => iconClickable && onIconClick?.()}
			on:keydown={() => {}}
		>
			<svelte:component this={Icon[icon]} />
		</button>
	</div>
{:else}
	<input
		class={styles.Base({ withIcon: !!icon, fill: width === 'fill', error: !!error, iconPosition })}
		bind:value
		on:change={onChange}
		on:input={onInput}
		{...{ type }}
		{inputmode}
		{...$$restProps}
	/>
{/if}
