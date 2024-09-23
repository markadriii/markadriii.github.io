<script lang="ts">
	import type { TIcon } from '$lib/types';
	import Icon from '@iconify/svelte';

	export let item: TIcon;
	export let iconSize = '1.5em';
	export let textSize = 'text-sm';
</script>

<a
	href={item.url}
	target="_blank"
	class="flex w-fit items-center space-x-2 bg-tertiary-300 p-2 rounded-container-token text-on-tertiary-token hover:bg-tertiary-300/80"
>
	<Icon icon={item.icon} height={iconSize} />
	<span class="{textSize} font-bold">{item.name}</span>
</a>
