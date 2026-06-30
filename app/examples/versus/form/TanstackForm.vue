<script setup lang="ts">
import { useForm } from "@tanstack/vue-form";
import { ref } from "vue";

interface Person {
	name: string;
	age: number;
}

const MIN_ITEMS = 2;
const MAX_ITEMS = 10;
const submittedValue = ref<unknown>(null);

const form = useForm({
	defaultValues: {
		people: Array.from(
			{ length: MIN_ITEMS },
			() => (
				{
					name: "Math",
					age: 16,
				} satisfies Person
			),
		),
	},
	onSubmit: ({ value }) => {
		submittedValue.value = value;
	},
	validators: {
		onSubmit: ({ value }) => {
			if (value.people.length < MIN_ITEMS) {
				return `At least ${MIN_ITEMS} items are required.`;
			}
			if (value.people.length > MAX_ITEMS) {
				return `At most ${MAX_ITEMS} items are allowed.`;
			}
		},
	},
});
const people = form.useStore((state) => state.values.people);

function addPerson() {
	if (people.value.length >= MAX_ITEMS) {
		return;
	}
	void form.pushFieldValue("people", {
		name: "Math",
		age: 16,
	});
}

function removePerson(index: number) {
	if (people.value.length <= MIN_ITEMS) {
		return;
	}
	void form.removeFieldValue("people", index);
}
</script>

<template>
	<form @submit.prevent="void form.handleSubmit()">
		<div
			v-for="(_, index) in people"
			:key="index"
		>
			<form.Field
				:name="`people[${index}].name`"
				v-slot="{ field, state }"
			>
				<input
					type="text"
					:value="state.value"
					@input="field.handleChange(($event.target as HTMLInputElement).value)"
				/>
			</form.Field>

			<form.Field
				:name="`people[${index}].age`"
				:validators="{
					onChange: ({ value }) => value < 18 ? 'Too young !' : undefined,
				}"
				v-slot="{ field, state }"
			>
				<input
					type="number"
					:value="state.value"
					@input="field.handleChange(Number(($event.target as HTMLInputElement).value))"
				/>

				<p v-if="state.meta.errors[0]">
					{{ state.meta.errors[0] }}
				</p>
			</form.Field>

			<button
				type="button"
				:disabled="people.length <= MIN_ITEMS"
				@click="removePerson(index)"
			>
				Remove this item
			</button>
		</div>

		<button
			type="button"
			:disabled="people.length >= MAX_ITEMS"
			@click="addPerson"
		>
			Add another item
		</button>

		<button type="submit">
			Submit
		</button>

		<pre v-if="submittedValue">{{ submittedValue }}</pre>
	</form>
</template>
