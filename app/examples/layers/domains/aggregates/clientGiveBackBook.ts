import { Book, Client } from "@domains/entities";
import { type C, O, pipe, E } from "@duplojs/utils";
import type { clientHaveBook } from "./clientHaveBook";

export function clientGiveBackBook(
	{
		borrowedBook,
		client,
		location,
	}: C.GetEvidenceResult<
		typeof clientHaveBook,
		"client-with-book"
	>,
) {
	const updatedClient = pipe(
		client,
		Client.Entity.update({
			borrowedBooks: O.override(
				client.borrowedBooks,
				{ [location]: null },
			),
		}),
	);

	const availableBook = pipe(
		borrowedBook,
		Book.Entity.update({ currentBorrowerId: null }),
	);

	return E.right(
		"give-back-book",
		{
			client: updatedClient,
			book: availableBook,
		},
	);
}
