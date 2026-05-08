import { C } from "@duplojs/utils";
// ---cut-start---
import type { User } from "../domain/duplojs";
// ---cut-end---

interface UserRepository {
	find(id: User.Id): Promise<C.Maybe<User.Entity>>;
}
const UserRepository = C.createRepository<UserRepository>();

export const FindUserUseCase = C.createUseCase(
	{ UserRepository },
	({
		userRepository,
	}) => async(input: { userId: User.Id }) => {
		const user = await userRepository.find(input.userId);

		return user;
	},
);
