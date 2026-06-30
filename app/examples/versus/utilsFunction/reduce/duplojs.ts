import { A } from "@duplojs/utils";

const array = [12, null, 20, 56, 19];

const result = A.reduce(
	array,
	0,
	({ lastValue, element, next, exit }) => element === null
		? exit(null)
		: next(lastValue + element),
);

void result;
//   ^?
