<script lang="ts">
	import Icon from '@iconify/svelte';
	export let item;
	export let iconSize = '1.5em';
	export let textSize = 'text-sm';
	export let space = 'ml-2';
	export let textColor = 'text-on-secondary-token';
	export let background = 'bg-tertiary-300';
</script>

<a
	href={item.href}
	target="_blank"
	class="{background} {textColor} flex w-fit items-center p-2 rounded-container-token hover:bg-tertiary-300/90"
>
	<Icon icon={item.icon} height={iconSize} />
	<span class="{space} {textSize} font-bold">{item.name}</span>
</a>
