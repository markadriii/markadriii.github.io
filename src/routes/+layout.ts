import type { PageLoad } from './$types';
import { getLayoutData } from '$lib/utils/data';

export const load: PageLoad = async () => {
	const data = getLayoutData();
	return data;
};
