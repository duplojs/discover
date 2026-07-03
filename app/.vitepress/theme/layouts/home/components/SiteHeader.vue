<script setup lang="ts">
const navItems = [
	{
		label: "Packages",
		href: "#packages",
	},
	{
		label: "Compare",
		href: "#code-versus",
	},
	{
		label: "Architecture",
		href: "#clean-code-layers",
	},
	{
		label: "Community",
		href: "#community",
	},
];
</script>

<template>
	<header class="site-header">
		<div class="site-header__inner">
			<a
				class="site-header__brand"
				href="/"
				aria-label="DuploJS home"
			>
				<img
					class="site-header__logo"
					src="/images/logo.svg"
					alt=""
					width="42"
					height="39"
				/>

				<span class="site-header__name">DuploJS</span>
			</a>

			<nav
				class="site-header__nav"
				aria-label="Primary navigation"
			>
				<a
					v-for="item in navItems"
					:key="item.href"
					class="site-header__link"
					:href="item.href"
				>
					{{ item.label }}
				</a>
			</nav>

			<a
				class="site-header__github"
				href="https://github.com/duplojs/discover"
				target="_blank"
				rel="noreferrer"
			>
				<svg
					class="site-header__github-icon"
					viewBox="0 0 24 24"
					aria-hidden="true"
				>
					<path d="M12 2C6.48 2 2 6.58 2 12.22c0 4.51 2.87 8.34 6.84 9.69.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.9 1.56 2.35 1.11 2.92.85.09-.66.35-1.11.63-1.37-2.22-.26-4.55-1.14-4.55-5.05 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.37 9.37 0 0 1 12 6.94c.85 0 1.7.12 2.5.34 1.9-1.32 2.74-1.05 2.74-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.04.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z" />
				</svg>

				<span>GitHub</span>
			</a>
		</div>
	</header>
</template>

<style scoped>
.site-header {
	top: 0;
	z-index: 50;
	border-bottom: 1px solid var(--color-border-subtle);
	background: var(--color-bg-header);
	backdrop-filter: blur(18px);
	box-shadow: 0 12px 42px rgba(0, 0, 0, 0.24);
}

.site-header__inner {
	display: flex;
	align-items: center;
	width: min(100%, 1480px);
	min-height: 86px;
	margin: 0 auto;
	padding: 0 clamp(20px, 4vw, 64px);
}

.site-header__brand {
	display: inline-flex;
	align-items: center;
	gap: 14px;
	min-width: max-content;
	color: var(--color-text-primary);
	font-weight: 760;
	font-size: clamp(1.35rem, 1.1rem + 0.8vw, 2rem);
	letter-spacing: 0;
	text-decoration: none;
}

.site-header__brand:hover {
	color: var(--color-text-primary);
}

.site-header__logo {
	width: clamp(42px, 3.6vw, 58px);
	height: auto;
	filter: drop-shadow(0 0 18px rgba(247, 203, 61, 0.22));
}

.site-header__name {
	line-height: 1;
}

.site-header__nav {
	display: flex;
	align-items: center;
	gap: clamp(22px, 3vw, 48px);
	margin-left: auto;
}

.site-header__link {
	position: relative;
	color: var(--color-text-secondary);
	font-weight: 520;
	font-size: clamp(0.95rem, 0.9rem + 0.16vw, 1.08rem);
	line-height: 1;
	text-decoration: none;
	transition:
		color 160ms ease,
		text-shadow 160ms ease;
}

.site-header__link::after {
	position: absolute;
	right: 0;
	bottom: -11px;
	left: 0;
	height: 1px;
	content: "";
	background: var(--color-brand-primary);
	opacity: 0;
	transform: scaleX(0.45);
	transition:
		opacity 160ms ease,
		transform 160ms ease;
}

.site-header__link:hover,
.site-header__link:focus-visible {
	color: var(--color-text-primary);
	text-shadow: var(--glow-brand-sm);
}

.site-header__link:hover::after,
.site-header__link:focus-visible::after {
	opacity: 0.86;
	transform: scaleX(1);
}

.site-header__github {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 10px;
	min-height: 48px;
	margin-left: clamp(26px, 3.4vw, 56px);
	padding: 0 22px;
	border: 1px solid var(--button-secondary-border);
	border-radius: 8px;
	background: var(--button-secondary-bg);
	color: var(--button-secondary-text);
	font-weight: 760;
	font-size: 1rem;
	line-height: 1;
	text-decoration: none;
	transition:
		background-color 160ms ease,
		box-shadow 160ms ease,
		transform 160ms ease;
}

.site-header__github:hover,
.site-header__github:focus-visible {
	border-color: var(--color-border-strong);
	background: var(--button-secondary-bg-hover);
	color: var(--button-secondary-text);
	transform: translateY(-1px);
}

.site-header__github-icon {
	width: 20px;
	height: 20px;
	fill: currentColor;
}

@media (max-width: 880px) {
	.site-header__inner {
		min-height: 72px;
		padding: 0 20px;
	}

	.site-header__nav {
		display: none;
	}

	.site-header__github {
		min-height: 44px;
		margin-left: auto;
		padding: 0 16px;
	}
}

@media (max-width: 520px) {
	.site-header__brand {
		gap: 10px;
	}

	.site-header__logo {
		width: 38px;
	}

	.site-header__name {
		font-size: 1.45rem;
	}
}
</style>
