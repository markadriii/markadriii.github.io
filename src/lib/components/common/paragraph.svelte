<script lang="ts">
	import { parseText } from '$lib/utils/helpers';
	import clsx from 'clsx';

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
				class={clsx(classes, 'inline-block font-semibold hover:text-primary-500')}
				target="_blank"
				rel="noopener noreferrer"
			>
				{part.text}
			</a>
		{/if}
	{/each}
</p>
