<script lang="ts">
	import type { SocialItem } from '$lib/types';
	import Icon from '@iconify/svelte';
	export let item: SocialItem;
</script>

<a href={item.href} class="flex items-center hover:text-primary-500">
	<Icon icon={item.icon} height="2rem" />
</a>
