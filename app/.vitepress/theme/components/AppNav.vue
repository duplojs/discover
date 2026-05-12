<script setup lang="ts">
import { useData } from "vitepress";
import { computed, onMounted, onUnmounted, ref } from "vue";
import { useI18n } from "../composables/useI18n";

const { t } = useI18n();
const { lang } = useData();

const scrolled = ref(false);
const menuOpen = ref(false);
const dropdownOpen = ref(false);
let hoverTimer: ReturnType<typeof setTimeout> | null = null;

function onScroll() {
	scrolled.value = window.scrollY > 24;
}

function toggleMenu() {
	menuOpen.value = !menuOpen.value;
	document.body.style.overflow = menuOpen.value ? "hidden" : "";
}

function closeMenu() {
	menuOpen.value = false;
	document.body.style.overflow = "";
}

function openDropdown() {
	if (hoverTimer) {
		clearTimeout(hoverTimer);
	}
	dropdownOpen.value = true;
}

function scheduleCloseDropdown() {
	hoverTimer = setTimeout(() => {
		dropdownOpen.value = false;
	}, 120);
}

function closeDropdown() {
	if (hoverTimer) {
		clearTimeout(hoverTimer);
	}
	dropdownOpen.value = false;
}

function onDocClick(e: MouseEvent) {
	const nav = document.getElementById("navDropdown");
	if (nav && !nav.contains(e.target as Node)) {
		closeDropdown();
	}
}

function onKeydown(e: KeyboardEvent) {
	if (e.key === "Escape") {
		closeMenu();
		closeDropdown();
	}
}

const isDark = ref(true);

function applyTheme(theme: string) {
	document.documentElement.dataset.theme = theme;
	isDark.value = theme === "dark";
}

function toggleTheme() {
	const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
	applyTheme(next);
	localStorage.setItem("duplojs-theme", next);
}

const langHref = computed(() => lang.value.startsWith("fr") ? "/" : "/fr/");

onMounted(() => {
	const saved = localStorage.getItem("duplojs-theme");
	const mq = window.matchMedia("(prefers-color-scheme: dark)");
	applyTheme(saved || (mq.matches ? "dark" : "light"));
	mq.addEventListener("change", (e) => {
		if (!localStorage.getItem("duplojs-theme")) {
			applyTheme(e.matches ? "dark" : "light");
		}
	});

	window.addEventListener("scroll", onScroll, { passive: true });
	document.addEventListener("click", onDocClick);
	document.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
	window.removeEventListener("scroll", onScroll);
	document.removeEventListener("click", onDocClick);
	document.removeEventListener("keydown", onKeydown);
	document.body.style.overflow = "";
});
</script>

<template>
	<nav
		class="nav"
		id="nav"
		:class="{ scrolled }"
	>
		<div class="nav__inner">
			<a
				href="/"
				class="nav__logo"
				id="navLogo"
			>
				<img
					src="/images/logo.png"
					alt="DuploJS logo"
					class="nav__logo-img"
					width="28"
					height="28"
				/>

				<span class="nav__logo-text">DuploJS</span>
			</a>

			<div
				class="nav__center"
				id="navLinks"
				:class="{ open: menuOpen }"
			>
				<div
					class="nav__dropdown"
					id="navDropdown"
					@mouseenter="openDropdown"
					@mouseleave="scheduleCloseDropdown"
				>
					<button
						class="nav__link nav__dropdown-trigger"
						id="dropdownTrigger"
						:aria-expanded="dropdownOpen"
						aria-haspopup="true"
					>
						{{ t.nav.packages }}
						<svg
							class="nav__chevron"
							width="12"
							height="12"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							aria-hidden="true"
						>
							<polyline points="6 9 12 15 18 9" />
						</svg>
					</button>

					<div
						class="nav__dropdown-panel"
						id="dropdownPanel"
						role="menu"
						:class="{ open: dropdownOpen }"
					>
						<div class="nav__dropdown-inner">
							<div class="nav__dropdown-section">
								<span class="nav__dropdown-label">{{ t.nav.core }}</span>

								<a
									href="http://http.duplojs.dev"
									class="nav__pkg-card"
									target="_blank"
									rel="noopener"
									role="menuitem"
								>
									<span class="nav__pkg-name">{{ t.nav.pkgs.http.name }}</span>
									<span class="nav__pkg-desc">{{ t.nav.pkgs.http.desc }}</span>
								</a>

								<a
									href="https://utils.duplojs.dev"
									class="nav__pkg-card"
									target="_blank"
									rel="noopener"
									role="menuitem"
								>
									<span class="nav__pkg-name">{{ t.nav.pkgs.utils.name }}</span>
									<span class="nav__pkg-desc">{{ t.nav.pkgs.utils.desc }}</span>
								</a>

								<a
									href="https://github.com/duplojs/server-utils"
									class="nav__pkg-card"
									target="_blank"
									rel="noopener"
									role="menuitem"
								>
									<span class="nav__pkg-name">{{ t.nav.pkgs.serverUtils.name }}</span>
									<span class="nav__pkg-desc">{{ t.nav.pkgs.serverUtils.desc }}</span>
								</a>
							</div>

							<div class="nav__dropdown-section">
								<span class="nav__dropdown-label">{{ t.nav.tooling }}</span>

								<a
									href="https://github.com/duplojs/zod-accelerator"
									class="nav__pkg-card"
									target="_blank"
									rel="noopener"
									role="menuitem"
								>
									<span class="nav__pkg-name">{{ t.nav.pkgs.zodAccelerator.name }}</span>
									<span class="nav__pkg-desc">{{ t.nav.pkgs.zodAccelerator.desc }}</span>
								</a>

								<a
									href="https://github.com/duplojs/playwright"
									class="nav__pkg-card"
									target="_blank"
									rel="noopener"
									role="menuitem"
								>
									<span class="nav__pkg-name">{{ t.nav.pkgs.playwright.name }}</span>
									<span class="nav__pkg-desc">{{ t.nav.pkgs.playwright.desc }}</span>
								</a>

								<a
									href="https://github.com/duplojs/json-web-token"
									class="nav__pkg-card"
									target="_blank"
									rel="noopener"
									role="menuitem"
								>
									<span class="nav__pkg-name">{{ t.nav.pkgs.jwt.name }}</span>
									<span class="nav__pkg-desc">{{ t.nav.pkgs.jwt.desc }}</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<a
					href="http://http.duplojs.dev/en/v0/guide/"
					class="nav__link"
					target="_blank"
					rel="noopener"
					@click="closeMenu"
				>{{ t.nav.docs }}</a>

				<a
					href="https://github.com/duplojs"
					class="nav__link"
					target="_blank"
					rel="noopener"
					@click="closeMenu"
				>{{ t.nav.github }}</a>
			</div>

			<div class="nav__actions">
				<button
					class="nav__theme-toggle"
					id="themeToggle"
					:aria-label="t.nav.toggleTheme"
					@click="toggleTheme"
				>
					<svg
						class="icon-moon"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
					</svg>

					<svg
						class="icon-sun"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						aria-hidden="true"
					>
						<circle
							cx="12"
							cy="12"
							r="5"
						/>

						<line
							x1="12"
							y1="1"
							x2="12"
							y2="3"
						/>

						<line
							x1="12"
							y1="21"
							x2="12"
							y2="23"
						/>

						<line
							x1="4.22"
							y1="4.22"
							x2="5.64"
							y2="5.64"
						/>

						<line
							x1="18.36"
							y1="18.36"
							x2="19.78"
							y2="19.78"
						/>

						<line
							x1="1"
							y1="12"
							x2="3"
							y2="12"
						/>

						<line
							x1="21"
							y1="12"
							x2="23"
							y2="12"
						/>

						<line
							x1="4.22"
							y1="19.78"
							x2="5.64"
							y2="18.36"
						/>

						<line
							x1="18.36"
							y1="5.64"
							x2="19.78"
							y2="4.22"
						/>
					</svg>
				</button>

				<a
					href="https://discord.gg/duplojs"
					class="nav__icon-link"
					target="_blank"
					rel="noopener"
					aria-label="Discord"
				>
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					>
						<path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.001.022.015.043.033.055a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
					</svg>
				</a>

				<a
					href="https://github.com/duplojs"
					class="nav__icon-link"
					target="_blank"
					rel="noopener"
					aria-label="GitHub"
				>
					<svg
						width="18"
						height="18"
						viewBox="0 0 24 24"
						fill="currentColor"
						aria-hidden="true"
					>
						<path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
					</svg>
				</a>

				<a
					:href="langHref"
					class="nav__icon-link nav__lang-switch"
					:aria-label="lang.startsWith('fr') ? 'Switch to English' : 'Passer en français'"
				>
					<span class="nav__lang-label">{{ lang.startsWith('fr') ? 'EN' : 'FR' }}</span>
				</a>

				<a
					href="http://http.duplojs.dev/en/v0/guide/"
					class="btn btn--primary btn--sm nav__cta"
					target="_blank"
					rel="noopener"
				>{{ t.nav.getStarted }}</a>
			</div>

			<button
				class="nav__hamburger"
				id="hamburger"
				:aria-label="t.nav.toggleMenu"
				:aria-expanded="menuOpen"
				:class="{ open: menuOpen }"
				@click="toggleMenu"
			>
				<span />
				<span />
				<span />
			</button>
		</div>
	</nav>
</template>

<style scoped>
.nav__lang-switch {
  position: relative;
}
.nav__lang-label {
  font-family: 'Fragment Mono', monospace;
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  line-height: 1;
}
.nav__lang-switch::after {
  content: '';
  position: absolute;
  bottom: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 1px;
  background: currentColor;
  opacity: 0;
  transition: opacity var(--transition, 0.18s ease);
}
.nav__lang-switch:hover::after {
  opacity: 0.5;
}
</style>
