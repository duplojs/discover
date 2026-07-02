import { E } from "@duplojs/utils";
import { ResponseContract, useRouteBuilder } from "@duplojs/http";
import { Book, Client } from "@domains/entities";
import { useCases } from "@infrastructure/adapters";
import { iWantBookExist } from "@infrastructure/checkers/book";
import { iWantClientExist } from "@infrastructure/checkers/client";

useRouteBuilder("POST", "/clients/{clientId}/give-back-book")
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
	.handler(
		[
			ResponseContract.conflict("book.isNotBorrowed"),
			ResponseContract.forbidden("client.isNotBorrower"),
			ResponseContract.conflict("client.haveNotBook"),
			ResponseContract.noContent("client.giveBackBook"),
		],
		async({ book, client }, { response }) => {
			const result = await E.rightPipe(
				E.keepAsRightByInformation(
					useCases.bookIsBorrowedUseCase(book),
					"book-is-borrow",
				),
				(borrowedBook) => useCases.clientHaveBookUseCase(
					client,
					borrowedBook,
				),
				useCases.clientGiveBackBookUseCase,
			);


			return E.matchInformation(
				result,
				{
					"book-is-available": () => response("book.isNotBorrowed"),
					"client-have-not-book": () => response("client.haveNotBook"),
					"client-is-not-borrower": () => response("client.isNotBorrower"),
					success: () => response("client.giveBackBook"),
				},
			);
		},
	);
