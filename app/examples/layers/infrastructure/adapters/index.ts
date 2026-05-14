import { C } from "@duplojs/utils";
import * as UseCases from "@applications/useCase";
import { bookRepository } from "./repositories/book";
import { clientRepository } from "./repositories/client";

export const useCases = C.useCaseInstances(
	{
		...UseCases,
	},
	{
		bookRepository,
		clientRepository,
	},
);
