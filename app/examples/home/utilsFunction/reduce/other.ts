const array = [12, null, 20, 56, 19];

const result = array.reduce<
	number | null
>(
	(accumulator, element) => {
		if (
			accumulator === null
			|| element === null
		) {
			return null;
		}

		return accumulator + element;
	},
	0,
);

void result;
//   ^?
