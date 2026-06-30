import { Book } from "@domains/entities";
import { C } from "@duplojs/utils";

export const BookIsBorrowedUseCase = C.createUseCase(
	{},
	(__) => Book.isBorrowed,
);
