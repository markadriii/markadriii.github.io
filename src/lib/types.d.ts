export interface TIcon {
	icon: string;
	name: string;
	url: string;
}

export type TIconType = 'technical' | 'utility';

export type TIcons = {
	[key in TIconType]: {
		[key: string]: TIcon;
	};
};

export type TProfile = {
	name: string;
	header: string;
	info: string;
};

export type TSkillCategory = 'Language' | 'Framework' | 'Database' | 'Other';

export type TSkillsRaw = Record<TCategory, string[]>;

export type TSkillsFormatted = Record<TCategory, TIcon[]>;

interface TContent<T> {
	src: string;
	alt: string;
	url: string;
	title: string;
	subtitle: string;
	date: string;
	info: string;
	stack: T[];
}

export type TContentRaw = TContent<string>;

export type TContentFormatted = TContent<TIcon>;

export type TPartType = 'plain' | 'link';

export type TPart = {
	type: TPartType;
	text: string;
	url?: string;
};

export type TParagraph = string[];
