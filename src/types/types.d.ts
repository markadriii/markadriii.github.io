interface IconItem {
	icon: string;
	name: string;
	href?: string;
}

interface NavigationItem extends IconItem {}
interface SocialItem extends IconItem {}
interface SkillItem extends IconItem {}

export type NavigationLink = NavigationItem;
export type SocialLink = SocialItem;
export type Skill = SkillItem;

export type SkillCategory = 'Language' | 'Framework' | 'Database' | 'Other';

export type Skills = {
	[key in SkillCategory]: Skill[];
};

export type Experience = {
	href: string;
	name: string;
	position: string;
	info: string;
	date: string;
	stack: Skill[];
	logo: IconItem;
};

export type Project = {
	name: string;
	info: string;
	description: string;
	href: string;
	date: string;
	image: string;
	stack: Skill[];
};
