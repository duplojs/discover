import type { LandingHeaderContent, LandingHeroContent } from "./types";

export type LandingLanguage = "en" | "fr";

export interface LandingContent {
	header: LandingHeaderContent;
	hero: LandingHeroContent;
}

export const landingContent: Record<LandingLanguage, LandingContent> = {
	en: {
		header: {
			logoAlt: "DuploJS logo, yellow 2 by 2 brick mascot",
			nav: [
				{
					label: "Docs",
					href: "/en/",
				},
				{
					label: "Libraries",
					href: "/en/",
				},
				{
					label: "Resources",
					href: "/en/",
				},
			],
			socials: [
				{
					label: "GitHub",
					href: "https://github.com/duplojs/discover",
					icon: "GH",
				},
				{
					label: "npm",
					href: "https://www.npmjs.com/package/@duplojs/discover",
					icon: "npm",
				},
				{
					label: "Discord",
					href: "https://discord.gg/5d6Ze5Wuqm",
					icon: "DC",
				},
			],
		},
		hero: {
			kicker: "Type-Driven Development ecosystem",
			titleLines: [
				"Build your",
				"project with",
				"good bricks.",
			],
			description: "A Type-Driven Development ecosystem for reliable TypeScript applications.",
			proof: "1000+ functions. Fully typed. Zero external dependencies. Pick the bricks you need.",
			actions: [
				{
					label: "Get started",
					href: "/en/",
					variant: "primary",
				},
				{
					label: "Explore docs",
					href: "/en/",
					variant: "secondary",
				},
			],
			metrics: [
				{
					value: "6",
					label: "libraries",
				},
				{
					value: "0",
					label: "external deps",
				},
				{
					value: "TS",
					label: "first class",
				},
			],
			packages: [
				{
					name: "@duplojs/utils",
					label: "Utils",
					description: "typed functions",
				},
				{
					name: "@duplojs/http",
					label: "HTTP",
					description: "contracts",
				},
				{
					name: "@duplojs/form",
					label: "Form",
					description: "schema flow",
				},
				{
					name: "@duplojs/json-web-token",
					label: "JWT",
					description: "signed states",
				},
				{
					name: "@duplojs/playwright",
					label: "Playwright",
					description: "typed e2e",
				},
				{
					name: "@duplojs/server-utils",
					label: "Server utils",
					description: "runtime tools",
				},
			],
		},
	},
	fr: {
		header: {
			logoAlt: "Logo DuploJS, mascotte brique jaune 2 par 2",
			nav: [
				{
					label: "Docs",
					href: "/fr/",
				},
				{
					label: "Libraries",
					href: "/fr/",
				},
				{
					label: "Resources",
					href: "/fr/",
				},
			],
			socials: [
				{
					label: "GitHub",
					href: "https://github.com/duplojs/discover",
					icon: "GH",
				},
				{
					label: "npm",
					href: "https://www.npmjs.com/package/@duplojs/discover",
					icon: "npm",
				},
				{
					label: "Discord",
					href: "https://discord.gg/5d6Ze5Wuqm",
					icon: "DC",
				},
			],
		},
		hero: {
			kicker: "Ecosysteme Type-Driven Development",
			titleLines: [
				"Build your",
				"project with",
				"good bricks.",
			],
			description: "Un ecosysteme Type-Driven Development pour construire des applications TypeScript fiables.",
			proof: "1000+ fonctions. Entierement typees. Zero dependance externe. Choisis les briques dont tu as besoin.",
			actions: [
				{
					label: "Commencer",
					href: "/fr/",
					variant: "primary",
				},
				{
					label: "Explorer la doc",
					href: "/fr/",
					variant: "secondary",
				},
			],
			metrics: [
				{
					value: "6",
					label: "libraries",
				},
				{
					value: "0",
					label: "external deps",
				},
				{
					value: "TS",
					label: "first class",
				},
			],
			packages: [
				{
					name: "@duplojs/utils",
					label: "Utils",
					description: "fonctions typees",
				},
				{
					name: "@duplojs/http",
					label: "HTTP",
					description: "contrats",
				},
				{
					name: "@duplojs/form",
					label: "Form",
					description: "schema flow",
				},
				{
					name: "@duplojs/json-web-token",
					label: "JWT",
					description: "etats signes",
				},
				{
					name: "@duplojs/playwright",
					label: "Playwright",
					description: "e2e type",
				},
				{
					name: "@duplojs/server-utils",
					label: "Server utils",
					description: "outils runtime",
				},
			],
		},
	},
};
