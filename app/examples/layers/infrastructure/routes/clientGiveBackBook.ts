import { Book, Client } from "@domains/entities";
import { ResponseContract, useRouteBuilder } from "@duplojs/http";
import { E, P } from "@duplojs/utils";
import { useCases } from "infrastructure/adapters";
import { iWantBookExist } from "infrastructure/checkers/book";
import { iWantClientExist } from "infrastructure/checkers/client";

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
	.cut(
		[
			ResponseContract.conflict("book.isNotBorrowed"),
			ResponseContract.forbidden("client.isNotBorrower"),
			ResponseContract.conflict("client.haveNotBook"),
		],
		async({ book, client }, { output, response }) => {
			const borrowedBook = useCases.bookIsBorrowedUseCase({ book });
			if (Book.Available.has(borrowedBook)) {
				return response("book.isNotBorrowed");
			}

			const result = await useCases.clientGiveBackBookUseCase({
				book: borrowedBook,
				client,
			});

			return P.match(result)
				.when(
					E.hasInformation("client-is-not-borrower"),
					() => response("client.isNotBorrower"),
				)
				.when(
					E.hasInformation("client-have-not-book"),
					() => response("client.haveNotBook"),
				)
				.otherwise(output);
		},
	)
	.handler(
		ResponseContract.noContent("client.giveBackBook"),
		(__, { response }) => response("client.giveBackBook"),
	);
