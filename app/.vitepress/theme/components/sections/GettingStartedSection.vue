<script setup lang="ts">
import { useI18n } from "../../composables/useI18n";
import { useTypewriter } from "../../composables/useTypewriter";
const { t } = useI18n();
const { text } = useTypewriter();
</script>

<template>
	<section
		class="section steps-section"
		id="getting-started"
		data-section="06b"
	>
		<div class="container">
			<div class="section__header reveal">
				<span class="label">{{ t.gettingStarted.label }}</span>

				<h2 class="section__title">
					{{ t.gettingStarted.title1 }}<br />{{ t.gettingStarted.title2 }}
				</h2>

				<p class="section__subtitle">
					{{ t.gettingStarted.subtitle }}
				</p>
			</div>

			<div class="steps reveal">
				<div class="step-card">
					<div class="step-card__num">
						{{ t.gettingStarted.step1num }}
					</div>

					<div
						class="step-card__icon"
						aria-hidden="true"
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
						>
							<polyline points="4 17 10 11 4 5" />

							<line
								x1="12"
								y1="19"
								x2="20"
								y2="19"
							/>
						</svg>
					</div>

					<div class="step-card__content">
						<div class="step-card__title">
							{{ t.gettingStarted.step1title }}<span class="step-card__parenthesis">()</span>
						</div>

						<div class="step-card__desc">
							{{ t.gettingStarted.step1desc }}
						</div>

						<div class="step-card__cmd">
							<span class="step-card__prompt">$</span><span
								class="step-card__code"
								id="stepInstallCmd"
							>{{ text }}</span><span
								class="step-card__cursor"
								aria-hidden="true"
							/>
						</div>
					</div>
				</div>

				<div
					class="step-connector"
					aria-hidden="true"
				>
					<div class="step-connector__line" />

					<div class="step-connector__dot" />
				</div>

				<div class="step-card">
					<div class="step-card__num">
						{{ t.gettingStarted.step2num }}
					</div>

					<div
						class="step-card__icon"
						aria-hidden="true"
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
						>
							<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />

							<polyline points="14 2 14 8 20 8" />
						</svg>
					</div>

					<div class="step-card__content">
						<div class="step-card__title">
							{{ t.gettingStarted.step2title }}<span class="step-card__parenthesis">()</span>
						</div>

						<div class="step-card__desc">
							{{ t.gettingStarted.step2desc }}
						</div>

						<pre class="step-card__pre"><code><span class="ck">const</span> app <span class="cp">=</span> <span class="cf">duplo</span><span class="cp">()</span>
  <span class="cp">.</span><span class="cf">declareRoute</span><span class="cp">(</span><span class="cs">"GET"</span><span class="cp">,</span> <span class="cs">"/hello"</span><span class="cp">)</span>
  <span class="cp">.</span><span class="cf">handler</span><span class="cp">(() =&gt; ({</span>
    message<span class="cp">:</span> <span class="cs">"hello, world"</span>
  <span class="cp">}))</span></code></pre>
					</div>
				</div>

				<div
					class="step-connector"
					aria-hidden="true"
				>
					<div class="step-connector__line" />

					<div class="step-connector__dot" />
				</div>

				<div class="step-card">
					<div class="step-card__num">
						{{ t.gettingStarted.step3num }}
					</div>

					<div
						class="step-card__icon"
						aria-hidden="true"
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="1.5"
							stroke-linecap="round"
						>
							<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
						</svg>
					</div>

					<div class="step-card__content">
						<div class="step-card__title">
							{{ t.gettingStarted.step3title }}<span class="step-card__parenthesis">()</span>
						</div>

						<div class="step-card__desc">
							{{ t.gettingStarted.step3desc }}
						</div>

						<pre class="step-card__pre"><code><span class="cc">// Types inferred from server</span>
<span class="ck">const</span> res <span class="cp">=</span> <span class="ck">await</span> client<span class="cp">.</span><span class="cf">get</span><span class="cp">(</span><span class="cs">"/hello"</span><span class="cp">)</span>
<span class="cc">// res.message: string ✓</span></code></pre>
					</div>
				</div>
			</div>

			<div class="steps-cta reveal">
				<a
					href="http://http.duplojs.dev/en/v0/guide/"
					class="btn btn--primary"
					target="_blank"
					rel="noopener"
				>{{ t.gettingStarted.readDocs }}</a>

				<a
					href="https://github.com/duplojs/http"
					class="btn btn--secondary"
					target="_blank"
					rel="noopener"
				>{{ t.gettingStarted.viewExamples }}</a>
			</div>
		</div>
	</section>
</template>
