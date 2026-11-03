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
                        { name: 'MatchCore-Portal', description: 'A bilingual portal for the wider MatchCore ecosystem, built with Astro in two days.', url: 'https://github.com/CoreMatch/MatchCore-Portal' },
                        { name: 'Cascade', description: 'A Rusted Warfare edge proxy that routes clients to backends by room code with HRPAuth authentication — originally a full game server, shrunk to the proxy role.', url: 'https://github.com/CoreMatch/Cascade' },
                ],
                series: [
                        {
                                id: 'hrpauth',
                                name: 'HRPAuth Series',
                                introduction: 'Authentication, identity, and the supporting services around the platform.',
                                projects: [
                                        { name: 'HRPAuth', description: 'The Go authentication core, rewritten from the original PHP backend: OAuth2, second factors (WebAuthn, TOTP, email), and a gateway for connected services.', url: 'https://github.com/CoreMatch/HRPAuth' },
                                        { name: 'HRPAuth-Yggdrasil-API', description: 'A Yggdrasil-compatible authentication, session, and profile service, split out of the HRPAuth core when Minecraft-specific logic left it.', url: 'https://github.com/CoreMatch/HRPAuth-Yggdrasil-API' },
                                        { name: 'HRPAuth-Spigot', description: 'A Velocity plugin that binds in-game identities to platform accounts.', url: 'https://github.com/CoreMatch/HRPAuth-Spigot' },
                                        { name: 'HRPAuth-WebUI', description: 'The first repository of the ecosystem: a React interface for login, account management, and second-factor setup that other services now mount their pages into.', url: 'https://github.com/CoreMatch/HRPAuth-WebUI' },
                                        { name: 'HRPAuth-Wiki', description: 'Bilingual documentation for the authentication ecosystem.', url: 'https://github.com/CoreMatch/HRPAuth-Wiki' },
                                        { name: 'HRPAuth-Backend-PHP', description: 'The archived PHP predecessor of the Go core — the first generation’s development channel, one codebase with HRPAuth-Legacy.', url: 'https://github.com/CoreMatch/HRPAuth-Backend-PHP' },
                                        { name: 'HRPAuth-Legacy', description: 'The first PHP generation’s test channel — one codebase with HRPAuth-Backend-PHP, originally published under the HRPAuth name.', url: 'https://github.com/CoreMatch/HRPAuth-Legacy' },
                                        { name: 'PHP-zggdrasil-mock', description: 'A mock implementation for testing Yggdrasil integrations.', url: 'https://github.com/CoreMatch/PHP-zggdrasil-mock' },
                                        { name: 'PHP-yggdrasil-api-debugger', description: 'A visual workbench for issuing and inspecting Yggdrasil protocol requests.', url: 'https://github.com/CoreMatch/PHP-yggdrasil-api-debugger' },
                                        { name: 'HA-Contract', description: 'API contracts, SDK manifest specs, and drift checks for the HA services.', url: 'https://github.com/CoreMatch/HA-Contract' },
                                        { name: 'HASkinLib', description: 'A texture upload, storage, and preview service that delegates user checks to the HRPAuth core.', url: 'https://github.com/CoreMatch/HASkinLib' },
                                        { name: 'HASkinProxy', description: 'A skin proxy connecting custom skin layers to Yggdrasil profiles.', url: 'https://github.com/CoreMatch/HASkinProxy' },
                                        { name: 'HA-WebUI-SDKHandler', description: 'Collects service SDKs and builds their extensions into the main web interface.', url: 'https://github.com/CoreMatch/HA-WebUI-SDKHandler' },
                                        { name: 'HA-Services-Deployer', description: 'A manifest-driven deployment service for the HA ecosystem.', url: 'https://github.com/CoreMatch/HA-Services-Deployer' },
                                        { name: 'HA-Services-MaintenanceView', description: 'An operations interface for bootstrapping and deploying services.', url: 'https://github.com/CoreMatch/HA-Services-MaintenanceView' },
                                        { name: 'WinnerProxy', description: 'A proxy that routes Yggdrasil requests to Mojang or to HRPAuth, depending on where each account lives.', url: 'https://github.com/CoreMatch/WinnerProxy' },
                                        { name: 'BS2HA', description: 'An offline migration tool for moving BlessingSkin data into HRPAuth.', url: 'https://github.com/CoreMatch/BS2HA' },
                                        { name: 'SamuelClient', description: 'A Minecraft launcher with resource downloads and authlib-injector support for self-hosted authentication.', url: 'https://github.com/CoreMatch/SamuelClient' },
                                ],
                        },
                        {
                                id: 'matchcore-arena',
                                name: 'MatchCore Series',
                                introduction: 'Matchmaking and Elo-MMR, from game-side match reports to player ratings and operational tools.',
                                projects: [
                                        { name: 'MatchCoreArena-Server', description: 'Match reporting, participant records, rankings, and a weighted Elo rating engine, authenticating through HRPAuth.', url: 'https://github.com/CoreMatch/MatchCoreArena-Server' },
                                        { name: 'MatchCoreArena-Client', description: 'A Wails desktop client with OAuth2 login, rankings, and a friend list.', url: 'https://github.com/CoreMatch/MatchCoreArena-Client' },
                                        { name: 'MatchCoreArena-MaintenanceView', description: 'A desktop operations tool with a rating simulator and data management.', url: 'https://github.com/CoreMatch/MatchCoreArena-MaintenanceView' },
                                        { name: 'BedwarsRel-MCA', description: 'A BedwarsRel fork that reports finished matches to the rating service, kept compatible with Minecraft 1.8.', url: 'https://github.com/CoreMatch/BedwarsRel-MCA' },
                                        { name: 'RW-HPS', description: 'A fork of RW-HPS porting its Java networking and orchestration layer to Go, with the game kernel moved into an external process.', url: 'https://github.com/SamuelCheston/RW-HPS' },
                                ],
                        },
                ],
        },
        {
                id: 'silo40',
                name: 'Silo40 Series',
                introduction: 'Simulation games built on one theme-swappable engine.',
                projects: [
                        { name: 'Silo40', description: 'A silo-survival strategy game driven by departments, resources, ideologies, and events, built in a ten-day sprint with its engine migrated from TypeScript to Go.', url: 'https://github.com/SamuelCheston/Silo40' },
                ],
        },
        {
                id: 'martial-art-school',
                name: 'MartialArt School Series',
                introduction: 'A martial arts world built on the Silo40 simulation foundation.',
                projects: [
                        { name: 'MartialArtSchool', description: 'A martial arts world on the Silo40 engine — the first instance of its theme-swappable skeleton.', url: 'https://github.com/SamuelCheston/MartialArtSchool' },
                ],
        },
        {
                id: 'others',
                name: 'Others',
                introduction: 'Smaller experiments and tools, and the sites that hold this work together.',
                projects: [
                        { name: 'Tinyvisor', description: 'A lightweight control panel for scripts and daemon processes, shipped as a single binary with the frontend embedded.', url: 'https://github.com/SamuelCheston/Tinyvisor' },
                        { name: 'AccessibilitiesCore', description: 'A Gin service skeleton for accessibility capabilities, archived after its first two commits.', url: 'https://github.com/SamuelCheston/AccessibilitiesCore' },
                        { name: 'SamuelPortal', description: 'This personal portal and portfolio, rebuilt from its first version into the ecosystem’s showcase.', url: 'https://github.com/SamuelCheston/SamuelPortal' },
                        { name: 'SamuelWiki', description: 'A bilingual knowledge base covering architecture and deployment, rebuilt on VitePress after starting as a hand-rolled React wiki.', url: 'https://github.com/SamuelCheston/SamuelWiki' },
                        { name: 'SamuelCheston', description: 'A profile repository for identity and licensing.', url: 'https://github.com/SamuelCheston/SamuelCheston' },
                        { name: 'GoFish-CaliforniaVersion', description: 'A California-variant take on the Go Fish card game, not yet started.', url: 'https://github.com/SamuelCheston/GoFish-CaliforniaVersion' },
                        { name: 'Sexual-Repression-Calculator', description: 'A fork of a psychology-scale-based self-assessment tool that runs entirely in the browser — now an archive, since the upstream repository was deleted.', url: 'https://github.com/SamuelCheston/Sexual-Repression-Calculator' },
                ],
        },
];
