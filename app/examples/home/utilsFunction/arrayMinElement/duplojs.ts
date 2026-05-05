import { A } from "@duplojs/utils";
const superArray: string[] = [];

if (A.minElements(superArray, 1)) {
	const [element] = superArray;
	//     ^?
}
