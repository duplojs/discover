import { Book, Client } from "@domains/entities";
import { ResponseContract, useRouteBuilder } from "@duplojs/http";
import { useCases } from "infrastructure/adapters";
import { iWantBookExist } from "infrastructure/checkers/book";
import { iWantClientExist } from "infrastructure/checkers/client";

useRouteBuilder("POST", "/clients/{clientId}/borrow-book")
	.extract({
		params: {
			clientId: Client.Id.toExtractParser(),
		},
		body: {
			bookId: Book.Id.toExtractParser(),
		},
	})
	.presetCheck(
		iWantClientExist.indexing("client"),
		({ clientId }) => clientId,
	)
	.presetCheck(
		iWantBookExist.indexing("book"),
		({ bookId }) => bookId,
	)
	.cut(
		[
			ResponseContract.conflict("book.alreadyBorrowed"),
			ResponseContract.conflict("client.haveNotFreeLocation"),
		],
		({ book, client }, { output, response }) => {
			const availableBook = useCases.bookIsBorrowedUseCase({ book });
			if (Book.Borrow.has(availableBook)) {
				return response("book.alreadyBorrowed");
			}

			const clientWithLocation = useCases.clientCanRentUseCase({ client });
			if (Client.CanNotRent.has(clientWithLocation)) {
				return response("client.haveNotFreeLocation");
			}

			return output({
				availableBook,
				clientWithLocation,
			});
		},
	)
	.handler(
		ResponseContract.noContent("client.borrowBook"),
		async({ availableBook, clientWithLocation }, { response }) => {
			await useCases.clientBorrowBookUseCase({
				book: availableBook,
				client: clientWithLocation,
			});

			return response("client.borrowBook");
		},
	);
