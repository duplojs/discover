<script setup lang="ts">
import type { LandingHeaderContent } from "../types";

defineProps<{
	content: LandingHeaderContent;
}>();
</script>

<template>
	<header class="duplo-landing-header">
		<div class="duplo-landing-header__inner">
			<a
				class="duplo-landing-header__brand"
				href="/"
				aria-label="DuploJS"
			>
				<img
					class="duplo-landing-header__logo"
					src="/images/logo.svg"
					:alt="content.logoAlt"
				/>

				<span>DuploJS</span>
			</a>

			<nav
				class="duplo-landing-header__nav"
				aria-label="Main navigation"
			>
				<a
					v-for="item in content.nav"
					:key="item.label"
					:href="item.href"
				>
					{{ item.label }}
				</a>
			</nav>

			<nav
				class="duplo-landing-header__socials"
				aria-label="Social links"
			>
				<a
					v-for="item in content.socials"
					:key="item.label"
					:href="item.href"
					:aria-label="item.label"
					:title="item.label"
				>
					<span aria-hidden="true">{{ item.icon ?? item.label }}</span>
				</a>
			</nav>
		</div>
	</header>
</template>
