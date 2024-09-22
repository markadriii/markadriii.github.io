interface TIcon {
	icon: string;
	name: string;
	url?: string;
}

export interface TNavigation extends TIcon {}

export interface TSocial extends TIcon {}

export interface TSkill extends TIcon {}

export type TSkillCategory = 'Language' | 'Framework' | 'Database' | 'Other';

export type TSkills = Record<TCategory, TSkill[]>;

export type TContent = {
	src: string;
	alt: string;
	url: string;
	title: string;
	subtitle: string;
	date: string;
	info: string;
	stack: TSkill[];
};

export type TPartType = 'plain' | 'link';

export type TPart = {
	type: TPartType;
	text: string;
	url?: string;
};

export type TParagraph = {
	content: string[];
};
