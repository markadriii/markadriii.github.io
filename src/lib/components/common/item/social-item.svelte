<script lang="ts">
	import type { TSocial } from '$lib/types';
	import Icon from '@iconify/svelte';

	export let item: TSocial;
</script>

<a href={item.url} class="flex items-center hover:text-primary-500">
	<Icon icon={item.icon} height="2rem" />
</a>
