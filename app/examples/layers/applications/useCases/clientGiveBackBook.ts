import { BookRepository, ClientRepository } from "@applications/repositories";
import { clientGiveBackBook } from "@domains/aggregates";
import { type Book, type Client } from "@domains/entities";
import { C, E, pipe, promiseObject, whenNot } from "@duplojs/utils";

interface Input {
	client: Client.Entity;
	book: Book.Entity & Book.Borrow;
}

export const ClientGiveBackBookUseCase = C.createUseCase(
	{
		BookRepository,
		ClientRepository,
	},
	({
		bookRepository,
		clientRepository,
	}) => (input: Input) => pipe(
		clientGiveBackBook(
			input.client,
			input.book,
		),
		whenNot(
			E.isLeft,
			({ book, client }) => promiseObject({
				client: clientRepository.save(client),
				book: bookRepository.save(book),
			}),
		),
	),
);
