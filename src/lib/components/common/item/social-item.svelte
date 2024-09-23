<script lang="ts">
	import type { TIcon } from '$lib/types';
	import Icon from '@iconify/svelte';

	export let item: TIcon;
</script>

<a href={item.url} class="flex items-center hover:text-primary-500">
	<Icon icon={item.icon} height="2rem" />
</a>
