export const SITE_TITLE = 'Samuel Cheston';
export const SITE_DESCRIPTION =
	'Independent developer building MatchCore: a game ecosystem that started with ELO-MMR matchmaking for Minecraft, from authentication to the systems around it.';

export const PROFILE = {
	name: SITE_TITLE,
	github: 'https://github.com/SamuelCheston',
	ecosystem: 'https://github.com/CoreMatch',
};

// Project scope comes from the public READMEs; ownership and current HRPAuth
// figures were confirmed by Samuel. Do not infer release status from activity.
export const HRPAUTH = {
	name: 'HRPAuth',
	url: 'https://github.com/CoreMatch/HRPAuth',
	frontend: 'https://github.com/CoreMatch/HRPAuth-WebUI',
	users: 50,
	status: 'Rapid iteration',
};

export const PROJECTS = [
	{
		number: '01',
		name: 'HRPAuth',
		category: 'Identity & authentication',
                summary: 'Minecraft authentication and skin management, built for MatchCore.',
		description:
			`Minecraft authentication and skin management. An independently built part of MatchCore, with ${HRPAUTH.users} real users and a rapidly evolving Go backend.`,
		detail: 'Yggdrasil authentication, textures, and a dedicated web interface.',
		technologies: ['Go', 'MySQL', 'Redis', 'TypeScript'],
		url: HRPAUTH.url,
	},
	{
		number: '02',
		name: 'Cascade',
		category: 'Protocols & infrastructure',
                summary: 'An edge proxy connecting Rusted Warfare players to game servers.',
		description:
			'An edge reverse proxy for Rusted Warfare. Routes players to independent backends and connects game traffic with HRPAuth authentication.',
		detail: 'Room-code routing, native protocol forwarding, and mTLS.',
		technologies: ['Go', 'TCP', 'mTLS'],
		url: 'https://github.com/CoreMatch/Cascade',
	},
	{
		number: '03',
		name: 'Silo40',
		category: 'Games & experiments',
                summary: 'A strategy game exploring survival and evolving ideologies in the world of Wool.',
		description:
			'A strategy game set in the world of Wool. Exploring survival, evolving ideologies, and different paths for a civilization underground.',
		detail: 'Game logic in the frontend; a Go backend for persistence.',
		technologies: ['Go', 'Wails', 'React', 'SQLite'],
		url: 'https://github.com/SamuelCheston/Silo40',
	},
];
