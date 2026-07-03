import { C } from "@duplojs/utils";
import { clientHaveBook } from "@domains/aggregates";

export const ClientHaveBookUseCase = C.createUseCase(
	{},
	(__) => clientHaveBook,
);
