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
// ---cut---
const product: (Book | Care | Computer)[] = [];

const result = Object.groupBy(
	product,
	(product) => product.type === "book"
		? product.type
		: "other",
);

void result;
//   ^?
