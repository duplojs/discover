import type { Client } from "@domains/entities";
import { createPresetChecker, ResponseContract, useCheckerBuilder } from "@duplojs/http";
import { useCases } from "../adapters";
import { E, pipe } from "@duplojs/utils";

export const checkClientExist = useCheckerBuilder()
	.handler(
		async(clientId: Client.Id, { output }) => {
			const result = await useCases.findOneClientUseCase({ clientId });

			return pipe(
				result,
				E.whenIsRight((client) => output("client.exist", client)),
				E.whenIsLeft(() => output("client.notExist", null)),
			);
		},
	);

export const iWantClientExist = createPresetChecker(
	checkClientExist,
	{
		result: "client.exist",
		otherwise: ResponseContract.notFound("client.notExist"),
	},
);
