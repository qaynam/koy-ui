<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Icon from './';

	const icons: Array<{
		name: string;
		component: (typeof Icon)[keyof typeof Icon];
		tags: ['autodocs'];
	}> = [];

	for (const icon of Object.keys(Icon)) {
		icons.push({
			name: icon,
			component: Icon[icon as keyof typeof Icon],
			tags: ['autodocs']
		});
	}
	const { Story } = defineMeta({
		title: 'components/icons/Icon'
	});
</script>

<Story name="Default">
	<div
		style:width="50%"
		style:margin="auto"
		style:display="grid"
		style:grid-template-columns="repeat(3, 1fr)"
		style:gap="20px"
	>
		{#each icons as { name, component }}
			<div style="display: flex; align-items: center; margin-bottom: 8px;">
				<svelte:component this={component} />
				<span style="margin-left: 8px;">{name}</span>
			</div>
		{/each}
	</div>
</Story>
