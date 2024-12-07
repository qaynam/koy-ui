<script lang="ts">
	import { HStack, Typography, VStack } from '../..';
	import style from './style';

	type Item<V extends string> = $$Generic<{
		value: string;
		label: V;
	}>;

	interface $$Props {
		items: Item[];
		active: (key: Item) => boolean;
		name?: string;
		/**
		 * レイアウト
		 *
		 *  @description
		 * 	並び方
		 * 		- vertical: 垂直
		 * 		- horizontal: 水平
		 *
		 * @default 'vertical'
		 */
		layout?: 'vertical' | 'horizontal';
		/**
		 * 無効
		 *
		 * @default false
		 */
		disabled?: boolean;
		/**
		 * 変更時のイベント
		 */
		onChange?: (param: { item: Item }) => void;
	}

	export let items: $$Props['items'] = [] as Item[];
	export let active: $$Props['active'] = () => false;
	export let layout: $$Props['layout'] = 'vertical';
	export let disabled: boolean = false;
	export let onChange: $$Props['onChange'] | undefined = undefined;

	const handleClick = (item: Item) => {
		onChange?.({
			item
		});
	};
</script>

<svelte:component this={layout === 'vertical' ? VStack : HStack}>
	{#each items as item}
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<label
			on:click={() => !disabled && handleClick(item)}
			class={style.Item({ active: active(item) })}
		>
			<HStack items="center">
				<span class={style.Radio({ active: active(item) })}> </span>
				<span>
					<Typography>
						{item.label}
					</Typography>
					<input
						type="radio"
						class={style.Input}
						checked={active(item)}
						{...$$restProps}
						value={item.value}
						{disabled}
					/>
				</span>
			</HStack>
		</label>
	{/each}
</svelte:component>
