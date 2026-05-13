<script setup lang="ts">
import "@duplojs/form/vueGrid.css";
import "@duplojs/form/vueDesignSystem.css";
import { createForm, useMultiLayout, useRepeatLayout } from "@duplojs/form/vue";
import { createGridTemplates } from "@duplojs/form/vueGrid";
import {
	templateFormAddButton, templateFormRemoveButton, templateFormResetButton, templateFormNextButton, templateFormPreviousButton, templateFormSelect,
	useNumberInput, useTextInput,
	PrimaryButton,
} from "@duplojs/form/vueDesignSystem";
import * as DP from "@duplojs/utils/dataParser";

const templatesGrid = createGridTemplates({
	repeat: {
		addLabel: "Add another item",
		removeLabel: "Remove this item",
		addButton: templateFormAddButton,
		removeButton: templateFormRemoveButton,
		resetButton: templateFormResetButton,
	},
	step: {
		nextLabel: "Continue",
		previousLabel: "Back",
		resetButton: templateFormResetButton,
		nextButton: templateFormNextButton,
		previousButton: templateFormPreviousButton,
	},
	union: { selectInputKind: templateFormSelect },
});

const useForm = createForm(templatesGrid.useTemplates());

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
