<script lang="ts">
	import { parseText } from '$lib/utils/helpers';

	export let content: string[];
	export let classes: string = '';
</script>

<p>
	{#each parseText(content) as part}
		{#if part.type === 'plain'}
			{part.text}
		{:else}
			<a
				href={part.url}
				class="{classes} inline-block font-semibold hover:text-primary-500"
				target="_blank"
				rel="noopener noreferrer"
			>
				{part.text}
			</a>
		{/if}
	{/each}
</p>
