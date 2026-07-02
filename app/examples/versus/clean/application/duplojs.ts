import { C } from "@duplojs/utils";
// ---cut-start---
import type { User } from "../domain/duplojs";
// ---cut-end---

interface UserPort {
	find(id: User.Id): Promise<C.Maybe<User.Entity>>;
}

export const UserPort = C.createPort<UserPort>();

export const FindUserUseCase = C.createUseCase(
	{ UserPort },
	({
		userPort,
	}) => async(input: { userId: User.Id }) => {
		const user = await userPort.find(input.userId);

		return user;
	},
);
