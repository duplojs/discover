<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "../../composables/useI18n";
const { t } = useI18n();

const activeFlow = ref<"get" | "post" | "auth">("get");
</script>

<template>
	<section
		class="section typeflow-section"
		id="typeflow"
		data-section="02b"
	>
		<div class="container">
			<div class="section__header reveal">
				<span class="label">{{ t.typeflow.label }}</span>

				<h2 class="section__title">
					{{ t.typeflow.title }}
				</h2>

				<p class="section__subtitle">
					{{ t.typeflow.subtitle }}
				</p>
			</div>

			<div class="typeflow-tabs reveal">
				<button
					class="typeflow-tab"
					:class="{ 'typeflow-tab--active': activeFlow === 'get' }"
					data-flow="get"
					@click="activeFlow = 'get'"
				>
					{{ t.typeflow.tabGet }}
				</button>

				<button
					class="typeflow-tab"
					:class="{ 'typeflow-tab--active': activeFlow === 'post' }"
					data-flow="post"
					@click="activeFlow = 'post'"
				>
					{{ t.typeflow.tabPost }}
				</button>

				<button
					class="typeflow-tab"
					:class="{ 'typeflow-tab--active': activeFlow === 'auth' }"
					data-flow="auth"
					@click="activeFlow = 'auth'"
				>
					{{ t.typeflow.tabAuth }}
				</button>
			</div>

			<div class="typeflow reveal">
				<!-- Server panel -->
				<div class="typeflow__panel typeflow__panel--server">
					<div class="typeflow__panel-label">
						<span class="typeflow__panel-dot typeflow__panel-dot--server" />
						{{ t.typeflow.serverLabel }}
					</div>

					<div
						class="typeflow__code"
						:class="{ 'typeflow__code--hidden': activeFlow !== 'get' }"
					>
						<pre><code><span class="ck">const</span> getUser <span class="cp">=</span> <span class="cf">duplo</span><span class="cp">()</span>
  <span class="cp">.</span><span class="cf">declareRoute</span><span class="cp">(</span><span class="cs">"GET"</span><span class="cp">,</span> <span class="cs">"/users/:id"</span><span class="cp">)</span>
  <span class="cp">.</span><span class="cf">extract</span><span class="cp">({</span>
    params<span class="cp">: {</span>
      id<span class="cp">:</span> z<span class="cp">.</span><span class="cf">string</span><span class="cp">(),</span>
    <span class="cp">},</span>
  <span class="cp">})</span>
  <span class="cp">.</span><span class="cf">handler</span><span class="cp">(({ params })</span> <span class="cp">=&gt; {</span>
    <span class="ck">return</span> <span class="cf">findUser</span><span class="cp">(</span>params<span class="cp">.</span>id<span class="cp">)</span>
  <span class="cp">})</span></code></pre>
					</div>

					<div
						class="typeflow__code"
						:class="{ 'typeflow__code--hidden': activeFlow !== 'post' }"
					>
						<pre><code><span class="ck">const</span> createUser <span class="cp">=</span> <span class="cf">duplo</span><span class="cp">()</span>
  <span class="cp">.</span><span class="cf">declareRoute</span><span class="cp">(</span><span class="cs">"POST"</span><span class="cp">,</span> <span class="cs">"/users"</span><span class="cp">)</span>
  <span class="cp">.</span><span class="cf">extract</span><span class="cp">({</span>
    body<span class="cp">: {</span>
      email<span class="cp">:</span> z<span class="cp">.</span><span class="cf">string</span><span class="cp">().</span><span class="cf">email</span><span class="cp">(),</span>
      name<span class="cp">:</span> z<span class="cp">.</span><span class="cf">string</span><span class="cp">(),</span>
    <span class="cp">},</span>
  <span class="cp">})</span>
  <span class="cp">.</span><span class="cf">handler</span><span class="cp">(</span><span class="ck">async</span> <span class="cp">({ body })</span> <span class="cp">=&gt; {</span>
    <span class="ck">return</span> <span class="ck">await</span> db<span class="cp">.</span>users<span class="cp">.</span><span class="cf">create</span><span class="cp">(</span>body<span class="cp">)</span>
  <span class="cp">})</span></code></pre>
					</div>

					<div
						class="typeflow__code"
						:class="{ 'typeflow__code--hidden': activeFlow !== 'auth' }"
					>
						<pre><code><span class="ck">const</span> getProfile <span class="cp">=</span> <span class="cf">duplo</span><span class="cp">()</span>
  <span class="cp">.</span><span class="cf">declareRoute</span><span class="cp">(</span><span class="cs">"GET"</span><span class="cp">,</span> <span class="cs">"/me"</span><span class="cp">)</span>
  <span class="cp">.</span><span class="cf">process</span><span class="cp">(</span>authChecker<span class="cp">)</span>
  <span class="cp">.</span><span class="cf">handler</span><span class="cp">(({ store })</span> <span class="cp">=&gt; {</span>
    <span class="cc">// store.user typed from authChecker</span>
    <span class="ck">return</span> store<span class="cp">.</span>user
  <span class="cp">})</span></code></pre>
					</div>
				</div>

				<!-- Bridge -->
				<div
					class="typeflow__bridge"
					aria-hidden="true"
				>
					<svg
						class="typeflow__arrow-svg"
						viewBox="0 0 80 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							class="typeflow__arrow-path"
							d="M 0 20 Q 40 20 80 20"
							stroke="var(--yellow)"
							stroke-width="1.5"
							stroke-dasharray="6 4"
							fill="none"
						/>

						<polygon
							class="typeflow__arrow-head"
							points="74,15 80,20 74,25"
							fill="var(--yellow)"
							opacity="0.7"
						/>
					</svg>

					<div class="typeflow__bridge-label">
						{{ t.typeflow.contractLabel }}
					</div>

					<div
						class="typeflow__particle"
						aria-hidden="true"
					/>

					<div
						class="typeflow__particle typeflow__particle--2"
						aria-hidden="true"
					/>
				</div>

				<!-- Client panel -->
				<div class="typeflow__panel typeflow__panel--client">
					<div class="typeflow__panel-label">
						<span class="typeflow__panel-dot typeflow__panel-dot--client" />
						{{ t.typeflow.clientLabel }}
					</div>

					<div
						class="typeflow__code"
						:class="{ 'typeflow__code--hidden': activeFlow !== 'get' }"
					>
						<pre><code><span class="cc">// Auto-inferred from server export</span>
<span class="ck">type</span> <span class="ct">GetUser</span> <span class="cp">= {</span>
  params<span class="cp">: {</span>
    id<span class="cp">:</span> <span class="ct">string</span>
  <span class="cp">}</span>
  response<span class="cp">:</span> <span class="ct">User</span>
<span class="cp">}</span>
<span class="cc">// ✓ Fully typed, zero drift</span>
<span class="ck">const</span> user <span class="cp">=</span> <span class="ck">await</span> client<span class="cp">.</span><span class="cf">get</span><span class="cp">(</span><span class="cs">"/users/:id"</span><span class="cp">, {</span>
  params<span class="cp">: {</span> id <span class="cp">},</span>
<span class="cp">})</span></code></pre>
					</div>

					<div
						class="typeflow__code"
						:class="{ 'typeflow__code--hidden': activeFlow !== 'post' }"
					>
						<pre><code><span class="cc">// Auto-inferred from server export</span>
<span class="ck">type</span> <span class="ct">CreateUser</span> <span class="cp">= {</span>
  body<span class="cp">: {</span>
    email<span class="cp">:</span> <span class="ct">string</span>
    name<span class="cp">:</span> <span class="ct">string</span>
  <span class="cp">}</span>
  response<span class="cp">:</span> <span class="ct">User</span>
<span class="cp">}</span>
<span class="cc">// ✓ Body is validated server-side</span>
<span class="ck">const</span> user <span class="cp">=</span> <span class="ck">await</span> client<span class="cp">.</span><span class="cf">post</span><span class="cp">(</span><span class="cs">"/users"</span><span class="cp">, {</span> body <span class="cp">})</span></code></pre>
					</div>

					<div
						class="typeflow__code"
						:class="{ 'typeflow__code--hidden': activeFlow !== 'auth' }"
					>
						<pre><code><span class="cc">// Auto-inferred from server export</span>
<span class="ck">type</span> <span class="ct">GetProfile</span> <span class="cp">= {</span>
  headers<span class="cp">: {</span>
    authorization<span class="cp">:</span> <span class="ct">string</span>
  <span class="cp">}</span>
  response<span class="cp">:</span> <span class="ct">User</span>
<span class="cp">}</span>
<span class="cc">// ✓ Auth enforced at type level</span>
<span class="ck">const</span> profile <span class="cp">=</span> <span class="ck">await</span> client<span class="cp">.</span><span class="cf">get</span><span class="cp">(</span><span class="cs">"/me"</span><span class="cp">, {</span> headers <span class="cp">})</span></code></pre>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
