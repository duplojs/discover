<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useI18n } from "../../composables/useI18n";
const { t } = useI18n();

const activeScenario = ref<"happy" | "bad-body" | "no-auth">("happy");
const running = ref(false);
const btnText = ref("");
const btnClass = ref("pipe__run-btn");
const badgeText = ref("");
const badgeCls = ref("pipe__status-badge");

type ScenarioKey = "happy" | "bad-body" | "no-auth";

const SCENARIOS: Record<ScenarioKey, {
	light: number[];
	errorAt: number | null;
	btnClass: string;
	btnText: string;
	badgeCls: string;
	badgeText: string;
	responseCls: string;
	responseLabel: string;
}> = {
	happy: {
		light: [0, 1, 2, 3, 4, 5],
		errorAt: null,
		btnClass: "--success",
		btnText: "Response<200> — 3ms",
		badgeCls: "--ok",
		badgeText: "Response<200> · application/json · handler.execute() → ok · 3ms",
		responseCls: "pipe-node--response-ok",
		responseLabel: ".send()",
	},
	"bad-body": {
		light: [0, 1, 2],
		errorAt: 2,
		btnClass: "--error",
		btnText: "bodyChecker() → Error<400>",
		badgeCls: "--warn",
		badgeText: "ValidationError · body.schema failed · bodyChecker() rejected · 1ms",
		responseCls: "pipe-node--response-warn",
		responseLabel: "err(400)",
	},
	"no-auth": {
		light: [0, 1, 2, 3],
		errorAt: 3,
		btnClass: "--error",
		btnText: "authChecker() → Error<401>",
		badgeCls: "--err",
		badgeText: "UnauthorizedError · token.verify() failed · authChecker() rejected · 2ms",
		responseCls: "pipe-node--response-err",
		responseLabel: "err(401)",
	},
};

onMounted(() => {
	btnText.value = t.value.pipeline.runBtn;
});

function resetNodes() {
	document.querySelectorAll(".pipe-node").forEach((node) => {
		node.classList.remove("pipe-node--lit", "pipe-node--lit-error", "pipe-node--response-ok", "pipe-node--response-warn", "pipe-node--response-err");
		const statusEl = node.querySelector(".pipe-node__status");
		if (statusEl) {
			statusEl.textContent = "";
			(statusEl as HTMLElement).className = "pipe-node__status";
			(statusEl as HTMLElement).style.opacity = "";
		}
	});
	const rBox = document.querySelector("[data-node=\"response\"] .pipe-box--response");
	if (rBox) {
		if (rBox.firstChild) {
			rBox.firstChild.textContent = "200 OK";
		}
		const sub = rBox.querySelector(".pipe-box__sub");
		if (sub) {
			sub.textContent = "typed";
		}
	}
	document.querySelector(".pipeline-diagram")?.classList.remove("pipe--running");
}

function run() {
	if (running.value) {
		return;
	}
	running.value = true;
	const sc = SCENARIOS[activeScenario.value];
	const nodes = document.querySelectorAll<HTMLElement>(".pipe-node");
	resetNodes();
	badgeText.value = "";
	badgeCls.value = "pipe__status-badge";
	document.querySelector(".pipeline-diagram")?.classList.add("pipe--running");
	btnText.value = " Running…";
	btnClass.value = "pipe__run-btn pipe__run-btn--running";
	const STAGGER = 180;

	sc.light.forEach((nodeIdx, idx) => {
		const node = nodes[nodeIdx];
		if (!node) {
			return;
		}
		const isError = sc.errorAt === nodeIdx;
		const isLast = idx === sc.light.length - 1;
		setTimeout(() => {
			const statusEl = node.querySelector<HTMLElement>(".pipe-node__status");
			if (statusEl) {
				statusEl.textContent = "pending…";
				statusEl.className = "pipe-node__status pipe-node__status--running";
			}
		}, idx * STAGGER);
		setTimeout(() => {
			const statusEl = node.querySelector<HTMLElement>(".pipe-node__status");
			if (isError) {
				node.classList.add("pipe-node--lit-error");
				if (statusEl) {
					statusEl.textContent = "→ throw";
					statusEl.className = "pipe-node__status pipe-node__status--error";
				}
			} else {
				node.classList.add("pipe-node--lit");
				if (statusEl) {
					statusEl.textContent = "→ pass";
					statusEl.className = "pipe-node__status pipe-node__status--ok";
				}
			}
			if (isLast && !isError && nodeIdx === 5) {
				node.classList.add("pipe-node--response-ok");
			}
		}, (idx * STAGGER) + 90);
	});

	const total = (sc.light.length * STAGGER) + 90;
	setTimeout(() => {
		document.querySelector(".pipeline-diagram")?.classList.remove("pipe--running");
		if (sc.errorAt !== null && sc.errorAt !== 5) {
			const rNode = document.querySelector<HTMLElement>("[data-node=\"response\"]");
			if (rNode) {
				rNode.classList.add(sc.responseCls);
				const rBox = rNode.querySelector<HTMLElement>(".pipe-box--response");
				if (rBox) {
					if (rBox.firstChild) {
						rBox.firstChild.textContent = sc.responseLabel;
					}
					rBox.classList.add("pipe-node--lit");
				}
			}
		}
		btnClass.value = `pipe__run-btn pipe__run-btn${sc.btnClass}`;
		btnText.value = sc.btnText;
		badgeText.value = sc.badgeText;
		badgeCls.value = `pipe__status-badge pipe__status-badge${sc.badgeCls} visible`;

		setTimeout(() => {
			const badge = document.querySelector<HTMLElement>(".pipe__status-badge");
			if (badge) {
				badge.style.opacity = "0";
				badge.style.transform = "translateY(6px)";
			}
			const EXIT_STAGGER = 45;
			const allNodes = document.querySelectorAll<HTMLElement>(".pipe-node");
			allNodes.forEach((node, idx) => {
				const statusEl = node.querySelector<HTMLElement>(".pipe-node__status");
				if (statusEl) {
					setTimeout(() => {
						statusEl.style.opacity = "0";
					}, (allNodes.length - 1 - idx) * EXIT_STAGGER);
				}
			});
			const cleanupDelay = 300 + (allNodes.length * EXIT_STAGGER);
			setTimeout(() => {
				btnText.value = t.value.pipeline.runBtn;
				btnClass.value = "pipe__run-btn";
				badgeText.value = "";
				badgeCls.value = "pipe__status-badge";
				if (badge) {
					badge.style.opacity = "";
					badge.style.transform = "";
				}
				resetNodes();
				running.value = false;
			}, cleanupDelay);
		}, 2200);
	}, total);
}
</script>

<template>
	<section
		class="section pipeline-section"
		id="pipeline"
		data-section="02"
	>
		<div class="container">
			<div class="section__header reveal">
				<span class="label">{{ t.pipeline.label }}</span>

				<h2 class="section__title">
					{{ t.pipeline.title }}
				</h2>

				<p class="section__subtitle">
					{{ t.pipeline.subtitle }}
				</p>
			</div>

			<div class="pipe__controls">
				<div
					class="pipe__scenarios"
					role="tablist"
					:aria-label="t.pipeline.label"
				>
					<button
						class="pipe__scenario"
						:class="{ 'pipe__scenario--active': activeScenario === 'happy' }"
						data-scenario="happy"
						role="tab"
						:aria-selected="activeScenario === 'happy'"
						@click="activeScenario = 'happy'"
					>
						{{ t.pipeline.scenarioHappy }}
					</button>

					<button
						class="pipe__scenario"
						:class="{ 'pipe__scenario--active': activeScenario === 'bad-body' }"
						data-scenario="bad-body"
						role="tab"
						:aria-selected="activeScenario === 'bad-body'"
						@click="activeScenario = 'bad-body'"
					>
						{{ t.pipeline.scenarioBadBody }}
					</button>

					<button
						class="pipe__scenario"
						:class="{ 'pipe__scenario--active': activeScenario === 'no-auth' }"
						data-scenario="no-auth"
						role="tab"
						:aria-selected="activeScenario === 'no-auth'"
						@click="activeScenario = 'no-auth'"
					>
						{{ t.pipeline.scenarioNoAuth }}
					</button>
				</div>

				<div class="pipe__run-row">
					<button
						:class="btnClass"
						id="pipeRunBtn"
						:disabled="running"
						@click="run"
					>
						{{ btnText || t.pipeline.runBtn }}
					</button>
				</div>
			</div>

			<div
				class="pipeline-diagram reveal"
				:aria-label="t.pipeline.label"
			>
				<div class="pipeline__lifecycle-label">
					{{ t.pipeline.lifecycleLabel }}
				</div>

				<div class="pipeline__nodes">
					<div
						class="pipe-node pipe-node--request"
						data-node="request"
					>
						<div class="pipe-box">
							req<br />

							<span class="pipe-box__sub">.input()</span>
						</div>

						<div class="pipe-node__status" />
					</div>

					<div class="pipe-connector">
						<div class="pipe-connector__line" />

						<div class="pipe-dot" />
					</div>

					<div
						class="pipe-node"
						data-node="router"
					>
						<div class="pipe-box">
							router<br />

							<span class="pipe-box__sub">.match()</span>
						</div>

						<div class="pipe-node__status" />
					</div>

					<div class="pipe-connector">
						<div class="pipe-connector__line pipe-connector__line--yellow" />

						<div
							class="pipe-dot pipe-dot--yellow"
							style="animation-delay:0.4s"
						/>
					</div>

					<div
						class="pipe-node pipe-node--checker"
						data-node="body"
					>
						<div class="pipe-box pipe-box--checker">
							bodyChecker<br />

							<span class="pipe-box__sub">.validate()</span>
						</div>

						<div class="pipe-node__status" />
					</div>

					<div class="pipe-connector">
						<div class="pipe-connector__line pipe-connector__line--yellow" />

						<div
							class="pipe-dot pipe-dot--yellow"
							style="animation-delay:0.8s"
						/>
					</div>

					<div
						class="pipe-node pipe-node--checker"
						data-node="auth"
					>
						<div class="pipe-box pipe-box--checker">
							authChecker<br />

							<span class="pipe-box__sub">.check()</span>
						</div>

						<div class="pipe-node__status" />
					</div>

					<div class="pipe-connector">
						<div class="pipe-connector__line pipe-connector__line--green" />

						<div
							class="pipe-dot pipe-dot--green"
							style="animation-delay:1.2s"
						/>
					</div>

					<div
						class="pipe-node pipe-node--handler"
						data-node="handler"
					>
						<div class="pipe-box pipe-box--handler">
							handler<br />

							<span class="pipe-box__sub">.execute()</span>
						</div>

						<div class="pipe-node__status" />
					</div>

					<div class="pipe-connector">
						<div class="pipe-connector__line pipe-connector__line--green" />

						<div
							class="pipe-dot pipe-dot--green"
							style="animation-delay:1.6s"
						/>
					</div>

					<div
						class="pipe-node pipe-node--response"
						data-node="response"
					>
						<div class="pipe-box pipe-box--response">
							Response<br />

							<span class="pipe-box__sub">.send()</span>
						</div>

						<div class="pipe-node__status" />
					</div>
				</div>
			</div>

			<div
				:class="badgeCls"
				id="pipeStatusBadge"
				aria-live="polite"
				aria-atomic="true"
			>
				{{ badgeText }}
			</div>

			<div class="contract-split reveal">
				<div class="contract-pane">
					<div class="contract-pane__label">
						{{ t.pipeline.serverLabel }}
					</div>

					<pre class="contract-pane__code"><code><span class="ck">const</span> route <span class="cp">=</span> <span class="cf">duplo</span><span class="cp">()</span>
  <span class="cp">.</span><span class="cf">declareRoute</span><span class="cp">(</span><span class="cs">"POST"</span><span class="cp">,</span> <span class="cs">"/users"</span><span class="cp">)</span>
  <span class="cp">.</span><span class="cf">extract</span><span class="cp">({</span>
    body<span class="cp">:</span> z<span class="cp">.</span><span class="cf">object</span><span class="cp">({</span>
      email<span class="cp">:</span> z<span class="cp">.</span><span class="cf">string</span><span class="cp">().</span><span class="cf">email</span><span class="cp">(),</span>
      name<span class="cp">:</span> z<span class="cp">.</span><span class="cf">string</span><span class="cp">(),</span>
    <span class="cp">}),</span>
  <span class="cp">})</span>
  <span class="cp">.</span><span class="cf">process</span><span class="cp">(</span>authChecker<span class="cp">)</span>
  <span class="cp">.</span><span class="cf">handler</span><span class="cp">(</span><span class="ck">async</span> <span class="cp">({</span> body <span class="cp">})</span> <span class="cp">=&gt; {</span>
    <span class="ck">const</span> user <span class="cp">=</span> <span class="ck">await</span> <span class="cf">createUser</span><span class="cp">(</span>body<span class="cp">)</span>
    <span class="ck">return</span> <span class="cp">{</span> id<span class="cp">:</span> user<span class="cp">.</span>id<span class="cp">,</span> email<span class="cp">:</span> user<span class="cp">.</span>email <span class="cp">}</span>
  <span class="cp">})</span></code></pre>
				</div>

				<div
					class="contract-divider"
					aria-hidden="true"
				>
					<div class="contract-divider__line" />

					<div class="contract-divider__label">
						{{ t.pipeline.contractDivider }}
					</div>

					<div class="contract-divider__line" />
				</div>

				<div class="contract-pane">
					<div class="contract-pane__label">
						{{ t.pipeline.clientLabel }}
					</div>

					<pre class="contract-pane__code"><code><span class="cc">// Auto-generated from server export</span>
<span class="ck">type</span> <span class="ct">CreateUser</span> <span class="cp">= {</span>
  body<span class="cp">: {</span>
    email<span class="cp">:</span> <span class="ct">string</span>
    name<span class="cp">:</span> <span class="ct">string</span>
  <span class="cp">}</span>
  response<span class="cp">: {</span>
    id<span class="cp">:</span> <span class="ct">string</span>
    email<span class="cp">:</span> <span class="ct">string</span>
  <span class="cp">}</span>
<span class="cp">}</span>
<span class="contract-ok"><span class="cc">// ✓ No drift possible. Types are generated from server.</span></span>
<span class="ck">const</span> result <span class="cp">=</span> <span class="ck">await</span> client<span class="cp">.</span><span class="cf">post</span><span class="cp">(</span><span class="cs">"/users"</span><span class="cp">,</span> <span class="cp">{</span> body <span class="cp">})</span></code></pre>
				</div>
			</div>
		</div>
	</section>
</template>
