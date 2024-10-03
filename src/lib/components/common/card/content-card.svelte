<script lang="ts">
	import type { TContentFormatted } from '$lib/types';
	import { Avatar } from '@skeletonlabs/skeleton';
	import SkillCard from './skill-card.svelte';
	import { getInitials } from '$lib/utils/helpers';
	import Icon from '../icon.svelte';

	export let item: TContentFormatted;
</script>

<div class="group relative rounded-container-token">
	<article class="h-fit space-y-6 px-6 py-4 rounded-container-token hover:bg-primary-500/5">
		<header class="flex flex-col items-center space-y-4 lg:flex-row lg:space-x-8 lg:space-y-0">
			<Avatar
				src={item.src}
				width="w-12"
				rounded="rounded-full"
				initials={getInitials(item.title)}
				fill="fill-token group-hover:fill-primary-500"
			/>
			<div class="flex flex-col items-center lg:items-start">
				<a
					href={item.url}
					target="_blank"
					class="flex items-center text-tertiary-300 group-hover:text-primary-500"
					><h2 class="text-lg font-semibold">
						{item.title}<Icon
							color={false}
							icon={'mdi--link-variant'}
							classes={'ml-1 transform group-hover:rotate-180 transition-transform duration-700'}
						/>
					</h2>
					<span class="absolute inset-0 z-0 block"></span></a
				>
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
					<li class="z-10">
						<SkillCard item={skill} iconSize={'size-5'} textSize={'text-xs'} />
					</li>
				{/each}
			</ul>
		</footer>
	</article>
</div>
