import { type User, type UserId } from "../domain/other";
// ---cut---

export interface UserPort {
	find(id: UserId): Promise<User | null>;
}

export class FindUserUseCase {
	public constructor(
		private readonly userPort: UserPort,
	) {}

	public async execute(input: { userId: UserId }): Promise<User | null> {
		const user = await this.userPort.find(input.userId);

		return user;
	}
}
