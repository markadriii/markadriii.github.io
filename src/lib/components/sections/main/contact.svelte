<script lang="ts">
	import SectionContainer from '$lib/components/layouts/section-container.svelte';
	import Form from '../../common/form/form.svelte';

	export let id: string;
	export let spacing: string;
</script>

<SectionContainer {id} {spacing} let:ContentContainer>
	<ContentContainer title={'Contact'}>
		<Form />
	</ContentContainer>
</SectionContainer>
