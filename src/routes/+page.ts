import type { PageLoad } from './$types';
import { loadIcons } from '@iconify/svelte';
import { extractIcons, getPageData } from '$lib/utils/data';

export const load: PageLoad = async () => {
	const data = getPageData();
	loadIcons(extractIcons());
	return data;
};
