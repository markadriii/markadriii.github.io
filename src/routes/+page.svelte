<script lang="ts">
	import { onMount } from 'svelte';
	import Profile from '$lib/components/sections/profile.svelte';
	import Navigation from '$lib/components/sections/navigation.svelte';
	import Social from '$lib/components/sections/social.svelte';

	let data: any = null;

	async function fetchData() {
		try {
			const response = await fetch('./data.json');
			if (!response.ok) {
				throw new Error('Failed to fetch data.');
			}
			data = await response.json();
		} catch (error) {
			console.error(error);
		}
	}

	onMount(async () => {
		await fetchData();
	});
</script>

{#if data}
	<div class="mx-auto grid h-screen max-w-screen-xl grid-cols-2 px-24">
		<aside class="sticky top-0 flex max-h-screen flex-col justify-between px-8 py-20">
			<div class="space-y-8">
				<Profile id="profile" data={data.home} spacing={''} />
				<Navigation id="navigation" data={data.navigation} spacing={''} />
			</div>
			<Social id="social" data={data.social} spacing={'pt-8'} />
		</aside>
		<main class="overflow-y-auto px-8 py-20"></main>
	</div>
{/if}
