import { Book, Client } from "@domains/entities";
import { ResponseContract, useRouteBuilder } from "@duplojs/http";
import { E } from "@duplojs/utils";
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
	.handler(
		[
			ResponseContract.conflict("book.alreadyBorrowed"),
			ResponseContract.conflict("client.haveNotFreeLocation"),
			ResponseContract.noContent("client.borrowBook"),
		],
		async({ book, client }, { response }) => {
			const result = await E.rightPipe(
				E.group({
					book: E.keepAsRightByInformation(
						useCases.bookIsBorrowedUseCase(book),
						"book-is-available",
					),
					client: E.keepAsRightByInformation(
						useCases.clientCanRentUseCase(client),
						"client-can-rent",
					),
				}),
				useCases.clientBorrowBookUseCase,
			);

			return E.matchInformation(
				result,
				{
					"book-is-borrow": () => response("book.alreadyBorrowed"),
					"client-can-not-rent": () => response("client.haveNotFreeLocation"),
					success: () => response("client.borrowBook"),
				},
			);
		},
	);
