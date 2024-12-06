<script>
	import { VStack } from '../..';
	import style from './style';
</script>

<div class={style.Wrapper}>
	<VStack spacing="X20">
		<h1>logo</h1>
		<VStack spacing="X20">
			<slot />
		</VStack>
	</VStack>
</div>
