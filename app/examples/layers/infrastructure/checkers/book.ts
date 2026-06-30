import type { Book } from "@domains/entities";
import { createPresetChecker, ResponseContract, useCheckerBuilder } from "@duplojs/http";
import { E, pipe } from "@duplojs/utils";
import { bookPort } from "infrastructure/adapters/ports";

export const checkBookExist = useCheckerBuilder()
	.handler(
		async(bookId: Book.Id, { output }) => {
			const result = await bookPort.findOne(bookId);

			return pipe(
				result,
				E.matchInformation({
					"none-Book": () => output("book.notExist", null),
					"some-Book": (book) => output("book.exist", book),
				}),
			);
		},
	);

export const iWantBookExist = createPresetChecker(
	checkBookExist,
	{
		result: "book.exist",
		otherwise: ResponseContract.notFound("book.notExist"),
	},
);
