<script setup lang="ts">
import { computed } from "vue";
import type { LandingPackage } from "../types";

interface WallBrick {
	span: number;
	tone?: "light" | "dark";
	packageIndex?: number;
	active?: boolean;
	mascot?: boolean;
}

interface WallBrickView extends WallBrick {
	key: string;
	package?: LandingPackage;
}

const props = defineProps<{
	packages: LandingPackage[];
}>();

const wallRows: WallBrick[][] = [
	[
		{
			span: 2,
		},
		{
			span: 3,
		},
		{
			span: 2,
			tone: "dark",
		},
		{
			span: 3,
		},
	],
	[
		{
			span: 3,
		},
		{
			span: 3,
			packageIndex: 0,
		},
		{
			span: 2,
		},
		{
			span: 2,
		},
	],
	[
		{
			span: 2,
		},
		{
			span: 2,
			tone: "dark",
		},
		{
			span: 3,
			packageIndex: 1,
		},
		{
			span: 3,
		},
	],
	[
		{
			span: 3,
		},
		{
			span: 3,
			packageIndex: 2,
			active: true,
		},
		{
			span: 2,
		},
		{
			span: 2,
			tone: "dark",
		},
	],
	[
		{
			span: 2,
		},
		{
			span: 2,
			mascot: true,
			tone: "dark",
		},
		{
			span: 3,
			packageIndex: 3,
		},
		{
			span: 3,
		},
	],
	[
		{
			span: 3,
		},
		{
			span: 2,
		},
		{
			span: 3,
			packageIndex: 4,
		},
		{
			span: 2,
		},
	],
	[
		{
			span: 2,
			tone: "dark",
		},
		{
			span: 3,
		},
		{
			span: 4,
			packageIndex: 5,
			tone: "dark",
		},
		{
			span: 1,
		},
	],
];

const wallRowsView = computed<WallBrickView[][]>(() => wallRows.map(
	(row, rowIndex) => row.map(
		(brick, brickIndex) => ({
			...brick,
			key: `${rowIndex}-${brickIndex}`,
			package: brick.packageIndex !== undefined
				? props.packages[brick.packageIndex]
				: undefined,
		}),
	),
));

const activePackage = computed(() => wallRowsView.value
	.flat()
	.find((brick) => brick.active)
	?.package);
</script>

<template>
	<aside
		class="duplo-hero-wall"
		aria-label="DuploJS package wall"
	>
		<div class="duplo-hero-wall__scene">
			<div
				class="duplo-hero-wall__chain"
				aria-hidden="true"
			/>

			<div
				class="duplo-hero-wall__ball"
				aria-hidden="true"
			>
				<span />
			</div>

			<div
				class="duplo-hero-wall__debris"
				aria-hidden="true"
			>
				<span />

				<span />

				<span />

				<span />
			</div>

			<div class="duplo-hero-wall__courses">
				<div
					v-for="(row, rowIndex) in wallRowsView"
					:key="rowIndex"
					class="duplo-hero-wall__row"
					:class="{
						'duplo-hero-wall__row--offset': rowIndex % 2 === 1,
					}"
				>
					<div
						v-for="brick in row"
						:key="brick.key"
						class="duplo-hero-wall__brick"
						:class="{
							'duplo-hero-wall__brick--dark': brick.tone === 'dark',
							'duplo-hero-wall__brick--package': brick.package,
							'duplo-hero-wall__brick--active': brick.active,
							'duplo-hero-wall__brick--mascot': brick.mascot,
						}"
						:style="{ gridColumn: `span ${brick.span}` }"
					>
						<template v-if="brick.mascot">
							<img
								src="/images/logo.svg"
								alt="DuploJS mascot brick"
							/>
						</template>

						<template v-else-if="brick.package">
							<span class="duplo-hero-wall__package-dot" />

							<span class="duplo-hero-wall__package-label">
								{{ brick.package.label }}
							</span>

							<span class="duplo-hero-wall__package-name">
								{{ brick.package.name }}
							</span>
						</template>
					</div>
				</div>

				<div
					v-if="activePackage"
					class="duplo-hero-wall__card"
				>
					<span class="duplo-hero-wall__card-icon">
						{{ activePackage.label.slice(0, 1) }}
					</span>

					<strong>{{ activePackage.label }}</strong>

					<p>{{ activePackage.description }}</p>
				</div>
			</div>
		</div>
	</aside>
</template>
