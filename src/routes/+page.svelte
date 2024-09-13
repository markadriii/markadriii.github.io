<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Profile from '$lib/components/sections/profile.svelte';
	import Navigation from '$lib/components/sections/navigation.svelte';
	import Social from '$lib/components/sections/social.svelte';
	import About from '$lib/components/sections/about.svelte';
	import Skills from '$lib/components/sections/skills.svelte';
	import Experience from '$lib/components/sections/experience.svelte';
	import Projects from '$lib/components/sections/projects.svelte';
	import Contact from '$lib/components/sections/contact.svelte';
	import { fetchData } from '$lib/utils/data';
	import { scrollActive } from '$lib/utils/scroll';

	let data: any = null;

	onMount(async () => {
		data = await fetchData();
		window.addEventListener('scroll', scrollActive);
	});

	onDestroy(() => {
		if (typeof window !== 'undefined') {
			window.removeEventListener('scroll', scrollActive);
		}
	});
</script>

{#if data}
	<div class="mx-auto grid max-w-screen-xl grid-cols-2 px-24">
		<aside class="sticky top-0 flex max-h-screen flex-col justify-between px-8 py-20">
			<div class="space-y-8">
				<Profile id="profile" data={data.home} spacing={''} />
				<Navigation id="navigation" data={data.navigation} spacing={''} />
			</div>
			<Social id="social" data={data.social} spacing={'pt-8'} />
		</aside>
		<main class="overflow-y-auto px-8 py-20">
			<About id="about" spacing={'mb-16'} />
			<Skills id="skills" data={data.skills} spacing={'mb-16'} />
			<Experience id="experience" data={data.experience} spacing={'mb-16'} />
			<Projects id="projects" data={data.projects} spacing={'mb-16'} />
			<Contact id="contact" spacing={''} />
		</main>
	</div>
{/if}
