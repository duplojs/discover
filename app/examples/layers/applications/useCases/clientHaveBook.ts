import { C } from "@duplojs/utils";
import { clientHaveBook } from "domains/aggregates/clientHaveBook";

export const ClientHaveBookUseCase = C.createUseCase(
	{},
	(__) => clientHaveBook,
);
