import { Book, type Client } from "@domains/entities";
import { A, C, E, O, pipe } from "@duplojs/utils";

export function clientHaveBook(
	client: Client.Entity,
	book: Book.Entity & Book.Borrow,
) {
	const { currentBorrowerId } = Book.getCurrentBorrower(book);

	if (!C.equal(client.id, currentBorrowerId)) {
		return E.left("client-is-not-borrower", {
			client,
			book,
		});
	}

	const location = pipe(
		O.entries(client.borrowedBooks),
		A.reduce(
			A.reduceFrom(null),
			({ element: [key, bookId], next, exit }) => C.equal(bookId, book.id)
				? exit(key)
				: next(null),
		),
	);

	if (location === null) {
		return E.left("client-have-not-book", {
			client,
			book,
		});
	}

	return C.evidenceResult(
		"client-with-book",
		{
			client,
			location,
			borrowedBook: book,
		},
	);
}
