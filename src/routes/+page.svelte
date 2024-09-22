<script lang="ts">
	import Profile from '$lib/components/sections/aside/profile.svelte';
	import Navigation from '$lib/components/sections/aside/navigation.svelte';
	import Social from '$lib/components/sections/aside/social.svelte';
	import About from '$lib/components/sections/main/about.svelte';
	import Skill from '$lib/components/sections/main/skill.svelte';
	import Experience from '$lib/components/sections/main/experience.svelte';
	import Project from '$lib/components/sections/main/project.svelte';
	import Contact from '$lib/components/sections/main/contact.svelte';
	import Credit from '$lib/components/sections/main/credit.svelte';
	import { onDestroy, onMount } from 'svelte';
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
				<Profile id="profile" data={data.profile} />
				<Navigation id="navigation" data={data.navigations} />
			</div>
			<Social id="social" data={data.socials} />
		</aside>
		<main class="space-y-16 overflow-y-auto px-8 py-20">
			<About id="about" data={data.about} />
			<Skill id="skills" data={data.skills} />
			<Experience id="experiences" data={data.experiences} />
			<Project id="projects" data={data.projects} />
			<Contact id="contact" />
			<Credit id="credits" data={data.credits} />
		</main>
	</div>
{/if}
