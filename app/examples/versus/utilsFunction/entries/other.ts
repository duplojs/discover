interface Input {
	name: string;
	age?: number;
}

const input: Input = {
	name: "Mathieu",
	age: undefined,
};

const entries = Object.entries(input);

// It's not wrong, but it's crap.
void entries;
//   ^?
