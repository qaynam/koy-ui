<script lang="ts" context="module">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import FormLabel from '../FormLabel/FormLabel.svelte';
	import Input from '../Input/Input.svelte';
	import FormRow from './FormRow.svelte';
	import { VStack } from '../..';

	const { Story } = defineMeta({
		title: 'components/form/FormRow'
	});

	const example: string = `<FormRow>
  <FormLabel htmlFor="input">label</FormLabel>
  <Input placeholder="Placeholder" name="input" id="input" />
</FormRow>`;
</script>

<script lang="ts">
	$: slices = example.split('\n');
</script>

<Story name="Default">
	<VStack>
		<FormRow>
			<FormLabel for="input">label</FormLabel>
			<Input placeholder="Placeholder" name="input" id="input" />
		</FormRow>
		<div>
			<hr />
			<h2>#Usage</h2>
		</div>
		<pre
			style:white-space="pre"
			style:-font-family="Monospace"
			style:max-width="80%"
			style:width="100%"
			style:overflow-x="auto">
      {#each slices as piece}
				{#if !!piece.trim()}
					<code>
        {piece}
      </code>
				{/if}
			{/each}
    </pre>
	</VStack>
</Story>
