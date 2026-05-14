import { ClientRepository, BookRepository } from "@applications/repositories";
import { clientBorrowBook } from "@domains/aggregates";
import { type Book, type Client } from "@domains/entities";
import { C, promiseObject } from "@duplojs/utils";

interface Input {
	client: Client.Entity & Client.CanRent;
	book: Book.Entity & Book.Available;
}

export const ClientBorrowBookUseCase = C.createUseCase(
	{
		BookRepository,
		ClientRepository,
	},
	({
		bookRepository,
		clientRepository,
	}) => ({ book, client }: Input) => {
		const {
			book: borrowBook,
			client: renterClient,
		} = clientBorrowBook(client, book);

		return promiseObject({
			book: bookRepository.save(borrowBook),
			client: clientRepository.save(renterClient),
		});
	},
);
