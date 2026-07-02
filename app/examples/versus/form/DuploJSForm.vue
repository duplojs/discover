<script setup lang="ts">
import "@duplojs/form/vueGrid.css";
import "@duplojs/form/vueDesignSystem.css";
import { useMultiLayout, useRepeatLayout } from "@duplojs/form/vue";
import { useNumberInput, useTextInput, PrimaryButton } from "@duplojs/form/vueDesignSystem";
import * as DP from "@duplojs/utils/dataParser";
import { templatesGrid, useForm } from "./configForm";

const { component: TheForm, check, currentValue, reset } = useForm(
	useRepeatLayout(
		useMultiLayout({
			name: useTextInput({
				label: "Name",
				defaultValue: "Math",
				template: templatesGrid
					.useInputTemplate({ columns: 6 }),
			}),
			age: useNumberInput({
				label: "Age",
				defaultValue: 16,
				dataParser: DP.number()
					.addChecker(
						DP.checkerNumberMin(18, { errorMessage: "Too young !" }),
					),
				template: templatesGrid
					.useInputTemplate({ columns: 6 }),
			}),
		}),
		{
			min: 2,
			max: 10,
		},
	),
);

</script>

<template>
	<TheForm @submit="check()">
		<PrimaryButton
			type="submit"
			label="Submit"
		/>
	</TheForm>
</template>
