declare function isUuid(arg: any): boolean;
declare function isEmail(arg: any): boolean;
// ---cut---
export class UserId {
	private constructor(
		public readonly value: string,
	) {}

	public static create(value: string): UserId {
		if (!isUuid(value)) {
			throw new Error("Invalid UserId");
		}

		return new UserId(value);
	}
}

export class UserEmail {
	private constructor(
		public readonly value: string,
	) {}

	public static create(value: string): UserEmail {
		if (!isEmail(value)) {
			throw new Error("Invalid UserEmail");
		}

		return new UserEmail(value);
	}
}

export class UserAge {
	private constructor(
		public readonly value: number,
	) {}

	public static create(value: number): UserAge {
		if (!Number.isInteger(value) || value <= 0) {
			throw new Error("Invalid UserAge");
		}

		return new UserAge(value);
	}
}

export type UserProperties = {
	id: UserId;
	email: UserEmail;
	age: UserAge;
};

export class User {
	private constructor(
		private readonly properties: UserProperties,
	) {}

	public static create(properties: UserProperties): User {
		return new User(properties);
	}

	public get id(): UserId {
		return this.properties.id;
	}

	public get email(): UserEmail {
		return this.properties.email;
	}

	public get age(): UserAge {
		return this.properties.age;
	}
}
