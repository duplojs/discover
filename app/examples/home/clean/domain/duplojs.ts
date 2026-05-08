import { C, DPE } from "@duplojs/utils";

export namespace User {
	export const Id = C.createNewType("UserId", DPE.string(), C.Uuid);
	export type Id = C.GetNewType<typeof Id>;

	export const Email = C.createNewType("UserEmail", DPE.string(), C.Email);
	export type Email = C.GetNewType<typeof Email>;

	export const Age = C.createNewType("UserAge", DPE.number(), C.PositiveInt);
	export type Age = C.GetNewType<typeof Age>;

	export const Entity = C.createEntity(
		"User",
		() => ({
			id: Id,
			email: Email,
			age: Age,
		}),
	);
	export type Entity = C.GetEntity<typeof Entity>;
}
