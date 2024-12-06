<script lang="ts">
	import { HStack } from '../..';
	import style from './style';
</script>

<div class={style.Footer}>
	<HStack spacing="X8" justify="center" items="center">
		<slot />
	</HStack>
</div>
