<script lang="ts">
	export let color = true;
	export let icon = '';
	export let height = '';

	const colored = color ? 'iconify-color' : 'iconify';
	const classes = `${colored} ${icon} ${height}`;
</script>

<span class={classes}></span>
