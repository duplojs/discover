import { C } from "@duplojs/utils";
import type { User } from "../domain/duplojs";

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
