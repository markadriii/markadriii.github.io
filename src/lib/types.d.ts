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

export type Content = {
	src: string;
	alt: string;
	href: string;
	title: string;
	subtitle: string;
	date: string;
	info: string;
	stack: Skill[];
};
