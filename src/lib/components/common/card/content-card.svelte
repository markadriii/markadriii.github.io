<script lang="ts">
	import type { Content } from '$lib/types';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { getInitials } from '$lib/utils/helpers';
	import SkillCard from './skill-card.svelte';

	export let item: Content;
</script>

<a href={item.href} target="_blank" class="group rounded-container-token">
	<article class="w-full space-y-6 px-6 py-4 rounded-container-token hover:bg-primary-500/5">
		<header class="flex space-x-8">
			<Avatar
				src={item.src}
				width="w-12"
				rounded="rounded-full"
				initials={getInitials(item.title)}
				fill="fill-token group-hover:fill-primary-500"
			/>
			<div>
				<h2 class="text-lg font-semibold text-tertiary-300 group-hover:text-primary-500">
					{item.title}
				</h2>
				<h3 class="text-sm">{item.subtitle}</h3>
			</div>
		</header>
		<section>
			<p class="text-sm leading-relaxed">
				<time class="text-xs font-semibold uppercase text-tertiary-300">{item.date}</time>
				• {item.info}
			</p>
		</section>
		<footer>
			<ul class="flex flex-wrap items-center gap-2">
				{#each item.stack as skill}
					<li>
						<SkillCard item={skill} iconSize={'1.25em'} textSize={'text-xs'} />
					</li>
				{/each}
			</ul>
		</footer>
	</article>
</a>
