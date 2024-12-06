<script lang="ts">
	import type { ChangeEventHandler } from 'svelte/elements';
	import style from './style';
	import type { TextAreaComponentType } from './type';

	interface $$Props {
		/**
		 * 値
		 */
		value?: string;
		/**
		 * name属性
		 */
		name?: string;
		/**
		 * デフォルト値
		 */
		defaultValue?: string;
		/**
		 * プレースホルダー
		 */
		placeholder?: string;
		/**
		 * 行数
		 */
		rows?: number;
		/**
		 * 幅
		 */
		width?: TextAreaComponentType.Width;
		/**
		 * エラー発生したかどうか
		 */
		error?: boolean;
		/**
		 * 変更時のイベント
		 */
		onchange?: (value: string) => void;
	}

	export let value = '';
	export let placeholder = '';
	export let rows = 3;
	export let error = false;
	export let name = '';
	export let width: TextAreaComponentType.Width = 'auto';
	export let onchange: (value: string) => void = () => {};

	const handleChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
		const target = event.target as HTMLTextAreaElement;
		const value = target.value;
		onchange(value);
	};
</script>

<textarea
	class={style.TextArea({ error, width })}
	{placeholder}
	bind:value
	{rows}
	on:change={handleChange}
	{name}
></textarea>
