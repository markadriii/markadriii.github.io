<script lang="ts">
	export let label: string = '';
	export let id: string = '';
	export let placeholder: string = '';
	export let value: string = '';
	export let type: string = 'text';

	let height = type === 'textarea' ? '' : 'h-10';
</script>

<label class="label w-full">
	{label} <span class="text-error-500">*</span>
	<div
		class="{height} input-group input-group-divider grid-cols-[1fr_auto] rounded-container-token"
	>
		{#if type === 'text'}
			<input type="text" name={id} class="p-2 text-sm" {placeholder} bind:value />
		{:else if type === 'email'}
			<input type="email" name={id} class="p-2 text-sm" {placeholder} bind:value />
		{:else if type === 'textarea'}
			<textarea class="textarea p-2" name={id} rows="4" {placeholder} bind:value />
		{/if}
	</div>
</label>
