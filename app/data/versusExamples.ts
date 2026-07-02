import type { Component } from "vue";
import {
	CleanApplicationD,
	CleanApplicationO,
	CleanDomainD,
	CleanDomainO,
	CommandD,
	CommandO,
	EitherFetchD,
	EitherFetchO,
	EitherFileD,
	EitherFileO,
	EitherJwtD,
	EitherJwtO,
	FormD,
	FormCFD,
	FormO,
	HttpClientD,
	HttpClientO,
	HttpRouteD,
	HttpRouteO,
	UFArrayMinElementD,
	UFArrayMinElementO,
	UFEntriesD,
	UFEntriesO,
	UFGroupByD,
	UFGroupByO,
	UFMapTupleD,
	UFMapTupleO,
	UFReduceD,
	UFReduceO,
} from "@/examples/versus";
import type { AnyTuple } from "@duplojs/utils";

export interface VersusFileTab {
	id: string;
	label: string;
	component: Component;
}

export interface VersusSide {
	label: string;
	badge: string;
	files: AnyTuple<VersusFileTab>;
}

export interface VersusExample {
	id: string;
	label: string;
	description: string;
	benefits: AnyTuple<string>;
	without: VersusSide;
	with: VersusSide;
}

export interface VersusGroup {
	id: string;
	label: string;
	description: string;
	examples: AnyTuple<VersusExample>;
}

export const versusGroups: AnyTuple<VersusGroup> = [
	{
		id: "either",
		label: "Either / Result",
		description: "Compare implicit failure handling with explicit typed result flows.",
		examples: [
			{
				id: "either-fetch",
				label: "Fetch",
				description: "Represent fetch failures explicitly instead of hiding them in thrown errors.",
				benefits: [
					"Explicit failure path",
					"No hidden throw",
					"Typed result",
				],
				without: {
					label: "Without DuploJS",
					badge: "Classic approach",
					files: [
						{
							id: "either-fetch-other",
							label: "index.ts",
							component: EitherFetchO,
						},
					],
				},
				with: {
					label: "With DuploJS",
					badge: "DuploJS approach",
					files: [
						{
							id: "either-fetch-duplojs",
							label: "index.ts",
							component: EitherFetchD,
						},
					],
				},
			},
			{
				id: "either-file",
				label: "File",
				description: "Make file operation errors visible and predictable.",
				benefits: [
					"Typed errors",
					"Explicit branches",
					"Safer IO",
				],
				without: {
					label: "Without DuploJS",
					badge: "Classic approach",
					files: [
						{
							id: "either-file-other",
							label: "index.ts",
							component: EitherFileO,
						},
					],
				},
				with: {
					label: "With DuploJS",
					badge: "DuploJS approach",
					files: [
						{
							id: "either-file-duplojs",
							label: "index.ts",
							component: EitherFileD,
						},
					],
				},
			},
			{
				id: "either-jwt",
				label: "JWT",
				description: "Handle JWT validation and decoding failures explicitly.",
				benefits: [
					"Explicit auth failures",
					"Typed validation path",
					"Predictable control flow",
				],
				without: {
					label: "Without DuploJS",
					badge: "Classic approach",
					files: [
						{
							id: "either-jwt-other",
							label: "index.ts",
							component: EitherJwtO,
						},
					],
				},
				with: {
					label: "With DuploJS",
					badge: "DuploJS approach",
					files: [
						{
							id: "either-jwt-duplojs",
							label: "index.ts",
							component: EitherJwtD,
						},
					],
				},
			},
		],
	},
	{
		id: "http",
		label: "HTTP flow",
		description: "Compare classic HTTP code with more structured DuploJS HTTP utilities.",
		examples: [
			{
				id: "http-client",
				label: "HTTP client",
				description: "Make client-side HTTP calls more explicit and predictable.",
				benefits: [
					"Typed contracts",
					"Predictable response handling",
					"Clear client flow",
				],
				without: {
					label: "Without DuploJS",
					badge: "Classic approach",
					files: [
						{
							id: "http-client-other",
							label: "index.ts",
							component: HttpClientO,
						},
					],
				},
				with: {
					label: "With DuploJS",
					badge: "DuploJS approach",
					files: [
						{
							id: "http-client-duplojs",
							label: "index.ts",
							component: HttpClientD,
						},
					],
				},
			},
			{
				id: "http-route",
				label: "HTTP route",
				description: "Show how route handling can become more explicit and structured.",
				benefits: [
					"Predictable handlers",
					"Explicit input flow",
					"Structured route logic",
				],
				without: {
					label: "Without DuploJS",
					badge: "Classic approach",
					files: [
						{
							id: "http-route-other",
							label: "index.ts",
							component: HttpRouteO,
						},
					],
				},
				with: {
					label: "With DuploJS",
					badge: "DuploJS approach",
					files: [
						{
							id: "http-route-duplojs",
							label: "index.ts",
							component: HttpRouteD,
						},
					],
				},
			},
		],
	},
	{
		id: "utils-function",
		label: "Utility functions",
		description: "Compare native JavaScript patterns with predictable functional utilities.",
		examples: [
			{
				id: "utils-array-min-element",
				label: "Array min element",
				description: "Find elements with clearer intent and safer behavior.",
				benefits: [
					"Readable intent",
					"Predictable utility",
					"Less boilerplate",
				],
				without: {
					label: "Without DuploJS",
					badge: "Classic approach",
					files: [
						{
							id: "utils-array-min-element-other",
							label: "index.ts",
							component: UFArrayMinElementO,
						},
					],
				},
				with: {
					label: "With DuploJS",
					badge: "DuploJS approach",
					files: [
						{
							id: "utils-array-min-element-duplojs",
							label: "index.ts",
							component: UFArrayMinElementD,
						},
					],
				},
			},
			{
				id: "utils-entries",
				label: "Entries",
				description: "Keep object entries manipulation clearer and better typed.",
				benefits: [
					"Better typing",
					"Readable transformation",
					"Less implicit behavior",
				],
				without: {
					label: "Without DuploJS",
					badge: "Classic approach",
					files: [
						{
							id: "utils-entries-other",
							label: "index.ts",
							component: UFEntriesO,
						},
					],
				},
				with: {
					label: "With DuploJS",
					badge: "DuploJS approach",
					files: [
						{
							id: "utils-entries-duplojs",
							label: "index.ts",
							component: UFEntriesD,
						},
					],
				},
			},
			{
				id: "utils-group-by",
				label: "Group by",
				description: "Group data with explicit transformation intent.",
				benefits: [
					"Pure transformation",
					"No hidden mutation",
					"Clear grouping intent",
				],
				without: {
					label: "Without DuploJS",
					badge: "Classic approach",
					files: [
						{
							id: "utils-group-by-other",
							label: "index.ts",
							component: UFGroupByO,
						},
					],
				},
				with: {
					label: "With DuploJS",
					badge: "DuploJS approach",
					files: [
						{
							id: "utils-group-by-duplojs",
							label: "index.ts",
							component: UFGroupByD,
						},
					],
				},
			},
			{
				id: "utils-map-tuple",
				label: "Map tuple",
				description: "Preserve tuple intent while transforming values.",
				benefits: [
					"Tuple-aware mapping",
					"Type-driven intent",
					"Predictable output",
				],
				without: {
					label: "Without DuploJS",
					badge: "Classic approach",
					files: [
						{
							id: "utils-map-tuple-other",
							label: "index.ts",
							component: UFMapTupleO,
						},
					],
				},
				with: {
					label: "With DuploJS",
					badge: "DuploJS approach",
					files: [
						{
							id: "utils-map-tuple-duplojs",
							label: "index.ts",
							component: UFMapTupleD,
						},
					],
				},
			},
			{
				id: "utils-reduce",
				label: "Reduce",
				description: "Make reductions easier to reason about.",
				benefits: [
					"Explicit accumulator",
					"Functional flow",
					"Predictable transformation",
				],
				without: {
					label: "Without DuploJS",
					badge: "Classic approach",
					files: [
						{
							id: "utils-reduce-other",
							label: "index.ts",
							component: UFReduceO,
						},
					],
				},
				with: {
					label: "With DuploJS",
					badge: "DuploJS approach",
					files: [
						{
							id: "utils-reduce-duplojs",
							label: "index.ts",
							component: UFReduceD,
						},
					],
				},
			},
		],
	},
	{
		id: "command",
		label: "Command pattern",
		description: "Compare command execution with and without DuploJS.",
		examples: [
			{
				id: "command-basic",
				label: "Command flow",
				description: "Show how command-style logic can become more explicit.",
				benefits: [
					"Explicit execution flow",
					"Readable intent",
					"Predictable behavior",
				],
				without: {
					label: "Without DuploJS",
					badge: "Classic approach",
					files: [
						{
							id: "command-other",
							label: "index.ts",
							component: CommandO,
						},
					],
				},
				with: {
					label: "With DuploJS",
					badge: "DuploJS approach",
					files: [
						{
							id: "command-duplojs",
							label: "index.ts",
							component: CommandD,
						},
					],
				},
			},
		],
	},
	{
		id: "form",
		label: "Form validation",
		description: "Compare manual form handling with a more explicit typed validation approach.",
		examples: [
			{
				id: "form-basic",
				label: "Form parsing",
				description: "Validate external form data before it reaches application logic.",
				benefits: [
					"Runtime validation",
					"Typed input",
					"Safer external data",
				],
				without: {
					label: "Without DuploJS",
					badge: "Classic approach",
					files: [
						{
							id: "form-other",
							label: "TheForm.vue",
							component: FormO,
						},
					],
				},
				with: {
					label: "With DuploJS",
					badge: "DuploJS approach",
					files: [
						{
							id: "form-duplojs",
							label: "TheForm.vue",
							component: FormD,
						},
						{
							id: "form-duplojs",
							label: "configForm.ts",
							component: FormCFD,
						},
					],
				},
			},
		],
	},
	{
		id: "clean",
		label: "Clean architecture",
		description: "Compare classic layered code with a more explicit and predictable DuploJS approach.",
		examples: [
			{
				id: "clean-domain",
				label: "Domain layer",
				description: "Show how business concepts can be expressed more explicitly.",
				benefits: [
					"Explicit business intent",
					"Readable domain rules",
					"Predictable modeling",
				],
				without: {
					label: "Without DuploJS",
					badge: "Classic approach",
					files: [
						{
							id: "clean-domain-other",
							label: "user.ts",
							component: CleanDomainO,
						},
					],
				},
				with: {
					label: "With DuploJS",
					badge: "DuploJS approach",
					files: [
						{
							id: "clean-domain-duplojs",
							label: "user.ts",
							component: CleanDomainD,
						},
					],
				},
			},
			{
				id: "clean-application",
				label: "Application layer",
				description: "Compare application flow organization and explicit use cases.",
				benefits: [
					"Clear use case flow",
					"Explicit inputs and outputs",
					"Better separation of concerns",
				],
				without: {
					label: "Without DuploJS",
					badge: "Classic approach",
					files: [
						{
							id: "clean-application-other",
							label: "application.ts",
							component: CleanApplicationO,
						},
					],
				},
				with: {
					label: "With DuploJS",
					badge: "DuploJS approach",
					files: [
						{
							id: "clean-application-duplojs",
							label: "application.ts",
							component: CleanApplicationD,
						},
					],
				},
			},
		],
	},
];
