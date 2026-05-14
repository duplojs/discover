import type { Book } from "@domains/entities";
import { createPresetChecker, ResponseContract, useCheckerBuilder } from "@duplojs/http";
import { useCases } from "../adapters";
import { E, pipe } from "@duplojs/utils";

export const checkBookExist = useCheckerBuilder()
	.handler(
		async(bookId: Book.Id, { output }) => {
			const result = await useCases.findOneBookUseCase({ bookId });

			return pipe(
				result,
				E.whenIsRight((book) => output("book.exist", book)),
				E.whenIsLeft(() => output("book.notExist", null)),
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
