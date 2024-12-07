<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Alert from './Alert.svelte';
	import { Typography, VStack } from '$ui/components';

	const { Story } = defineMeta({
		title: 'components/feedback/Alert',
		component: Alert,
		argTypes: {
			type: {
				control: {
					type: 'select',
					options: ['info', 'success', 'error']
				}
			}
		}
	});
</script>

<Story name="Default">
	<VStack spacing="X10">
		<VStack>
			<Typography as="h3" font="medium_M_bold">Info</Typography>
			<Alert type="info">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nulla repellat voluptas
				odio pariatur, fuga eius nihil ut omnis dolores?
			</Alert>
		</VStack>
		<VStack>
			<Typography as="h3" font="medium_M_bold">Success</Typography>
			<Alert type="success">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nulla repellat voluptas
				odio pariatur, fuga eius nihil ut omnis dolores?
			</Alert>
		</VStack>
		<VStack>
			<Typography as="h3" font="medium_M_bold">Error</Typography>
			<Alert type="error">
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nulla repellat voluptas
				odio pariatur, fuga eius nihil ut omnis dolores?
			</Alert>
		</VStack>
	</VStack>
</Story>
