<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "../../composables/useI18n";
import { useTypewriter } from "../../composables/useTypewriter";
const { t } = useI18n();
const { text: installText } = useTypewriter();

const isoWallRef = ref<HTMLElement | null>(null);
const tooltipText = ref("");
const tooltipVisible = ref(false);
const tooltipX = ref(0);
const tooltipY = ref(0);
let eggActive = false;

function buildIsoBricks(container: HTMLElement) {
	const width = 88,
		height = 44,
		dim = 32;
	function iso(c: number, r: number, z: number) {
		return {
			x: (c - r) * width / 2,
			y: (((c + r) * height) / 2) - (z * dim),
		};
	}
	function pts(arr: {
		x: number;
		y: number;
	}[]) {
		return arr.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
	}
	const PALETTE = {
		yellow: {
			top: "#FACC15",
			east: "#B45309",
			south: "#78350F",
			text: "#0a0a0a",
			shine: "rgba(255,255,255,0.25)",
		},
		amber: {
			top: "#F59E0B",
			east: "#92400E",
			south: "#5a2d00",
			text: "#0a0a0a",
			shine: "rgba(255,255,255,0.18)",
		},
		feature: {
			top: "#2a2a32",
			east: "#17171d",
			south: "#101014",
			text: "#FACC15",
			shine: "rgba(250,204,21,0.08)",
		},
		normal: {
			top: "#1e1e24",
			east: "#111116",
			south: "#0c0c10",
			text: "#a1a1aa",
			shine: "rgba(255,255,255,0.03)",
		},
		muted: {
			top: "#161619",
			east: "#0e0e11",
			south: "#090909",
			text: "#52525b",
			shine: "rgba(255,255,255,0.02)",
		},
	};
	const PALETTE_LIGHT = {
		yellow: {
			top: "#FACC15",
			east: "#B45309",
			south: "#78350F",
			text: "#050505",
			shine: "rgba(255,255,255,0.25)",
		},
		amber: {
			top: "#F59E0B",
			east: "#92400E",
			south: "#5a2d00",
			text: "#050505",
			shine: "rgba(255,255,255,0.18)",
		},
		feature: {
			top: "#2a2a32",
			east: "#17171d",
			south: "#101014",
			text: "#FACC15",
			shine: "rgba(250,204,21,0.08)",
		},
		normal: {
			top: "#e2e2e8",
			east: "#c8c8d0",
			south: "#b0b0b8",
			text: "#3f3f46",
			shine: "rgba(0,0,0,0.04)",
		},
		muted: {
			top: "#d0d0d6",
			east: "#b8b8c0",
			south: "#a0a0a8",
			text: "#71717a",
			shine: "rgba(0,0,0,0.03)",
		},
	};
	type PaletteKey = keyof typeof PALETTE;
	const isLight = document.documentElement.dataset.theme === "light";
	const activePalette = isLight ? PALETTE_LIGHT : PALETTE;
	const BRICKS: {
		c: number;
		r: number;
		h: number;
		type: PaletteKey;
		label: string;
		url: string;
		badge: string;
	}[] = [
		{
			c: 0,
			r: 0,
			h: 3,
			type: "yellow",
			label: "HTTP",
			url: "http://http.duplojs.dev",
			badge: "@duplojs/http — Core package",
		},
		{
			c: 1,
			r: 0,
			h: 1,
			type: "feature",
			label: "TYPE",
			url: "https://github.com/duplojs/http",
			badge: "Typesafe end-to-end",
		},
		{
			c: 2,
			r: 0,
			h: 2,
			type: "feature",
			label: "100%",
			url: "https://github.com/duplojs/http",
			badge: "100% Type Coverage",
		},
		{
			c: 3,
			r: 0,
			h: 1,
			type: "normal",
			label: "v0.12",
			url: "https://github.com/duplojs/http/releases",
			badge: "Latest release",
		},
		{
			c: 4,
			r: 0,
			h: 1,
			type: "muted",
			label: "MIT",
			url: "https://github.com/duplojs/http/blob/main/LICENSE",
			badge: "MIT License",
		},
		{
			c: 0,
			r: 1,
			h: 1,
			type: "normal",
			label: "NODE",
			url: "https://nodejs.org",
			badge: "Node.js runtime",
		},
		{
			c: 1,
			r: 1,
			h: 2,
			type: "amber",
			label: "ZOD",
			url: "https://github.com/duplojs/zod-accelerator",
			badge: "@duplojs/zod-accelerator ★100",
		},
		{
			c: 2,
			r: 1,
			h: 1,
			type: "normal",
			label: "BUN",
			url: "https://bun.sh",
			badge: "Bun runtime support",
		},
		{
			c: 3,
			r: 1,
			h: 1,
			type: "normal",
			label: "DENO",
			url: "https://deno.com",
			badge: "Deno runtime support",
		},
		{
			c: 4,
			r: 1,
			h: 2,
			type: "feature",
			label: "DX",
			url: "https://github.com/duplojs/http",
			badge: "Developer Experience",
		},
		{
			c: 0,
			r: 2,
			h: 1,
			type: "muted",
			label: "UTIL",
			url: "https://utils.duplojs.dev",
			badge: "@duplojs/utils",
		},
		{
			c: 1,
			r: 2,
			h: 1,
			type: "muted",
			label: "Z→TS",
			url: "https://github.com/duplojs/zod-to-typescript",
			badge: "@duplojs/zod-to-typescript",
		},
		{
			c: 2,
			r: 2,
			h: 2,
			type: "feature",
			label: "MOD",
			url: "https://github.com/duplojs/http",
			badge: "Modular by design",
		},
		{
			c: 3,
			r: 2,
			h: 1,
			type: "muted",
			label: "JWT",
			url: "https://github.com/duplojs/json-web-token",
			badge: "@duplojs/json-web-token",
		},
		{
			c: 1,
			r: 3,
			h: 1,
			type: "muted",
			label: "SRV",
			url: "https://github.com/duplojs/server-utils",
			badge: "@duplojs/server-utils",
		},
		{
			c: 2,
			r: 3,
			h: 1,
			type: "muted",
			label: "DATA",
			url: "https://github.com/duplojs/data-parser-tools",
			badge: "@duplojs/data-parser-tools",
		},
		{
			c: 3,
			r: 3,
			h: 2,
			type: "feature",
			label: "API",
			url: "https://github.com/duplojs/http",
			badge: "Type-safe API contracts",
		},
	];
	BRICKS.sort((bkA, bkB) => ((bkA.c + bkA.r) - (bkB.c + bkB.r)) || (bkA.c - bkB.c));

	let minX = Infinity,
		minY = Infinity,
		maxX = -Infinity,
		maxY = -Infinity;
	BRICKS.forEach(({ c, r, h }) => {
		[iso(c, r, h), iso(c + 1, r, h), iso(c + 1, r + 1, h), iso(c, r + 1, h), iso(c + 1, r, 0), iso(c + 1, r + 1, 0), iso(c, r + 1, 0)]
			.forEach((p) => {
				minX = Math.min(minX, p.x);
				maxX = Math.max(maxX, p.x);
				minY = Math.min(minY, p.y);
				maxY = Math.max(maxY, p.y);
			});
	});

	const PAD = 24;
	const svgW = (maxX - minX) + (PAD * 2);
	const svgH = (maxY - minY) + (PAD * 2);
	const ox = -minX + PAD,
		oy = -minY + PAD;
	const NS = "http://www.w3.org/2000/svg";
	const svg = document.createElementNS(NS, "svg");
	svg.setAttribute("viewBox", `0 0 ${svgW.toFixed(0)} ${svgH.toFixed(0)}`);
	svg.setAttribute("class", "iso-svg");
	svg.style.overflow = "visible";

	function makePoly(points: {
		x: number;
		y: number;
	}[], fill: string, cls?: string) {
		const el = document.createElementNS(NS, "polygon");
		el.setAttribute("points", pts(points));
		el.setAttribute("fill", fill);
		if (cls) {
			el.setAttribute("class", cls);
		}
		return el;
	}
	function makeLine(p1: {
		x: number;
		y: number;
	}, p2: {
		x: number;
		y: number;
	}, stroke: string, sw: string) {
		const el = document.createElementNS(NS, "line");
		el.setAttribute("x1", p1.x.toFixed(1));
		el.setAttribute("y1", p1.y.toFixed(1));
		el.setAttribute("x2", p2.x.toFixed(1));
		el.setAttribute("y2", p2.y.toFixed(1));
		el.setAttribute("stroke", stroke);
		el.setAttribute("stroke-width", sw);
		el.setAttribute("stroke-linecap", "round");
		return el;
	}
	function makeText(content: string, x: number, y: number, opts: {
		fontSize: string;
		fill: string;
	}) {
		const el = document.createElementNS(NS, "text");
		el.setAttribute("x", x.toFixed(1));
		el.setAttribute("y", y.toFixed(1));
		el.setAttribute("text-anchor", "middle");
		el.setAttribute("dominant-baseline", "middle");
		el.setAttribute("font-family", "'IBM Plex Mono', monospace");
		el.setAttribute("font-size", opts.fontSize);
		el.setAttribute("font-weight", "600");
		el.setAttribute("letter-spacing", "0.5");
		el.setAttribute("fill", opts.fill);
		el.setAttribute("pointer-events", "none");
		el.setAttribute("user-select", "none");
		el.textContent = content;
		return el;
	}

	BRICKS.forEach(({ c, r, h, type, label, url, badge }) => {
		const col = activePalette[type];
		const stagger = ((c + r) * 0.055) + (Math.random() * 0.03);
		const grp = document.createElementNS(NS, "g");
		grp.setAttribute("class", `iso-brick iso-brick--${type}`);
		grp.style.animationDelay = `${stagger.toFixed(3)}s`;
		grp.setAttribute("data-badge", badge);
		grp.setAttribute("data-url", url);
		const toSvg = (p: {
			x: number;
			y: number;
		}) => ({
			x: p.x + ox,
			y: p.y + oy,
		});
		const ptA = toSvg(iso(c, r, h)),
			ptB = toSvg(iso(c + 1, r, h)),
			ptC = toSvg(iso(c + 1, r + 1, h)),
			ptD = toSvg(iso(c, r + 1, h));
		const ptB0 = toSvg(iso(c + 1, r, 0)),
			ptC0 = toSvg(iso(c + 1, r + 1, 0)),
			ptD0 = toSvg(iso(c, r + 1, 0));
		grp.appendChild(makePoly([ptB, ptC, ptC0, ptB0], col.east, "iso-east"));
		grp.appendChild(makeLine(ptB, ptB0, "rgba(255,255,255,0.06)", "0.6"));
		grp.appendChild(makePoly([ptD, ptC, ptC0, ptD0], col.south, "iso-south"));
		grp.appendChild(makePoly([ptA, ptB, ptC, ptD], col.top, "iso-top"));
		grp.appendChild(makeLine(ptA, ptB, col.shine, "1.2"));
		grp.appendChild(makeLine(ptA, ptD, col.shine, "0.8"));
		const outline = document.createElementNS(NS, "polygon");
		outline.setAttribute("points", pts([ptA, ptB, ptC, ptD]));
		outline.setAttribute("fill", "none");
		outline.setAttribute("stroke", type === "yellow" || type === "amber" ? "rgba(0,0,0,0.15)" : "rgba(255,255,255,0.04)");
		outline.setAttribute("stroke-width", "0.7");
		outline.setAttribute("pointer-events", "none");
		grp.appendChild(outline);
		const cx = (ptA.x + ptB.x + ptC.x + ptD.x) / 4,
			cy = (ptA.y + ptB.y + ptC.y + ptD.y) / 4;
		const fontSize = h >= 2 ? "8.5" : "7.5";
		const sc = h >= 2 ? 1.9 : 1.65;
		const textEl = makeText(label, 0, 0, {
			fontSize,
			fill: col.text,
		});
		textEl.setAttribute("transform", `translate(${cx.toFixed(1)},${cy.toFixed(1)}) matrix(1,0.5,-1,0.5,0,0) scale(${sc})`);
		grp.appendChild(textEl);
		svg.appendChild(grp);
	});

	const existing = container.querySelector("svg");
	if (existing) {
		existing.remove();
	}
	container.insertBefore(svg, container.firstChild);

	setTimeout(() => {
		svg.classList.add("iso-ready");
		container.classList.add("wall-settled");
	}, 1600);

	svg.addEventListener("pointerover", (e) => {
		const brick = (e.target as Element).closest(".iso-brick");
		if (!brick) {
			return;
		}
		tooltipText.value = brick.getAttribute("data-badge") || "";
		tooltipVisible.value = true;
	});
	svg.addEventListener("pointermove", (e) => {
		const me = e as PointerEvent;
		const rect = container.getBoundingClientRect();
		tooltipX.value = me.clientX - rect.left + 12;
		tooltipY.value = me.clientY - rect.top - 36;
	});
	svg.addEventListener("pointerout", (e) => {
		if (!(e.target as Element).closest(".iso-brick")) {
			tooltipVisible.value = false;
		}
	});
	svg.addEventListener("click", (e) => {
		const brick = (e.target as Element).closest(".iso-brick");
		const url = brick?.getAttribute("data-url");
		if (url) {
			window.open(url, "_blank", "noopener,noreferrer");
		}
	});
}

onMounted(() => {
	if (isoWallRef.value) {
		buildIsoBricks(isoWallRef.value);
	}

	// Easter egg
	function spawnBrick(idx: number, total: number) {
		const brick = document.createElement("img");
		brick.src = "/images/logo.png";
		brick.className = "easter-brick";
		brick.alt = "";
		brick.setAttribute("aria-hidden", "true");
		const brickX = (Math.random() * 88) + 4;
		const dur = ((Math.random() * 0.5) + 0.9).toFixed(2);
		const delay = (Math.random() * 0.1).toFixed(2);
		const spin = `${Math.random() > 0.5 ? "" : "-"}${Math.floor((Math.random() * 270) + 90)}deg`;
		const size = Math.floor((Math.random() * 14) + 28);
		brick.style.left = `${brickX}vw`;
		brick.style.width = `${size}px`;
		brick.style.height = `${size}px`;
		brick.style.animationDuration = `${dur}s`;
		brick.style.animationDelay = `${delay}s`;
		brick.style.setProperty("--spin", spin);
		document.body.appendChild(brick);
		brick.addEventListener("animationend", () => {
			brick.remove();
			if (idx === total - 1) {
				eggActive = false;
			}
		}, { once: true });
	}

	const logo = document.getElementById("navLogo");
	if (logo) {
		logo.addEventListener("click", (ev) => {
			ev.preventDefault();
			if (eggActive) {
				return;
			}
			eggActive = true;
			const count = 16;
			for (let i = 0; i < count; i++) {
				setTimeout(() => void spawnBrick(i, count), i * 55);
			}
		});
	}

	// Watch for theme changes to rebuild bricks
	const observer = new MutationObserver(() => {
		if (isoWallRef.value) {
			buildIsoBricks(isoWallRef.value);
		}
	});
	observer.observe(document.documentElement, {
		attributes: true,
		attributeFilter: ["data-theme"],
	});
});
</script>

<template>
	<section
		class="hero"
		id="hero"
		data-section="00"
	>
		<div class="hero__bg-grid" />

		<div class="hero__orb" />

		<div class="hero__inner">
			<div class="hero__content">
				<span class="label">{{ t.hero.label }}</span>

				<h1 class="hero__headline">
					{{ t.hero.headline1 }}<br />

					{{ t.hero.headline2 }} <span class="hero__accent">{{ t.hero.headline3 }}</span>
				</h1>

				<p class="hero__tagline">
					{{ t.hero.tagline1 }}<br />
					{{ t.hero.tagline2 }}
				</p>

				<div
					class="hero__install"
					:aria-label="t.hero.installLabel"
				>
					<span class="hero__install-prompt">$</span>
					<span
						class="hero__install-cmd"
						id="installCmd"
					>{{ installText }}</span>
					<span
						class="hero__install-cursor"
						aria-hidden="true"
					/>
				</div>

				<div class="hero__ctas">
					<a
						href="http://http.duplojs.dev"
						class="btn btn--primary"
						target="_blank"
						rel="noopener"
					>{{ t.hero.getStarted }}</a>

					<a
						href="https://github.com/duplojs/http"
						class="btn btn--secondary"
						target="_blank"
						rel="noopener"
					>
						<svg
							width="15"
							height="15"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
						>
							<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
						</svg>
						{{ t.hero.viewGithub }}
					</a>
				</div>

				<div class="hero__meta">
					<span class="hero__badge">Node.js</span>
					<span class="hero__badge">Bun</span>
					<span class="hero__badge">Deno</span>
					<span class="hero__sep">&middot;</span>
					<span class="hero__version">TypeScript-first</span>
				</div>
			</div>

			<div
				class="hero__wall"
				id="isoWall"
				ref="isoWallRef"
				aria-hidden="true"
			>
				<div
					class="iso-tooltip"
					id="isoTooltip"
					:class="{ visible: tooltipVisible }"
					:style="{ left: tooltipX + 'px', top: tooltipY + 'px' }"
				>
					{{ tooltipText }}
				</div>
			</div>
		</div>

		<div
			class="hero__scroll-hint"
			aria-hidden="true"
		>
			<span class="hero__scroll-label">{{ t.hero.scroll }}</span>

			<div class="hero__scroll-line" />
		</div>
	</section>
</template>
