import { A } from "@duplojs/utils";
const superArray: string[] = [];
// The array became a tuple after the check.
if (A.minElements(superArray, 1)) {
	const [element] = superArray;
	//     ^?
}
