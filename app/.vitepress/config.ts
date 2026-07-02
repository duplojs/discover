import { defineConfig, type DefaultTheme, type UserConfig } from "vitepress";
import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import { ModuleDetectionKind, ModuleKind, ModuleResolutionKind } from "typescript";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";
import { Path, pipe } from "@duplojs/utils";
import { withMermaid } from "vitepress-plugin-mermaid";
import tailwindcss from "@tailwindcss/vite";

const hostname = "https://duplojs.dev";
const ogImage = new URL("/images/ogImage.png", hostname).toString();

interface ThemeConfig extends DefaultTheme.Config {
	wip?: {
		title: string;
		button: string;
	};
}

export default pipe(
	{
		title: "DuploJS",
		base: "/",
		appearance: false,
		cleanUrls: true,
		sitemap: {
			hostname,
		},
		head: [
			[
				"link",
				{
					rel: "icon",
					href: "/images/logo.ico",
				},
			],
			[
				"meta",
				{
					property: "og:type",
					content: "website",
				},
			],
			[
				"meta",
				{
					property: "og:image",
					content: ogImage,
				},
			],
			[
				"meta",
				{
					name: "twitter:card",
					content: "summary_large_image",
				},
			],
			[
				"meta",
				{
					name: "twitter:image",
					content: ogImage,
				},
			],
		],
		themeConfig: {
			logo: "/images/logo.png",
			wip: {
				title: "WIP",
				button: "Request this page",
			},
			socialLinks: [
				{
					icon: "github",
					link: "https://github.com/duplojs/discover",
				},
				{
					icon: "npm",
					link: "https://www.npmjs.com/package/@duplojs/discover",
				},
				{
					icon: "linkedin",
					link: "https://linkedin.com/company/duplojs",
				},
				{
					icon: "discord",
					link: "https://discord.gg/5d6Ze5Wuqm",
				},
			],
			search: {
				provider: "local",
			},
		},
		markdown: {
			config: (md) => {
				md.use(groupIconMdPlugin);
			},
			codeTransformers: [
				transformerTwoslash({
					twoslashOptions: {
						compilerOptions: {
							module: ModuleKind.ESNext,
							moduleResolution: ModuleResolutionKind.Bundler,
							moduleDetection: ModuleDetectionKind.Force,
							strict: true,
							noImplicitAny: true,
							strictNullChecks: true,
							strictFunctionTypes: true,
							strictBindCallApply: true,
							strictPropertyInitialization: true,
							noImplicitThis: true,
							useUnknownInCatchVariables: true,
							alwaysStrict: true,
							noImplicitReturns: true,
							noUncheckedIndexedAccess: true,
							noImplicitOverride: true,
							types: ["@types/web", "@types/node"],
						},
					},
				}),
			],
		},
		vite: {
			plugins: [
				groupIconVitePlugin(),
				tailwindcss(),
			],
			resolve: {
				alias: {
					"@": Path.resolveRelative([import.meta.dirname, ".."]),
				},
			},
			server: {
				host: "0.0.0.0",
			},
		},
		locales: {
			fr: {
				label: "Français",
				lang: "fr",
				link: "/fr/",
				themeConfig: {
					nav: [],
					sidebar: {},
					docFooter: {
						prev: "Page précédente",
						next: "Page suivante",
					},
					outline: {
						label: "Sur cette page",
					},
					returnToTopLabel: "Retour en haut",
					darkModeSwitchLabel: "Mode sombre",
					footer: {
						copyright: "Copyright © 2025-présent Contributeurs de DuploJS",
						message: "Diffusé sous licence MIT.",
					},
				},
			},
			root: {
				label: "English",
				lang: "en",
				link: "/en/",
				themeConfig: {
					nav: [],
					sidebar: {},
					docFooter: {
						prev: "Previous page",
						next: "Next page",
					},
					outline: {
						label: "On this page",
					},
					returnToTopLabel: "Return to top",
					darkModeSwitchLabel: "Dark mode",
					footer: {
						copyright: "Copyright © 2025-present DuploJS contributors",
						message: "Released under the MIT License.",
					},
				},
			},
		},
	} satisfies UserConfig<ThemeConfig>,
	defineConfig,
	withMermaid,
);
