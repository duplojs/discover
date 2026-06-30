import { BookPort, ClientPort } from "@applications/ports";
import { clientGiveBackBook } from "@domains/aggregates";
import { C, E, promiseObject } from "@duplojs/utils";
import type { clientHaveBook } from "domains/aggregates/clientHaveBook";

export const ClientGiveBackBookUseCase = C.createUseCase(
	{
		BookPort,
		ClientPort,
	},
	({
		bookPort,
		clientPort,
	}) => (
		input: C.GetEvidenceResult<
		typeof clientHaveBook,
			"client-with-book"
		>,
	) => E.rightPipe(
		clientGiveBackBook(input),
		({ book, client }) => promiseObject({
			client: clientPort.save(client),
			book: bookPort.save(book),
		}),
	),
);
