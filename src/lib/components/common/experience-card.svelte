<script lang="ts">
	import type { Experience } from '../../../types/types';
	import SkillCard from './skill-card.svelte';

	export let item: Experience;
</script>

<a href={item.href} target="_blank" class="group rounded-container-token hover:bg-primary-500/5">
	<article class="w-full shadow-md">
		<header class="flex items-start space-x-8 px-6 py-4">
			<img class="size-12 rounded-token" src={item.src} alt={item.alt} />
			<div>
				<h2 class="text-lg font-semibold text-tertiary-300 group-hover:text-primary-500">
					{item.name}
				</h2>
				<h3 class="text-sm">{item.position}</h3>
			</div>
		</header>
		<section class="px-6 py-2">
			<p class="mt-1 text-sm leading-relaxed">
				<time class="text-xs font-semibold uppercase text-tertiary-300">{item.date}</time>
				• {item.info}
			</p>
		</section>
		<ul class="flex flex-wrap items-center gap-2 px-6 py-4">
			{#each item.stack as skill}
				<li>
					<SkillCard item={skill} iconSize={'1.25em'} textSize={'text-xs'} />
				</li>
			{/each}
		</ul>
	</article>
</a>
