<script lang="ts" context="module">
	import { colors } from '$ui/styles';
	import Typography from './Typography.svelte';
	import {
		defineMeta,
		setTemplate,
		type Args,
		type StoryContext
	} from '@storybook/addon-svelte-csf';

	const { Story } = defineMeta({
		title: 'components/base/Typography',
		component: Typography,
		argTypes: {
			as: {
				control: {
					type: 'select',
					options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']
				}
			},
			font: {
				control: {
					type: 'select',
					options: ['title', 'body_M_Bold', 'body_M', 'body_S_Bold', 'body_S']
				}
			},
			color: {
				control: {
					type: 'select',
					options: Object.keys(colors)
				}
			}
		},
		args: {
			as: 'p',
			font: 'body',
			align: 'left',
			color: 'black',
			truncate: false,
			wordBreak: 'normal',
			whiteSpace: 'initial'
		}
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template(args: Args<typeof Story>, context: StoryContext<typeof Story>)}
	<Typography {...args}>
		Lorem ipsum dolor sit amet consectetur adipisicing elit. Et beatae officiis accusantium dolorum
		corporis incidunt, fuga aspernatur saepe fugiat vero ullam in nam harum eos exercitationem cum,
		eligendi, veniam quae.
	</Typography>
{/snippet}

<Story name="Default"></Story>
