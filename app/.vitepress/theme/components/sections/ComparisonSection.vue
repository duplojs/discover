<script setup lang="ts">
import { useI18n } from "../../composables/useI18n";
const { t } = useI18n();
const features = ["f1", "f2", "f3", "f4", "f5", "f6"] as const;
const duplo = ["yes", "yes", "yes", "yes", "yes", "yes"];
const express = ["no", "no", "no", "no", "no", "no"];
const fastify = ["partial", "no", "no", "yes", "no", "partial"];
const trpc = ["yes", "no", "no", "yes", "yes", "yes"];
const hono = ["no", "yes", "no", "no", "no", "partial"];
</script>

<template>
	<section
		class="section comparison-section"
		id="comparison"
		data-section="04"
	>
		<div class="container">
			<div class="section__header reveal">
				<span class="label">{{ t.comparison.label }}</span>

				<h2 class="section__title">
					{{ t.comparison.title }}
				</h2>

				<p class="section__subtitle">
					{{ t.comparison.subtitle }}
				</p>
			</div>

			<div class="comparison-wrap reveal">
				<table
					class="comparison-table"
					role="table"
				>
					<thead>
						<tr>
							<th
								class="comparison-table__feature-col"
								scope="col"
							>
								{{ t.comparison.featureCol }}
							</th>

							<th
								class="comparison-table__duplo-col"
								scope="col"
							>
								<span class="comparison-table__framework-name comparison-table__framework-name--duplo">DuploJS</span>
							</th>

							<th scope="col">
								<span class="comparison-table__framework-name">Express</span>
							</th>

							<th scope="col">
								<span class="comparison-table__framework-name">Fastify</span>
							</th>

							<th scope="col">
								<span class="comparison-table__framework-name">tRPC</span>
							</th>

							<th scope="col">
								<span class="comparison-table__framework-name">Hono</span>
							</th>
						</tr>
					</thead>

					<tbody>
						<tr
							v-for="(fKey, i) in features"
							:key="fKey"
						>
							<td class="comparison-table__feature">
								{{ t.comparison[fKey] }}
							</td>

							<td class="comparison-table__duplo-col">
								<span :class="'cell-' + (duplo[i] ?? '')">{{ duplo[i] === 'yes' ? '✓' : duplo[i] === 'partial' ? '~' : '✗' }}</span>
							</td>

							<td
								v-for="(fw, fi) in [express, fastify, trpc, hono]"
								:key="fi"
							>
								<span :class="'cell-' + (fw[i] ?? '')">{{ fw[i] === 'yes' ? '✓' : fw[i] === 'partial' ? '~' : '✗' }}</span>
							</td>
						</tr>
					</tbody>
				</table>

				<p class="comparison-table__note">
					{{ t.comparison.note }}
				</p>
			</div>
		</div>
	</section>
</template>
