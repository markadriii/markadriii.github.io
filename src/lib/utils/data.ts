export async function fetchData() {
	try {
		const response = await fetch('./data.json');
		if (!response.ok) {
			throw new Error('Failed to fetch data.');
		}
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}
