import { Book, Client } from "@domains/entities";
import { E, O, pipe } from "@duplojs/utils";

export function clientBorrowBook(
	client: Client.Entity & Client.CanRent,
	book: Book.Entity & Book.Available,
) {
	const borrowedBook = pipe(
		book,
		Book.Entity.update({ currentBorrowerId: client.id }),
	);

	const { location } = Client.getAvailableLocation(client);
	const updatedClient = pipe(
		client,
		Client.Entity.update({
			borrowedBooks: O.override(
				client.borrowedBooks,
				{ [location]: book.id },
			),
		}),
	);

	return E.right(
		"client-borrow-book",
		{
			book: borrowedBook,
			client: updatedClient,
		},
	);
}
