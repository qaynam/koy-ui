<script lang="ts">
	import { Typography } from '../..';
	import style from './style';
</script>

<div class={style.Header}>
	<Typography font="medium_M_bold">
		<slot />
	</Typography>
</div>
