export function getInitials(name: string): string {
	const words = name.trim().split(/\s+/);

	if (words.length === 1) {
		return words[0].charAt(0).toUpperCase();
	}

	const firstWord = words[0];
	const lastWord = words[words.length - 1];

	const initials = firstWord.charAt(0).toUpperCase() + lastWord.charAt(0).toUpperCase();

	return initials;
}
