<script lang="ts">
	import Icon from '$ui/components/icons';
	import style from './style';

	interface $$Props {
		/**
		 * エラー状態を制御します
		 *
		 * @default {boolean} false
		 */
		error?: boolean;
		/**
		 * プレースホルダーを指定します
		 *
		 * @description
		 * 	<option value="">プレースホルダー</option>
		 *
		 * @default {string} undefined
		 */
		placeholder?: string;
		/**
		 * 選択された値を制御します
		 *
		 * @default {string} ''
		 */
		value?: string | undefined;
	}

	export let error: boolean = false;
	export let placeholder: string | undefined = undefined;
	export let value: string = '';
	const hash = Math.random().toString(36).slice(-8);
</script>

<label for={hash} class={style.SelectBox({ error: !!error })}>
	<select bind:value id={hash}>
		{#if placeholder}
			<option value="" hidden disabled>{placeholder}</option>
		{/if}
		<slot />
	</select>
	<Icon.Selector />
</label>
