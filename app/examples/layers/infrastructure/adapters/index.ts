import { C } from "@duplojs/utils";
import * as UseCases from "@applications/useCase";
import * as Repositories from "./ports";

export const useCases = C.useCaseInstances(
	{
		...UseCases,
	},
	{
		...Repositories,
	},
);
