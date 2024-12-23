<script lang="ts">
	type Data = $$Generic<unknown>;

	interface H<Data = unknown> {
		data: Data;
	}

	interface $$Props extends H<Data> {}

	export let data: $$Props['data'];
	$: nonNullableData = data as NonNullable<Data>;
</script>

{#if data}
	<slot data={nonNullableData} />
{/if}
