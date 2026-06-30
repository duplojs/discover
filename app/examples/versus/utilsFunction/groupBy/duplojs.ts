import { A } from "@duplojs/utils";

// ---cut-start---
interface Book {
	type: "book";
	title: "superBook";
	pageQuantity: number;
}

interface Care {
	type: "car";
	model: string;
	wheel: number;
}

interface Computer {
	type: "computer";
	screens: number;
}
// ---cut-end---
const product: (Book | Care | Computer)[] = [];

const result = A.group(
	product,
	(product, { output }) => product.type === "book"
		? output(product.type, product)
		: output("other", product),
);

void result;
//   ^?
