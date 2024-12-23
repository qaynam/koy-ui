<script lang="ts">
	import type { Colors } from '$ui/styles/types';
	import { Typography } from '..';
	import style from './style';

	type Bg = Extract<Colors, 'greenLight' | 'gray400' | 'white' | 'gray100'>;

	export let text: string;
	export let bg: Bg = 'gray400';
	let textColor: Record<Bg, Colors> = {
		greenLight: 'greenDark',
		gray400: 'gray',
		gray100: 'gray',
		white: 'gray'
	};
</script>

<span class={style.Badge({ bg })}>
	<Typography font="small_M_bold" color={textColor[bg]}>{text}</Typography>
</span>
