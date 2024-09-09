<script lang="ts">
	import Icon from '@iconify/svelte';
	export let item;
</script>

<a href={item.href} class="flex items-center">
	<Icon icon={item.icon} height="2rem" />
</a>
