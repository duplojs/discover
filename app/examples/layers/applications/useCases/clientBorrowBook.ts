import { BookPort, ClientPort } from "@applications/ports";
import { clientBorrowBook } from "@domains/aggregates";
import { type Book, type Client } from "@domains/entities";
import { C, E, promiseObject } from "@duplojs/utils";

interface Input {
	client: Client.Entity & Client.CanRent;
	book: Book.Entity & Book.Available;
}

export const ClientBorrowBookUseCase = C.createUseCase(
	{
		BookPort,
		ClientPort,
	},
	({
		bookPort,
		clientPort,
	}) => ({ book, client }: Input) => E.rightPipe(
		clientBorrowBook(client, book),
		({ book, client }) => promiseObject({
			book: bookPort.save(book),
			client: clientPort.save(client),
		}),
	),
);
