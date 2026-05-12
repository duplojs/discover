<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "../../composables/useI18n";
const { t } = useI18n();

const active = ref<"body" | "auth" | "role" | "handler">("body");
function activate(key: "body" | "auth" | "role" | "handler") {
	active.value = key;
}
</script>

<template>
	<section
		class="section checkers-section"
		id="checkers"
		data-section="03"
	>
		<div class="container">
			<div class="section__header reveal">
				<span class="label">{{ t.checkers.label }}</span>

				<h2 class="section__title">
					{{ t.checkers.title.split('\n')[0] }}<br />{{ t.checkers.title.split('\n')[1] }}
				</h2>

				<p class="section__subtitle">
					{{ t.checkers.subtitle }}
				</p>
			</div>

			<div class="checkers-layout reveal">
				<div
					class="checker-stack"
					role="tablist"
					:aria-label="t.checkers.label"
				>
					<div
						class="checker-block"
						:class="{ 'checker-block--active': active === 'body' }"
						role="tab"
						:aria-selected="active === 'body'"
						data-checker="body"
						tabindex="0"
						@click="activate('body')"
						@keydown.enter="activate('body')"
						@keydown.space.prevent="activate('body')"
					>
						<div class="checker-block__icon">
							&lt;/&gt;
						</div>

						<div class="checker-block__info">
							<div class="checker-block__name">
								{{ t.checkers.bodyName }}
							</div>

							<div class="checker-block__sub">
								{{ t.checkers.bodySub }}
							</div>
						</div>

						<div class="checker-block__badge checker-block__badge--pass">
							{{ t.checkers.badgePass }}
						</div>
					</div>

					<div
						class="checker-connector"
						aria-hidden="true"
					>
						<div class="checker-connector__line" />

						<div class="checker-connector__dot" />

						<div class="checker-connector__line" />
					</div>

					<div
						class="checker-block"
						:class="{ 'checker-block--active': active === 'auth' }"
						role="tab"
						:aria-selected="active === 'auth'"
						data-checker="auth"
						tabindex="0"
						@click="activate('auth')"
						@keydown.enter="activate('auth')"
						@keydown.space.prevent="activate('auth')"
					>
						<div class="checker-block__icon">
							&#128272;
						</div>

						<div class="checker-block__info">
							<div class="checker-block__name">
								{{ t.checkers.authName }}
							</div>

							<div class="checker-block__sub">
								{{ t.checkers.authSub }}
							</div>
						</div>

						<div class="checker-block__badge checker-block__badge--pass">
							{{ t.checkers.badgePass }}
						</div>
					</div>

					<div
						class="checker-connector"
						aria-hidden="true"
					>
						<div class="checker-connector__line" />

						<div class="checker-connector__dot" />

						<div class="checker-connector__line" />
					</div>

					<div
						class="checker-block"
						:class="{ 'checker-block--active': active === 'role' }"
						role="tab"
						:aria-selected="active === 'role'"
						data-checker="role"
						tabindex="0"
						@click="activate('role')"
						@keydown.enter="activate('role')"
						@keydown.space.prevent="activate('role')"
					>
						<div class="checker-block__icon">
							&#128100;
						</div>

						<div class="checker-block__info">
							<div class="checker-block__name">
								{{ t.checkers.roleName }}
							</div>

							<div class="checker-block__sub">
								{{ t.checkers.roleSub }}
							</div>
						</div>

						<div class="checker-block__badge checker-block__badge--checking">
							{{ t.checkers.badgeChecking }}
						</div>
					</div>

					<div
						class="checker-connector"
						aria-hidden="true"
					>
						<div class="checker-connector__line" />

						<div class="checker-connector__dot" />

						<div class="checker-connector__line" />
					</div>

					<div
						class="checker-block checker-block--pending"
						:class="{ 'checker-block--active': active === 'handler' }"
						role="tab"
						:aria-selected="active === 'handler'"
						data-checker="handler"
						tabindex="0"
						@click="activate('handler')"
						@keydown.enter="activate('handler')"
						@keydown.space.prevent="activate('handler')"
					>
						<div class="checker-block__icon">
							&#9889;
						</div>

						<div class="checker-block__info">
							<div class="checker-block__name">
								{{ t.checkers.handlerName }}
							</div>

							<div class="checker-block__sub">
								{{ t.checkers.handlerSub }}
							</div>
						</div>

						<div class="checker-block__badge">
							{{ t.checkers.badgePending }}
						</div>
					</div>
				</div>

				<div class="checker-code-panel">
					<div class="checker-tabs">
						<button
							class="checker-tab"
							:class="{ 'checker-tab--active': active === 'body' }"
							data-tab="body"
							@click="activate('body')"
						>
							bodyChecker
						</button>

						<button
							class="checker-tab"
							:class="{ 'checker-tab--active': active === 'auth' }"
							data-tab="auth"
							@click="activate('auth')"
						>
							authChecker
						</button>

						<button
							class="checker-tab"
							:class="{ 'checker-tab--active': active === 'role' }"
							data-tab="role"
							@click="activate('role')"
						>
							roleChecker
						</button>

						<button
							class="checker-tab"
							:class="{ 'checker-tab--active': active === 'handler' }"
							data-tab="handler"
							@click="activate('handler')"
						>
							handler
						</button>
					</div>

					<div
						class="checker-code"
						:class="{ 'checker-code--hidden': active !== 'body' }"
					>
						<pre><code><span class="ck">const</span> bodyChecker <span class="cp">=</span> <span class="cf">duplo</span><span class="cp">()</span>
  <span class="cp">.</span><span class="cf">createChecker</span><span class="cp">(</span><span class="cs">"body"</span><span class="cp">)</span>
  <span class="cp">.</span><span class="cf">handler</span><span class="cp">(({</span> pickup <span class="cp">})</span> <span class="cp">=&gt; {</span>
    <span class="ck">const</span> body <span class="cp">=</span> <span class="cf">pickup</span><span class="cp">(</span><span class="cs">"body"</span><span class="cp">)</span>
    <span class="ck">return</span> z<span class="cp">.</span><span class="cf">object</span><span class="cp">({</span>
      email<span class="cp">:</span> z<span class="cp">.</span><span class="cf">string</span><span class="cp">().</span><span class="cf">email</span><span class="cp">(),</span>
      name<span class="cp">:</span> z<span class="cp">.</span><span class="cf">string</span><span class="cp">(),</span>
    <span class="cp">}).</span><span class="cf">parse</span><span class="cp">(</span>body<span class="cp">)</span>
  <span class="cp">})</span>
<span class="cc">// Reusable on any route that expects</span>
<span class="cc">// { email, name } in the request body</span></code></pre>
					</div>

					<div
						class="checker-code"
						:class="{ 'checker-code--hidden': active !== 'auth' }"
					>
						<pre><code><span class="ck">const</span> authChecker <span class="cp">=</span> <span class="cf">duplo</span><span class="cp">()</span>
  <span class="cp">.</span><span class="cf">createChecker</span><span class="cp">(</span><span class="cs">"auth"</span><span class="cp">)</span>
  <span class="cp">.</span><span class="cf">handler</span><span class="cp">(({</span> pickup <span class="cp">})</span> <span class="cp">=&gt; {</span>
    <span class="ck">const</span> token <span class="cp">=</span> <span class="cf">pickup</span><span class="cp">(</span><span class="cs">"authorization"</span><span class="cp">)</span>
    <span class="cc">// Verifies JWT. Throws 401 on failure.</span>
    <span class="ck">return</span> jwt<span class="cp">.</span><span class="cf">verify</span><span class="cp">(</span>token<span class="cp">,</span> SECRET<span class="cp">)</span>
  <span class="cp">})</span>
<span class="cc">// Stack on any protected route.</span>
<span class="cc">// User payload is typed in the store.</span></code></pre>
					</div>

					<div
						class="checker-code"
						:class="{ 'checker-code--hidden': active !== 'role' }"
					>
						<pre><code><span class="ck">const</span> roleChecker <span class="cp">=</span> <span class="cf">duplo</span><span class="cp">()</span>
  <span class="cp">.</span><span class="cf">createChecker</span><span class="cp">(</span><span class="cs">"role"</span><span class="cp">)</span>
  <span class="cp">.</span><span class="cf">handler</span><span class="cp">(({</span> pickup <span class="cp">})</span> <span class="cp">=&gt; {</span>
    <span class="ck">const</span> user <span class="cp">=</span> <span class="cf">pickup</span><span class="cp">(</span><span class="cs">"user"</span><span class="cp">)</span>
    <span class="ck">if</span> <span class="cp">(</span>user<span class="cp">.</span>role <span class="cp">!==</span> <span class="cs">"admin"</span><span class="cp">) {</span>
      <span class="ck">throw</span> <span class="cf">createHttpError</span><span class="cp">(</span><span class="cs">403</span><span class="cp">)</span>
    <span class="cp">}</span>
    <span class="ck">return</span> user
  <span class="cp">})</span>
<span class="cc">// Requires authChecker to run first.</span>
<span class="cc">// Checkers share a typed store.</span></code></pre>
					</div>

					<div
						class="checker-code"
						:class="{ 'checker-code--hidden': active !== 'handler' }"
					>
						<pre><code><span class="cc">// Handler only runs if ALL checkers pass</span>
route<span class="cp">.</span><span class="cf">handler</span><span class="cp">(</span><span class="ck">async</span> <span class="cp">({</span> body<span class="cp">,</span> store <span class="cp">})</span> <span class="cp">=&gt; {</span>
  <span class="cc">// store.user: typed from authChecker</span>
  <span class="cc">// body:       typed from bodyChecker</span>
  <span class="ck">const</span> user <span class="cp">=</span> <span class="ck">await</span> <span class="cf">createUser</span><span class="cp">({</span>
    <span class="cp">...</span>body<span class="cp">,</span>
    createdBy<span class="cp">:</span> store<span class="cp">.</span>user<span class="cp">.</span>id<span class="cp">,</span>
  <span class="cp">})</span>
  <span class="ck">return</span> <span class="cp">{</span> id<span class="cp">:</span> user<span class="cp">.</span>id <span class="cp">}</span>
<span class="cp">})</span></code></pre>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>
