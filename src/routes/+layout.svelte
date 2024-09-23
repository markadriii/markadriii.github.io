<script lang="ts">
	import '../app.css';

	export let data: any = null;
</script>

<svelte:head>
	<title>{data.metadata.title}</title>
</svelte:head>

<slot></slot>
