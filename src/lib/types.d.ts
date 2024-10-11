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

interface TContent {
	src: string;
	alt: string;
	url: string;
	title: string;
	subtitle: string;
	date: string;
	info: string;
}

export interface TContentRaw extends TContent {
	stack: string[];
}

export interface TContentFormatted extends TContent {
	stack: TIcon[];
}

export type TPartType = 'plain' | 'link';

export type TPart = {
	type: TPartType;
	text: string;
	url?: string;
};

export type TParagraph = string[];
