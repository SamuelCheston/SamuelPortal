export type Project = {
        name: string;
        description: string;
        url?: string;
};

type ProjectSeries = {
        id: string;
        name: string;
        introduction: string;
        projects: Project[];
};

type ProjectGroup = {
        id: string;
        name: string;
        introduction: string;
        projects: Project[];
        series?: ProjectSeries[];
};

export const projectGroups: ProjectGroup[] = [
        {
                id: 'matchcore',
                name: 'MatchCore Series',
                introduction: 'A connected ecosystem for authentication, matchmaking, and the services around them.',
                projects: [
                        { name: 'MatchCore-Portal', description: 'A bilingual portal for the wider MatchCore ecosystem.' },
                ],
                series: [
                        {
                                id: 'hrpauth',
                                name: 'HRPAuth Series',
                                introduction: 'Authentication, identity, and the supporting services around the platform.',
                                projects: [
                                        { name: 'HRPAuth', description: 'Authentication, OAuth2, multi-factor security, and a gateway for connected services.', url: 'https://github.com/CoreMatch/HRPAuth' },
                                        { name: 'HRPAuth-Yggdrasil-API', description: 'A Yggdrasil-compatible authentication, session, and profile service.' },
                                        { name: 'HRPAuth-Spigot', description: 'A Velocity plugin connecting game identities to the authentication platform.' },
                                        { name: 'HRPAuth-WebUI', description: 'A user-facing authentication and account management interface.', url: 'https://github.com/CoreMatch/HRPAuth-WebUI' },
                                        { name: 'HRPAuth-Wiki', description: 'Bilingual documentation for the authentication ecosystem.' },
                                        { name: 'HRPAuth-Backend-PHP', description: 'A PHP backend integrating Yggdrasil with a shared MVC foundation.' },
                                        { name: 'HRPAuth-Legacy', description: 'An early PHP account and Yggdrasil backend.' },
                                        { name: 'PHP-zggdrasil-mock', description: 'A mock implementation for testing Yggdrasil integrations.' },
                                        { name: 'PHP-yggdrasil-api-debugger', description: 'A visual workbench for inspecting protocol requests and responses.' },
                                        { name: 'HA-Contract', description: 'API contracts and drift checks for the HA services.' },
                                        { name: 'HASkinLib', description: 'A service for uploading, storing, retrieving, and previewing textures.' },
                                        { name: 'HASkinProxy', description: 'A skin proxy connecting custom skin layers to Yggdrasil profiles.' },
                                        { name: 'HA-WebUI-SDKHandler', description: 'Collects service SDKs and builds their extensions into the main web interface.' },
                                        { name: 'HA-Services-Deployer', description: 'A manifest-driven deployment service for the HA ecosystem.' },
                                        { name: 'HA-Services-MaintenanceView', description: 'An operations interface for bootstrapping and deploying services.' },
                                        { name: 'WinnerProxy', description: 'A proxy that routes requests between official and self-hosted services.' },
                                        { name: 'BS2HA', description: 'An offline migration tool for moving BlessingSkin data into HRPAuth.', url: 'https://github.com/CoreMatch/BS2HA' },
                                        { name: 'SamuelClient', description: 'A Minecraft launcher with resource management and custom authentication integration.' },
                                ],
                        },
                        {
                                id: 'matchcore-arena',
                                name: 'MatchCore Series',
                                introduction: 'Matchmaking and Elo-MMR, from game-side match reports to player ratings and operational tools.',
                                projects: [
                                        { name: 'MatchCoreArena-Server', description: 'Match reporting, participant records, rankings, and a weighted Elo rating engine.' },
                                        { name: 'MatchCoreArena-Client', description: 'A desktop client for authentication, rankings, and player-facing features.' },
                                        { name: 'MatchCoreArena-MaintenanceView', description: 'A desktop operations tool with a rating simulator and data management.' },
                                        { name: 'BedwarsRel-MCA', description: 'A BedwarsRel integration that reports match results to the rating service.' },
                                        { name: 'BWSBA-MCA', description: 'A scoreboard companion maintained alongside the BedwarsRel integration.' },
                                        { name: 'RW-HPS', description: 'A Go networking and orchestration implementation for Rusted Warfare, with an external game kernel.' },
                                ],
                        },
                ],
        },
        {
                id: 'silo40',
                name: 'Silo40 Series',
                introduction: 'A configurable simulation of organizations, roles, and events.',
                projects: [
                        { name: 'Silo40', description: 'An organizational simulation driven by configurable roles, departments, traits, and events.', url: 'https://github.com/SamuelCheston/Silo40' },
                ],
        },
        {
                id: 'martial-art-school',
                name: 'MartialArt School Series',
                introduction: 'A martial arts world built on the Silo40 simulation foundation.',
                projects: [
                        { name: 'MartialArtSchool', description: 'A martial arts-themed adaptation of the Silo40 simulation.' },
                ],
        },
        {
                id: 'others',
                name: 'Others',
                introduction: 'More experiments, tools, and places that bring the work together.',
                projects: [
                        { name: 'Tinyvisor', description: 'A lightweight control panel for scripts and daemon processes.' },
                        { name: 'AccessibilitiesCore', description: 'An initial service foundation for accessibility capabilities.' },
                        { name: 'SamuelPortal', description: 'This personal portal and portfolio.' },
                        { name: 'SamuelWiki', description: 'A bilingual knowledge base for architecture, deployment, and documentation.' },
                        { name: 'SamuelCheston', description: 'A profile repository for identity and licensing.' },
                ],
        },
];
