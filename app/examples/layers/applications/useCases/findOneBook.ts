import { BookRepository } from "@applications/repositories";
import { type Book } from "@domains/entities";
import { C } from "@duplojs/utils";

interface Input {
	bookId: Book.Id;
}

export const FindOneBookUseCase = C.createUseCase(
	{ BookRepository },
	({
		bookRepository,
	}) => ({ bookId }: Input) => bookRepository.findOne(bookId),
);
