import { transformerTwoslash } from "@shikijs/vitepress-twoslash";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ModuleDetectionKind, ModuleKind, ModuleResolutionKind } from "typescript";
import { defineConfig, type DefaultTheme } from "vitepress";
import { groupIconMdPlugin, groupIconVitePlugin } from "vitepress-plugin-group-icons";
import { withMermaid } from "vitepress-plugin-mermaid";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const hostname = "https://duplojs.dev";
const ogImage = new URL("/images/ogImage.png", hostname).toString();

export default withMermaid(
	defineConfig({
		title: "DuploJS",
		base: "/",
		appearance: false,
		cleanUrls: true,

		sitemap: { hostname },

		head: [
			[
				"link",
				{
					rel: "icon",
					href: "/images/logo.ico",
				},
			],
			[
				"link",
				{
					rel: "preconnect",
					href: "https://fonts.googleapis.com",
				},
			],
			[
				"link",
				{
					rel: "preconnect",
					href: "https://fonts.gstatic.com",
					crossorigin: "",
				},
			],
			[
				"link",
				{
					rel: "stylesheet",
					href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Space+Grotesk:wght@700;800&family=Fragment+Mono:ital,wght@0,400;1,400&display=swap",
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
			socialLinks: [
				{
					icon: "github",
					link: "https://github.com/duplojs/discover",
				},
				{
					icon: "discord",
					link: "https://discord.gg/5d6Ze5Wuqm",
				},
			],
			search: { provider: "local" },
		} satisfies DefaultTheme.Config,

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
					"@": path.resolve(__dirname, ".."),
				},
			},
			server: {
				host: "0.0.0.0",
			},
		},

		locales: {
			root: {
				label: "English",
				lang: "en-US",
				themeConfig: {
					nav: [],
					sidebar: {},
					docFooter: {
						prev: "Previous page",
						next: "Next page",
					},
					outline: { label: "On this page" },
					returnToTopLabel: "Return to top",
					darkModeSwitchLabel: "Dark mode",
					footer: {
						copyright: "Copyright © 2025-present DuploJS contributors",
						message: "Released under the MIT License.",
					},
				},
			},
			fr: {
				label: "Français",
				lang: "fr-FR",
				themeConfig: {
					nav: [],
					sidebar: {},
					docFooter: {
						prev: "Page précédente",
						next: "Page suivante",
					},
					outline: { label: "Sur cette page" },
					returnToTopLabel: "Retour en haut",
					darkModeSwitchLabel: "Mode sombre",
					footer: {
						copyright: "Copyright © 2025-présent Contributeurs de DuploJS",
						message: "Diffusé sous licence MIT.",
					},
				},
			},
		},
	}),
);
