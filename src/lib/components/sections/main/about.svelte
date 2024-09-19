<script lang="ts">
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	export let id: string;
	export let spacing: string;
</script>

<SectionContainer {id} {spacing} let:ContentContainer>
	<ContentContainer title={'About me'}>
		<article class="flex flex-col items-start justify-center leading-relaxed antialiased">
			<p class="mb-4">
				Hi there, I'm Adrian! I'm enthusiastic about utilizing my skills and technical
				expertise to contribute to projects. I am dedicated to continuous growth through
				making contributions while building meaningful connections in the tech industry.
			</p>
			<p>
				I earned (joke wala pa pls lang baka naman) a Bachelor of Science in Computer
				Science, major in Software Technology, from <a
					href="asd"
					class="font-semibold text-tertiary-300 hover:text-primary-500"
					>De La Salle University - Manila</a
				>
				in 2024. Prior to that, I completed the STEM track during my Senior High School years
				at
				<a href="asd" class="font-semibold text-tertiary-300 hover:text-primary-500"
					>Darwin International School</a
				> in 2019.
			</p>
		</article>
	</ContentContainer>
</SectionContainer>
