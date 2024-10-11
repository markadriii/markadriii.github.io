import type {
	TContentFormatted,
	TContentRaw,
	TIcon,
	TIconType,
	TSkillCategory,
	TSkillsFormatted,
	TSkillsRaw
} from '$lib/types';
import { about } from '$lib/data/about';
import { experiences } from '$lib/data/experiences';
import { icons } from '$lib/data/icons';
import { navigations } from '$lib/data/navigations';
import { profile } from '$lib/data/profile';
import { projects } from '$lib/data/projects';
import { skills } from '$lib/data/skills';
import { credits } from '$lib/data/credits';
import { socials } from '$lib/data/socials';
import { metadata } from '$lib/data/metadata';

export function getLayoutData(): any {
	const formattedData = {
		metadata: metadata
	};
	return formattedData;
}

export function getPageData(): any {
	const formattedData = {
		profile: profile,
		navigations: handleIcons(navigations, 'utility'),
		socials: handleIcons(socials, 'utility'),
		about: about,
		skills: handleSkills(skills),
		experiences: handleContent(experiences),
		projects: handleContent(projects),
		credits: credits
	};
	return formattedData;
}

function handleIcons(data: string[], type: TIconType): TIcon[] {
	return data.map((key) => icons[type][key]);
}

function handleExtraResources(data: TIcon[], type: TIconType): TIcon[] {
	if (!data) {
		return [];
	}
	return data.map((item) => ({
		...item,
		icon: icons[type][item.icon].icon
	}));
}

function handleSkills(skills: TSkillsRaw): TSkillsFormatted {
	return Object.keys(skills).reduce((formattedSkills, category) => {
		formattedSkills[category as TSkillCategory] = handleIcons(skills[category], 'technical');
		return formattedSkills;
	}, {} as TSkillsFormatted);
}

function handleContent(content: TContentRaw[]): TContentFormatted[] {
	return content.map((item) => ({
		...item,
		stack: handleIcons(item.stack, 'technical'),
		extra: handleExtraResources(item.extra, 'technical')
	}));
}
