import { type User, type UserId } from "../domain/other";
// ---cut---

export interface UserRepository {
	find(id: UserId): Promise<User | null>;
}

export class FindUserUseCase {
	public constructor(
		private readonly userRepository: UserRepository,
	) {}

	public async execute(input: { userId: UserId }): Promise<User | null> {
		const user = await this.userRepository.find(input.userId);

		return user;
	}
}
