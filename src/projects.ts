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
                        { name: 'MatchCore-Portal', description: 'A bilingual portal for the wider MatchCore ecosystem.', url: 'https://github.com/CoreMatch/MatchCore-Portal' },
                        { name: 'Cascade', description: 'An edge reverse proxy for Rusted Warfare group servers, routing clients to backends by room code with HRPAuth authentication.', url: 'https://github.com/CoreMatch/Cascade' },
                ],
                series: [
                        {
                                id: 'hrpauth',
                                name: 'HRPAuth Series',
                                introduction: 'Authentication, identity, and the supporting services around the platform.',
                                projects: [
                                        { name: 'HRPAuth', description: 'Authentication, OAuth2, multi-factor security, and a gateway for connected services.', url: 'https://github.com/CoreMatch/HRPAuth' },
                                        { name: 'HRPAuth-Yggdrasil-API', description: 'A Yggdrasil-compatible authentication, session, and profile service.', url: 'https://github.com/CoreMatch/HRPAuth-Yggdrasil-API' },
                                        { name: 'HRPAuth-Spigot', description: 'A Velocity plugin connecting game identities to the authentication platform.', url: 'https://github.com/CoreMatch/HRPAuth-Spigot' },
                                        { name: 'HRPAuth-WebUI', description: 'A user-facing authentication and account management interface.', url: 'https://github.com/CoreMatch/HRPAuth-WebUI' },
                                        { name: 'HRPAuth-Wiki', description: 'Bilingual documentation for the authentication ecosystem.', url: 'https://github.com/CoreMatch/HRPAuth-Wiki' },
                                        { name: 'HRPAuth-Backend-PHP', description: 'A PHP backend integrating Yggdrasil with a shared MVC foundation.', url: 'https://github.com/CoreMatch/HRPAuth-Backend-PHP' },
                                        { name: 'HRPAuth-Legacy', description: 'An early PHP account and Yggdrasil backend.', url: 'https://github.com/CoreMatch/HRPAuth-Legacy' },
                                        { name: 'PHP-zggdrasil-mock', description: 'A mock implementation for testing Yggdrasil integrations.', url: 'https://github.com/CoreMatch/PHP-zggdrasil-mock' },
                                        { name: 'PHP-yggdrasil-api-debugger', description: 'A visual workbench for inspecting protocol requests and responses.', url: 'https://github.com/CoreMatch/PHP-yggdrasil-api-debugger' },
                                        { name: 'HA-Contract', description: 'API contracts and drift checks for the HA services.', url: 'https://github.com/CoreMatch/HA-Contract' },
                                        { name: 'HASkinLib', description: 'A service for uploading, storing, retrieving, and previewing textures.', url: 'https://github.com/CoreMatch/HASkinLib' },
                                        { name: 'HASkinProxy', description: 'A skin proxy connecting custom skin layers to Yggdrasil profiles.', url: 'https://github.com/CoreMatch/HASkinProxy' },
                                        { name: 'HA-WebUI-SDKHandler', description: 'Collects service SDKs and builds their extensions into the main web interface.', url: 'https://github.com/CoreMatch/HA-WebUI-SDKHandler' },
                                        { name: 'HA-Services-Deployer', description: 'A manifest-driven deployment service for the HA ecosystem.', url: 'https://github.com/CoreMatch/HA-Services-Deployer' },
                                        { name: 'HA-Services-MaintenanceView', description: 'An operations interface for bootstrapping and deploying services.', url: 'https://github.com/CoreMatch/HA-Services-MaintenanceView' },
                                        { name: 'WinnerProxy', description: 'A proxy that routes requests between official and self-hosted services.', url: 'https://github.com/CoreMatch/WinnerProxy' },
                                        { name: 'BS2HA', description: 'An offline migration tool for moving BlessingSkin data into HRPAuth.', url: 'https://github.com/CoreMatch/BS2HA' },
                                        { name: 'SamuelClient', description: 'A Minecraft launcher with resource management and custom authentication integration.', url: 'https://github.com/CoreMatch/SamuelClient' },
                                ],
                        },
                        {
                                id: 'matchcore-arena',
                                name: 'MatchCore Series',
                                introduction: 'Matchmaking and Elo-MMR, from game-side match reports to player ratings and operational tools.',
                                projects: [
                                        { name: 'MatchCoreArena-Server', description: 'Match reporting, participant records, rankings, and a weighted Elo rating engine.', url: 'https://github.com/CoreMatch/MatchCoreArena-Server' },
                                        { name: 'MatchCoreArena-Client', description: 'A desktop client for authentication, rankings, and player-facing features.', url: 'https://github.com/CoreMatch/MatchCoreArena-Client' },
                                        { name: 'MatchCoreArena-MaintenanceView', description: 'A desktop operations tool with a rating simulator and data management.', url: 'https://github.com/CoreMatch/MatchCoreArena-MaintenanceView' },
                                        { name: 'BedwarsRel-MCA', description: 'A BedwarsRel integration that reports match results to the rating service.', url: 'https://github.com/CoreMatch/BedwarsRel-MCA' },
                                        { name: 'BWSBA-MCA', description: 'A scoreboard companion maintained alongside the BedwarsRel integration.', url: 'https://github.com/CoreMatch/BWSBA-MCA' },
                                        { name: 'RW-HPS', description: 'A Go networking and orchestration implementation for Rusted Warfare, with an external game kernel.', url: 'https://github.com/SamuelCheston/RW-HPS' },
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
                        { name: 'MartialArtSchool', description: 'A martial arts-themed adaptation of the Silo40 simulation.', url: 'https://github.com/SamuelCheston/MartialArtSchool' },
                ],
        },
        {
                id: 'others',
                name: 'Others',
                introduction: 'More experiments, tools, and places that bring the work together.',
                projects: [
                        { name: 'Tinyvisor', description: 'A lightweight control panel for scripts and daemon processes.', url: 'https://github.com/SamuelCheston/Tinyvisor' },
                        { name: 'AccessibilitiesCore', description: 'An initial service foundation for accessibility capabilities.', url: 'https://github.com/SamuelCheston/AccessibilitiesCore' },
                        { name: 'SamuelPortal', description: 'This personal portal and portfolio.', url: 'https://github.com/SamuelCheston/SamuelPortal' },
                        { name: 'SamuelWiki', description: 'A bilingual knowledge base for architecture, deployment, and documentation.', url: 'https://github.com/SamuelCheston/SamuelWiki' },
                        { name: 'SamuelCheston', description: 'A profile repository for identity and licensing.', url: 'https://github.com/SamuelCheston/SamuelCheston' },
                        { name: 'GoFish-CaliforniaVersion', description: 'A California-variant take on the Go Fish card game.', url: 'https://github.com/SamuelCheston/GoFish-CaliforniaVersion' },
                        { name: 'Sexual-Repression-Calculator', description: 'A fork of a psychology-scale-based self-assessment tool that runs entirely in the browser.', url: 'https://github.com/SamuelCheston/Sexual-Repression-Calculator' },
                ],
        },
];
