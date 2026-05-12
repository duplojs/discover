<script setup lang="ts">
import { onMounted } from "vue";
import { useI18n } from "../../composables/useI18n";
import { useMagneticCard } from "../../composables/useMagneticCard";
const { t } = useI18n();
useMagneticCard(".eco-card");

onMounted(() => {
	document.querySelectorAll<HTMLElement>(".eco-card__copy").forEach((btn) => {
		btn.addEventListener("click", async(e) => {
			e.stopPropagation();
			const strip = btn.closest<HTMLElement>(".eco-card__install");
			const pkg = strip?.dataset.pkg;
			if (!pkg) {
				return;
			}
			try {
				await navigator.clipboard.writeText(`npm i ${pkg}`);
			} catch {
				const ta = document.createElement("textarea");
				ta.value = `npm i ${pkg}`;
				ta.style.cssText = "position:fixed;opacity:0";
				document.body.appendChild(ta);
				ta.select();
				document.execCommand("copy");
				ta.remove();
			}
			btn.classList.add("eco-card__copy--copied");
			setTimeout(() => void btn.classList.remove("eco-card__copy--copied"), 1800);
		});
	});
});

const copyIconSvg = "<svg class=\"eco-card__copy-icon\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"9\" y=\"9\" width=\"13\" height=\"13\" rx=\"2\" ry=\"2\"/><path d=\"M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1\"/></svg><svg class=\"eco-card__copy-check\" width=\"12\" height=\"12\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg>";

const docSvg = "<svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z\"/><polyline points=\"14 2 14 8 20 8\"/></svg>";
const ghSvg = "<svg width=\"13\" height=\"13\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z\"/></svg>";
</script>

<template>
	<section
		class="section ecosystem"
		id="ecosystem"
		data-section="05"
	>
		<div class="container">
			<div class="section__header reveal">
				<span class="label">{{ t.ecosystem.label }}</span>

				<h2 class="section__title">
					{{ t.ecosystem.title }}
				</h2>

				<p class="section__subtitle">
					{{ t.ecosystem.subtitle }}
				</p>
			</div>

			<!-- Core packages -->
			<div class="eco-group">
				<div class="eco-group__label">
					{{ t.ecosystem.coreLabel }}
				</div>

				<div class="eco-grid eco-grid--featured">
					<div class="eco-card eco-card--featured reveal">
						<div class="eco-card__top">
							<a
								href="http://http.duplojs.dev"
								class="eco-card__pkg"
								target="_blank"
								rel="noopener"
							>@duplojs/http</a>

							<div class="eco-card__actions">
								<a
									href="http://http.duplojs.dev"
									class="eco-icon-link"
									target="_blank"
									rel="noopener"
									aria-label="Documentation"
									v-html="docSvg"
								/>

								<a
									href="https://github.com/duplojs/http"
									class="eco-icon-link"
									target="_blank"
									rel="noopener"
									aria-label="GitHub"
									v-html="ghSvg"
								/>
							</div>
						</div>

						<p class="eco-card__desc">
							{{ t.ecosystem.httpDesc }}
						</p>

						<div class="eco-card__tags">
							<span class="eco-tag eco-tag--yellow">Router&lt;T&gt;</span>
							<span class="eco-tag eco-tag--cyan">Response&lt;200&gt;</span>
							<span class="eco-tag eco-tag--violet">fetch</span>
						</div>

						<div
							class="eco-card__install"
							data-pkg="@duplojs/http"
						>
							<span class="eco-card__install-cmd">$ npm i @duplojs/http</span>

							<button
								class="eco-card__copy"
								:aria-label="t.ecosystem.copyLabel"
								v-html="copyIconSvg"
							/>
						</div>
					</div>

					<div class="eco-card reveal">
						<div class="eco-card__top">
							<a
								href="https://utils.duplojs.dev"
								class="eco-card__pkg"
								target="_blank"
								rel="noopener"
							>@duplojs/utils</a>

							<div class="eco-card__actions">
								<a
									href="https://utils.duplojs.dev"
									class="eco-icon-link"
									target="_blank"
									rel="noopener"
									aria-label="Documentation"
									v-html="docSvg"
								/>

								<a
									href="https://github.com/duplojs/utils"
									class="eco-icon-link"
									target="_blank"
									rel="noopener"
									aria-label="GitHub"
									v-html="ghSvg"
								/>
							</div>
						</div>

						<p class="eco-card__desc">
							{{ t.ecosystem.utilsDesc }}
						</p>

						<div class="eco-card__tags">
							<span class="eco-tag eco-tag--green">type U</span>
							<span class="eco-tag eco-tag--yellow">infer</span>
						</div>

						<div
							class="eco-card__install"
							data-pkg="@duplojs/utils"
						>
							<span class="eco-card__install-cmd">$ npm i @duplojs/utils</span>

							<button
								class="eco-card__copy"
								:aria-label="t.ecosystem.copyLabel"
								v-html="copyIconSvg"
							/>
						</div>
					</div>

					<div class="eco-card reveal">
						<div class="eco-card__top">
							<a
								href="https://github.com/duplojs/server-utils"
								class="eco-card__pkg"
								target="_blank"
								rel="noopener"
							>@duplojs/server-utils</a>

							<div class="eco-card__actions">
								<a
									href="https://github.com/duplojs/server-utils"
									class="eco-icon-link"
									target="_blank"
									rel="noopener"
									aria-label="GitHub"
									v-html="ghSvg"
								/>
							</div>
						</div>

						<p class="eco-card__desc">
							{{ t.ecosystem.serverUtilsDesc }}
						</p>

						<div class="eco-card__tags">
							<span class="eco-tag eco-tag--cyan">Server</span>
							<span class="eco-tag eco-tag--violet">Bun | Node</span>
						</div>

						<div
							class="eco-card__install"
							data-pkg="@duplojs/server-utils"
						>
							<span class="eco-card__install-cmd">$ npm i @duplojs/server-utils</span>

							<button
								class="eco-card__copy"
								:aria-label="t.ecosystem.copyLabel"
								v-html="copyIconSvg"
							/>
						</div>
					</div>
				</div>
			</div>

			<!-- Tooling packages -->
			<div class="eco-group">
				<div class="eco-group__label">
					{{ t.ecosystem.toolingLabel }}
				</div>

				<div class="eco-grid eco-grid--3">
					<div class="eco-card reveal">
						<div class="eco-card__top">
							<a
								href="https://github.com/duplojs/zod-accelerator"
								class="eco-card__pkg"
								target="_blank"
								rel="noopener"
							>@duplojs/zod-accelerator</a>

							<div class="eco-card__actions">
								<span class="eco-card__stars">&#9733; 100</span>

								<a
									href="https://github.com/duplojs/zod-accelerator"
									class="eco-icon-link"
									target="_blank"
									rel="noopener"
									aria-label="GitHub"
									v-html="ghSvg"
								/>
							</div>
						</div>

						<p class="eco-card__desc">
							{{ t.ecosystem.zodAcceleratorDesc }}
						</p>

						<div class="eco-card__tags">
							<span class="eco-tag eco-tag--yellow">z.string()</span>
							<span class="eco-tag eco-tag--green">5× faster</span>
							<span class="eco-tag eco-tag--cyan">parse&lt;T&gt;</span>
						</div>

						<div
							class="eco-card__install"
							data-pkg="@duplojs/zod-accelerator"
						>
							<span class="eco-card__install-cmd">$ npm i @duplojs/zod-accelerator</span>

							<button
								class="eco-card__copy"
								:aria-label="t.ecosystem.copyLabel"
								v-html="copyIconSvg"
							/>
						</div>
					</div>

					<div class="eco-card reveal">
						<div class="eco-card__top">
							<a
								href="https://github.com/duplojs/zod-to-typescript"
								class="eco-card__pkg"
								target="_blank"
								rel="noopener"
							>@duplojs/zod-to-typescript</a>

							<div class="eco-card__actions">
								<a
									href="https://github.com/duplojs/zod-to-typescript"
									class="eco-icon-link"
									target="_blank"
									rel="noopener"
									aria-label="GitHub"
									v-html="ghSvg"
								/>
							</div>
						</div>

						<p class="eco-card__desc">
							{{ t.ecosystem.zodToTsDesc }}
						</p>

						<div class="eco-card__tags">
							<span class="eco-tag eco-tag--yellow">zod → ts</span>
							<span class="eco-tag eco-tag--violet">Record&lt;K,V&gt;</span>
							<span class="eco-tag eco-tag--cyan">codegen</span>
						</div>

						<div
							class="eco-card__install"
							data-pkg="@duplojs/zod-to-typescript"
						>
							<span class="eco-card__install-cmd">$ npm i @duplojs/zod-to-typescript</span>

							<button
								class="eco-card__copy"
								:aria-label="t.ecosystem.copyLabel"
								v-html="copyIconSvg"
							/>
						</div>
					</div>

					<div class="eco-card reveal">
						<div class="eco-card__top">
							<a
								href="https://github.com/duplojs/playwright"
								class="eco-card__pkg"
								target="_blank"
								rel="noopener"
							>@duplojs/playwright</a>

							<div class="eco-card__actions">
								<a
									href="https://github.com/duplojs/playwright"
									class="eco-icon-link"
									target="_blank"
									rel="noopener"
									aria-label="GitHub"
									v-html="ghSvg"
								/>
							</div>
						</div>

						<p class="eco-card__desc">
							{{ t.ecosystem.playwrightDesc }}
						</p>

						<div class="eco-card__tags">
							<span class="eco-tag eco-tag--green">test()</span>
							<span class="eco-tag eco-tag--cyan">expect()</span>
							<span class="eco-tag eco-tag--violet">Page</span>
						</div>

						<div
							class="eco-card__install"
							data-pkg="@duplojs/playwright"
						>
							<span class="eco-card__install-cmd">$ npm i @duplojs/playwright</span>

							<button
								class="eco-card__copy"
								:aria-label="t.ecosystem.copyLabel"
								v-html="copyIconSvg"
							/>
						</div>
					</div>

					<div class="eco-card reveal">
						<div class="eco-card__top">
							<a
								href="https://github.com/duplojs/json-web-token"
								class="eco-card__pkg"
								target="_blank"
								rel="noopener"
							>@duplojs/json-web-token</a>

							<div class="eco-card__actions">
								<a
									href="https://github.com/duplojs/json-web-token"
									class="eco-icon-link"
									target="_blank"
									rel="noopener"
									aria-label="GitHub"
									v-html="ghSvg"
								/>
							</div>
						</div>

						<p class="eco-card__desc">
							{{ t.ecosystem.jwtDesc }}
						</p>

						<div class="eco-card__tags">
							<span class="eco-tag eco-tag--yellow">sign&lt;T&gt;()</span>
							<span class="eco-tag eco-tag--violet">verify()</span>
							<span class="eco-tag eco-tag--green">JWT</span>
						</div>

						<div
							class="eco-card__install"
							data-pkg="@duplojs/json-web-token"
						>
							<span class="eco-card__install-cmd">$ npm i @duplojs/json-web-token</span>

							<button
								class="eco-card__copy"
								:aria-label="t.ecosystem.copyLabel"
								v-html="copyIconSvg"
							/>
						</div>
					</div>

					<div class="eco-card reveal">
						<div class="eco-card__top">
							<a
								href="https://github.com/duplojs/form"
								class="eco-card__pkg"
								target="_blank"
								rel="noopener"
							>@duplojs/form</a>

							<div class="eco-card__actions">
								<a
									href="https://github.com/duplojs/form"
									class="eco-icon-link"
									target="_blank"
									rel="noopener"
									aria-label="GitHub"
									v-html="ghSvg"
								/>
							</div>
						</div>

						<p class="eco-card__desc">
							{{ t.ecosystem.formDesc }}
						</p>

						<div class="eco-card__tags">
							<span class="eco-tag eco-tag--green">useForm()</span>
							<span class="eco-tag eco-tag--yellow">Vue 3</span>
							<span class="eco-tag eco-tag--cyan">Validator</span>
						</div>

						<div
							class="eco-card__install"
							data-pkg="@duplojs/form"
						>
							<span class="eco-card__install-cmd">$ npm i @duplojs/form</span>

							<button
								class="eco-card__copy"
								:aria-label="t.ecosystem.copyLabel"
								v-html="copyIconSvg"
							/>
						</div>
					</div>

					<div class="eco-card reveal">
						<div class="eco-card__top">
							<a
								href="https://github.com/duplojs/data-parser-tools"
								class="eco-card__pkg"
								target="_blank"
								rel="noopener"
							>@duplojs/data-parser-tools</a>

							<div class="eco-card__actions">
								<a
									href="https://github.com/duplojs/data-parser-tools"
									class="eco-icon-link"
									target="_blank"
									rel="noopener"
									aria-label="GitHub"
									v-html="ghSvg"
								/>
							</div>
						</div>

						<p class="eco-card__desc">
							{{ t.ecosystem.dataParserDesc }}
						</p>

						<div class="eco-card__tags">
							<span class="eco-tag eco-tag--violet">Parser&lt;T&gt;</span>
							<span class="eco-tag eco-tag--cyan">JSONSchema</span>
							<span class="eco-tag eco-tag--yellow">schema</span>
						</div>

						<div
							class="eco-card__install"
							data-pkg="@duplojs/data-parser-tools"
						>
							<span class="eco-card__install-cmd">$ npm i @duplojs/data-parser-tools</span>

							<button
								class="eco-card__copy"
								:aria-label="t.ecosystem.copyLabel"
								v-html="copyIconSvg"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
