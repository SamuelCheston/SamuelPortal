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
                name: 'MatchCore',
                introduction: 'A connected ecosystem across Minecraft and Rusted Warfare: authentication, matchmaking, and the services around them.',
                projects: [],
                series: [
                        {
                                id: 'hrpauth',
                                name: 'HRPAuth',
                                introduction: 'Game-agnostic identity infrastructure: the authentication core and its web interface.',
                                projects: [
                                        { name: 'HRPAuth-WebUI', description: 'A React interface for login, account management, and second-factor setup, and the shell where ecosystem services mount their pages.', url: 'https://github.com/CoreMatch/HRPAuth-WebUI' },
                                        { name: 'HRPAuth', description: 'The Go authentication core of the ecosystem: OAuth2, second factors (WebAuthn, TOTP, email), and a gateway for connected services.', url: 'https://github.com/CoreMatch/HRPAuth' },
                                        { name: 'HA-WebUI-SDKHandler', description: 'Collects service SDKs and builds their extensions into the main web interface.', url: 'https://github.com/CoreMatch/HA-WebUI-SDKHandler' },
                                        { name: 'HRPAuth-Backend-PHP', description: 'The archived PHP backend: a shared MVC skeleton with the Yggdrasil module, one codebase with HRPAuth-Legacy.', url: 'https://github.com/CoreMatch/HRPAuth-Backend-PHP' },
                                        { name: 'HRPAuth-Legacy', description: 'The archived PHP umbrella repository, originally published under the HRPAuth name.', url: 'https://github.com/CoreMatch/HRPAuth-Legacy' },
                                ],
                        },
                        {
                                id: 'minecraft',
                                name: 'Minecraft',
                                introduction: 'Everything built for Minecraft clients and servers: Yggdrasil authentication, skins, identity binding, and the launcher.',
                                projects: [
                                        { name: 'HRPAuth-Yggdrasil-API', description: 'A Yggdrasil-compatible authentication, session, and profile service for Minecraft clients, running as its own microservice.', url: 'https://github.com/CoreMatch/HRPAuth-Yggdrasil-API' },
                                        { name: 'WinnerProxy', description: 'A proxy that routes Yggdrasil requests to Mojang or to HRPAuth, depending on where each account lives.', url: 'https://github.com/CoreMatch/WinnerProxy' },
                                        { name: 'HASkinLib', description: 'A texture upload, storage, and preview service that delegates user checks to the HRPAuth core.', url: 'https://github.com/CoreMatch/HASkinLib' },
                                        { name: 'HASkinProxy', description: 'A skin proxy connecting custom skin layers to Yggdrasil profiles.', url: 'https://github.com/CoreMatch/HASkinProxy' },
                                        { name: 'SamuelClient', description: 'A Minecraft launcher with resource downloads and authlib-injector support for self-hosted authentication.', url: 'https://github.com/CoreMatch/SamuelClient' },
                                        { name: 'HRPAuth-Spigot', description: 'A Velocity plugin that binds in-game identities to platform accounts.', url: 'https://github.com/CoreMatch/HRPAuth-Spigot' },
                                        { name: 'PHP-zggdrasil-mock', description: 'A mock implementation for testing Yggdrasil integrations.', url: 'https://github.com/CoreMatch/PHP-zggdrasil-mock' },
                                        { name: 'PHP-yggdrasil-api-debugger', description: 'A visual workbench for issuing and inspecting Yggdrasil protocol requests.', url: 'https://github.com/CoreMatch/PHP-yggdrasil-api-debugger' },
                                        { name: 'FXPVP', description: 'An archived, deprecated Minecraft launcher whose README points users to a successor project.', url: 'https://github.com/SamuelCheston/FXPVP' },
                                        { name: 'BWSBA-MCA', description: 'A fork of BedwarsScoreBoardAddon, a scoreboard add-on plugin that extends BedwarsRel.', url: 'https://github.com/CoreMatch/BWSBA-MCA' },
                                ],
                        },
                        {
                                id: 'rusted-warfare',
                                name: 'Rusted Warfare',
                                introduction: 'Server-side infrastructure for Rusted Warfare: networking, orchestration, and edge routing.',
                                projects: [
                                        { name: 'Cascade', description: 'An edge reverse proxy for Rusted Warfare group servers, routing clients to backends by room code with HRPAuth authentication.', url: 'https://github.com/CoreMatch/Cascade' },
                                        { name: 'RW-HPS', description: 'A Go networking and orchestration layer for Rusted Warfare, built on the RW-HPS fork with the game kernel kept external.', url: 'https://github.com/SamuelCheston/RW-HPS' },
                                ],
                        },
                        {
                                id: 'matchmaking',
                                name: 'Matchmaking',
                                introduction: 'Match results, Elo ratings, and rankings, from game-side reporting to player-facing views.',
                                projects: [
                                        { name: 'MatchCoreArena-Server', description: 'Match reporting, participant records, rankings, and a weighted Elo rating engine, authenticating through HRPAuth.', url: 'https://github.com/CoreMatch/MatchCoreArena-Server' },
                                        { name: 'BedwarsRel-MCA', description: 'A BedwarsRel fork that reports finished matches to the rating service, kept compatible with Minecraft 1.8.', url: 'https://github.com/CoreMatch/BedwarsRel-MCA' },
                                        { name: 'MatchCoreArena-Client', description: 'A Wails desktop client with OAuth2 login, rankings, and a friend list.', url: 'https://github.com/CoreMatch/MatchCoreArena-Client' },
                                ],
                        },
                        {
                                id: 'maintenance',
                                name: 'Maintenance',
                                introduction: 'Operations and upkeep: API contracts, deployment consoles, migration tools, and process control panels.',
                                projects: [
                                        { name: 'HA-Contract', description: 'API contracts, SDK manifest specs, and drift checks for the HA services.', url: 'https://github.com/CoreMatch/HA-Contract' },
                                        { name: 'Tinyvisor', description: 'A lightweight control panel for scripts and daemon processes, shipped as a single binary with the frontend embedded.', url: 'https://github.com/SamuelCheston/Tinyvisor' },
                                        { name: 'MatchCoreArena-MaintenanceView', description: 'A desktop operations tool with a rating simulator and data management.', url: 'https://github.com/CoreMatch/MatchCoreArena-MaintenanceView' },
                                        { name: 'BS2HA', description: 'An offline migration tool for moving BlessingSkin data into HRPAuth.', url: 'https://github.com/CoreMatch/BS2HA' },
                                        { name: 'HA-Services-Deployer', description: 'A manifest-driven deployment service for the HA ecosystem.', url: 'https://github.com/CoreMatch/HA-Services-Deployer' },
                                        { name: 'HA-Services-MaintenanceView', description: 'An operations interface for bootstrapping and deploying services.', url: 'https://github.com/CoreMatch/HA-Services-MaintenanceView' },
                                ],
                        },
                ],
        },
        {
                id: 'others',
                name: 'Others',
                introduction: 'Documentation and the sites that hold this work together, plus experiments and archived sketches.',
                projects: [
                        { name: 'SamuelWiki', description: 'A bilingual knowledge base covering architecture and deployment, built on VitePress.', url: 'https://github.com/SamuelCheston/SamuelWiki' },
                        { name: 'SamuelPortal', description: 'This personal portal and portfolio.', url: 'https://github.com/SamuelCheston/SamuelPortal' },
                        { name: 'MatchCore-Portal', description: 'A bilingual portal for the wider MatchCore ecosystem.', url: 'https://github.com/CoreMatch/MatchCore-Portal' },
                        { name: 'SamuelCheston', description: 'A profile repository for identity and licensing.', url: 'https://github.com/SamuelCheston/SamuelCheston' },
                        { name: 'HRPAuth-Wiki', description: 'Bilingual documentation for the authentication ecosystem.', url: 'https://github.com/CoreMatch/HRPAuth-Wiki' },
                        { name: 'AccessibilitiesCore', description: 'An archived Gin service skeleton for accessibility capabilities.', url: 'https://github.com/SamuelCheston/AccessibilitiesCore' },
                        { name: 'Sexual-Repression-Calculator', description: 'A fork of a psychology-scale-based self-assessment tool that runs entirely in the browser.', url: 'https://github.com/SamuelCheston/Sexual-Repression-Calculator' },
                        { name: 'GoFish-CaliforniaVersion', description: 'A California-variant take on the Go Fish card game, not yet started.', url: 'https://github.com/SamuelCheston/GoFish-CaliforniaVersion' },
                        { name: 'GfCv-Contract', description: 'A contract repository for GoFish-CaliforniaVersion (GfCv), currently a placeholder.', url: 'https://github.com/SamuelCheston/GfCv-Contract' },
                        { name: 'SID', description: 'A PHP authentication system for the author\'s own services.', url: 'https://github.com/SamuelCheston/SID' },
                        { name: 'csn', description: 'A collection of basic programming course materials.', url: 'https://github.com/SamuelCheston/csn' },
                        { name: 'javaassignments', description: 'A collection of Java course assignments, including a Connect Four implementation.', url: 'https://github.com/SamuelCheston/javaassignments' },
                ],
        },
        {
                id: 'silo40',
                name: 'Silo40 Series',
                introduction: 'Simulation games built on one theme-swappable engine.',
                projects: [
                        { name: 'Silo40', description: 'A silo-survival strategy game driven by departments, resources, ideologies, and events.', url: 'https://github.com/SamuelCheston/Silo40' },
                ],
        },
        {
                id: 'martial-art-school',
                name: 'MartialArt School Series',
                introduction: 'A martial arts world built on the Silo40 simulation foundation.',
                projects: [
                        { name: 'MartialArtSchool', description: 'A martial arts-themed simulation running on the Silo40 engine.', url: 'https://github.com/SamuelCheston/MartialArtSchool' },
                ],
        },
];
