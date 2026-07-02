<script setup lang="ts">
const promiseCards = [
	{
		title: "Pure transformations",
		description: "Avoid hidden mutations and make data transformations easier to reason about.",
		icon: "transform",
	},
	{
		title: "Runtime guarantees",
		description: "Parse, validate and secure external data where TypeScript alone cannot protect you.",
		icon: "shield",
	},
	{
		title: "Type-driven intent",
		description: "Use types to express intent, guide implementation and validate that code does what it promises.",
		icon: "code",
	},
];
</script>

<template>
	<section
		id="problem-promise"
		class="problem-promise"
	>
		<div class="problem-promise__inner">
			<div class="problem-promise__intro">
				<div class="problem-promise__copy">
					<p class="problem-promise__eyebrow">
						<span aria-hidden="true" />

						Why DuploJS exists
					</p>

					<h2 class="problem-promise__title">
						Robustness needs more than types
					</h2>

					<p class="problem-promise__description">
						TypeScript gives structure to JavaScript, but predictable software also requires pure transformations, explicit contracts, runtime validation and composable patterns. DuploJS brings these missing bricks into one coherent ecosystem.
					</p>
				</div>

				<div
					class="problem-promise__visual"
					aria-hidden="true"
				>
					<img src="/images/problemPromise.svg" />
				</div>
			</div>

			<div class="problem-promise__cards">
				<article
					v-for="card in promiseCards"
					:key="card.title"
					class="problem-promise__card"
				>
					<span
						class="problem-promise__card-icon"
						aria-hidden="true"
					>
						<svg
							v-if="card.icon === 'transform'"
							viewBox="0 0 24 24"
							focusable="false"
						>
							<path d="M3 7h11" />

							<path d="m11 4 3 3-3 3" />

							<path d="M4 17h6" />

							<path d="M14 17h7" />

							<path d="m18 14 3 3-3 3" />

							<path d="M7 11c1.2 3.4 3.5 5.3 7 5.8" />

							<path d="M17 7c-1.3 1.8-2.8 3-4.6 3.7" />
						</svg>

						<svg
							v-else-if="card.icon === 'shield'"
							viewBox="0 0 24 24"
							focusable="false"
						>
							<path d="M12 3 5 6v5.2c0 4.5 2.9 8.5 7 9.8 4.1-1.3 7-5.3 7-9.8V6l-7-3Z" />

							<path d="m8.8 12 2.1 2.1 4.6-4.8" />
						</svg>

						<svg
							v-else
							viewBox="0 0 24 24"
							focusable="false"
						>
							<path d="M4 5h16v14H4z" />

							<path d="m9 10-2 2 2 2" />

							<path d="m15 10 2 2-2 2" />

							<path d="M11.5 16 13 8" />
						</svg>
					</span>

					<div class="problem-promise__card-copy">
						<h3>{{ card.title }}</h3>

						<p>{{ card.description }}</p>
					</div>

					<span
						class="problem-promise__card-arrow"
						aria-hidden="true"
					>
						&rarr;
					</span>
				</article>
			</div>
		</div>
	</section>
</template>

<style scoped>
.problem-promise {
	--section-light-bg: #F7F4EA;
	--section-light-bg-soft: #FFFDF5;
	--section-light-surface: #FFFFFF;
	--section-light-surface-warm: #FBF8EF;
	--section-light-text-primary: #111111;
	--section-light-text-secondary: #4B463D;
	--section-light-text-muted: #7A7367;
	--section-light-border: rgba(17, 17, 17, 0.10);
	--section-light-border-strong: rgba(17, 17, 17, 0.16);
	--section-light-brand: #E4AF29;
	--section-light-brand-strong: #BD8E20;
	--section-light-brand-soft: rgba(247, 203, 61, 0.18);
	--section-light-card-shadow: 0 24px 70px rgba(17, 17, 17, 0.08);

	position: relative;
	z-index: 2;
	overflow: hidden;
	margin-top: -88px;
	padding: 132px clamp(20px, 4vw, 64px) 92px;
	border-radius: 72px 72px 0 0;
	background:
		radial-gradient(circle at 50% 0%, rgba(247, 203, 61, 0.14), transparent 32%),
		radial-gradient(circle at 77% 25%, rgba(228, 175, 41, 0.14), transparent 30%),
		linear-gradient(180deg, var(--section-light-bg-soft) 0%, var(--section-light-bg) 100%);
	box-shadow: 0 -32px 90px rgba(0, 0, 0, 0.24);
	color: var(--section-light-text-primary);
}

.problem-promise::before {
	position: absolute;
	top: 0;
	left: 50%;
	width: min(640px, 64%);
	height: 1px;
	transform: translateX(-50%);
	pointer-events: none;
	content: "";
	background: linear-gradient(90deg, transparent, rgba(247, 203, 61, 0.65), transparent);
}

.problem-promise::after {
	position: absolute;
	inset: 0;
	pointer-events: none;
	content: "";
	background-image:
		linear-gradient(rgba(17, 17, 17, 0.035) 1px, transparent 1px),
		linear-gradient(90deg, rgba(17, 17, 17, 0.035) 1px, transparent 1px),
		radial-gradient(circle at 12% 20%, rgba(255, 255, 255, 0.74), transparent 28%),
		radial-gradient(circle at 90% 92%, rgba(255, 255, 255, 0.5), transparent 30%);
	background-position: center top;
	background-size: 72px 72px;
	mask-image: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.45) 22%, transparent 76%);
}

.problem-promise__inner {
	position: relative;
	z-index: 1;
	width: min(100%, 1480px);
	margin: 0 auto;
}

.problem-promise__intro {
	display: grid;
	grid-template-columns: minmax(0, 0.92fr) minmax(420px, 0.88fr);
	align-items: center;
	gap: clamp(48px, 7vw, 112px);
}

.problem-promise__copy {
	max-width: 710px;
}

.problem-promise__eyebrow {
	display: inline-flex;
	align-items: center;
	gap: 14px;
	margin: 0 0 28px;
	color: var(--section-light-brand);
	font-weight: 820;
	font-size: 0.93rem;
	line-height: 1.2;
	text-transform: uppercase;
}

.problem-promise__eyebrow span {
	display: block;
	width: 2px;
	height: 28px;
	background: var(--section-light-brand);
	box-shadow: 0 0 18px rgba(228, 175, 41, 0.24);
}

.problem-promise__title {
	max-width: 720px;
	margin: 0;
	color: var(--section-light-text-primary);
	font-weight: 840;
	font-size: 4.2rem;
	line-height: 1.03;
	letter-spacing: 0;
	text-wrap: balance;
}

.problem-promise__title::after {
	display: block;
	width: 168px;
	height: 7px;
	margin-top: 8px;
	border-radius: 999px;
	content: "";
	background: var(--section-light-brand);
	transform: rotate(-2deg);
	transform-origin: left center;
}

.problem-promise__description {
	max-width: 650px;
	margin: 28px 0 0;
	color: var(--section-light-text-secondary);
	font-size: 1.22rem;
	line-height: 1.6;
}

.problem-promise__description strong {
	color: var(--section-light-text-primary);
}

.problem-promise__visual {
	position: relative;
	min-height: 390px;
}

.problem-promise__blueprint {
	position: relative;
	z-index: 1;
	display: block;
	width: 100%;
	height: auto;
	overflow: visible;
}

.problem-promise__blueprint-grid path,
.problem-promise__blueprint-footprints path {
	fill: none;
	stroke: url("#problem-promise-grid-fade");
	stroke-width: 1.15;
	vector-effect: non-scaling-stroke;
}

.problem-promise__blueprint-grid path {
	opacity: 0.62;
}

.problem-promise__blueprint-footprints path {
	stroke: rgba(228, 175, 41, 0.42);
	stroke-width: 1.25;
	opacity: 0.86;
}

.problem-promise__brick-top,
.problem-promise__brick-side,
.problem-promise__stud {
	stroke-linejoin: round;
	vector-effect: non-scaling-stroke;
}

.problem-promise__brick-top--yellow {
	fill: url("#problem-promise-brick-yellow");
	stroke: rgba(122, 86, 12, 0.3);
}

.problem-promise__brick-side {
	fill: #E4AF29;
	stroke: rgba(122, 86, 12, 0.32);
}

.problem-promise__brick-side--dark {
	fill: #C9951E;
}

.problem-promise__brick-top--white,
.problem-promise__brick-side--white {
	fill: url("#problem-promise-brick-white");
	stroke: rgba(17, 17, 17, 0.14);
}

.problem-promise__brick-side--white-dark {
	fill: #DDD8CB;
	stroke: rgba(17, 17, 17, 0.16);
}

.problem-promise__stud {
	fill: #FFFFFF;
	stroke: rgba(17, 17, 17, 0.15);
	filter: drop-shadow(0 8px 8px rgba(17, 17, 17, 0.13));
}

.problem-promise__stud--yellow {
	fill: #F7CB3D;
	stroke: rgba(122, 86, 12, 0.28);
	filter: drop-shadow(0 8px 8px rgba(122, 86, 12, 0.18));
}

.problem-promise__spark {
	fill: #F7CB3D;
	filter: drop-shadow(0 0 10px rgba(228, 175, 41, 0.7));
}

.problem-promise__spark--two {
	opacity: 0.8;
}

.problem-promise__cards {
	display: grid;
	grid-template-columns: repeat(3, minmax(0, 1fr));
	gap: 28px;
	margin-top: 54px;
}

.problem-promise__card {
	position: relative;
	display: grid;
	grid-template-columns: auto 1fr;
	gap: 24px;
	min-height: 222px;
	padding: 28px 28px 24px;
	overflow: hidden;
	border: 1px solid var(--section-light-border);
	border-radius: 8px;
	background:
		linear-gradient(180deg, rgba(255, 255, 255, 0.92), rgba(251, 248, 239, 0.78)),
		var(--section-light-surface);
	box-shadow: 0 18px 48px rgba(17, 17, 17, 0.045);
	transition:
		border-color 180ms ease,
		box-shadow 180ms ease,
		transform 180ms ease;
}

.problem-promise__card::before {
	position: absolute;
	inset: 0;
	pointer-events: none;
	content: "";
	background: linear-gradient(135deg, rgba(247, 203, 61, 0.12), transparent 38%);
	opacity: 0;
	transition: opacity 180ms ease;
}

.problem-promise__card:hover,
.problem-promise__card:focus-within {
	border-color: rgba(228, 175, 41, 0.48);
	box-shadow: var(--section-light-card-shadow);
	transform: translateY(-4px);
}

.problem-promise__card:hover::before,
.problem-promise__card:focus-within::before {
	opacity: 1;
}

.problem-promise__card-icon {
	position: relative;
	z-index: 1;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 76px;
	height: 76px;
	border: 1px solid rgba(228, 175, 41, 0.12);
	border-radius: 8px;
	background: var(--section-light-brand-soft);
	color: var(--section-light-brand);
	box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.64);
}

.problem-promise__card-icon svg {
	width: 36px;
	height: 36px;
	fill: none;
	stroke: currentColor;
	stroke-linecap: round;
	stroke-linejoin: round;
	stroke-width: 1.8;
}

.problem-promise__card-copy {
	position: relative;
	z-index: 1;
	min-width: 0;
}

.problem-promise__card-copy h3 {
	max-width: 250px;
	margin: 4px 0 0;
	color: var(--section-light-text-primary);
	font-weight: 820;
	font-size: 1.42rem;
	line-height: 1.22;
	letter-spacing: 0;
}

.problem-promise__card-copy p {
	max-width: 330px;
	margin: 18px 0 0;
	color: var(--section-light-text-secondary);
	font-size: 1.02rem;
	line-height: 1.55;
}

.problem-promise__card-arrow {
	position: absolute;
	right: 28px;
	bottom: 22px;
	color: var(--section-light-brand);
	font-size: 1.65rem;
	line-height: 1;
	transition:
		color 180ms ease,
		transform 180ms ease;
}

.problem-promise__card:hover .problem-promise__card-arrow,
.problem-promise__card:focus-within .problem-promise__card-arrow {
	color: var(--section-light-brand-strong);
	transform: translateX(4px);
}

@media (max-width: 1180px) {
	.problem-promise {
		margin-top: -64px;
		padding-top: 104px;
		border-radius: 56px 56px 0 0;
	}

	.problem-promise__intro {
		grid-template-columns: 1fr;
		gap: 32px;
	}

	.problem-promise__copy {
		max-width: 820px;
	}

	.problem-promise__visual {
		width: min(720px, 100%);
		min-height: 320px;
		margin: 0 auto;
	}

	.problem-promise__cards {
		grid-template-columns: 1fr;
		gap: 18px;
	}

	.problem-promise__card {
		min-height: 188px;
	}
}

@media (max-width: 720px) {
	.problem-promise {
		margin-top: -40px;
		padding: 74px 20px 72px;
		border-radius: 40px 40px 0 0;
	}

	.problem-promise__eyebrow {
		margin-bottom: 20px;
		font-size: 0.84rem;
	}

	.problem-promise__title {
		font-size: 3rem;
		line-height: 1.06;
	}

	.problem-promise__title::after {
		width: 132px;
		height: 6px;
	}

	.problem-promise__description {
		margin-top: 24px;
		font-size: 1.05rem;
	}

	.problem-promise__visual {
		min-height: 230px;
		margin-top: 8px;
	}

	.problem-promise__cards {
		margin-top: 34px;
	}

	.problem-promise__card {
		grid-template-columns: 1fr;
		gap: 18px;
		min-height: 0;
		padding: 24px;
	}

	.problem-promise__card-icon {
		width: 64px;
		height: 64px;
	}

	.problem-promise__card-icon svg {
		width: 31px;
		height: 31px;
	}

	.problem-promise__card-copy h3 {
		max-width: none;
		font-size: 1.28rem;
	}

	.problem-promise__card-copy p {
		max-width: none;
		margin-top: 12px;
		padding-right: 24px;
		font-size: 0.98rem;
	}
}

@media (max-width: 460px) {
	.problem-promise__title {
		font-size: 2.45rem;
	}

	.problem-promise__visual {
		min-height: 190px;
	}
}
</style>
