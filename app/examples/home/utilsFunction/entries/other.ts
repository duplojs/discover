interface Input {
	name: string;
	age?: number;
}

const input: Input = {
	name: "Mathieu",
	age: undefined,
};

const entries = Object.entries(input);

void entries;
//   ^?
