import { Client } from "@domains/entities";
import { C } from "@duplojs/utils";

export const ClientCanRentUseCase = C.createUseCase(
	{},
	(__) => Client.cantRent,
);
