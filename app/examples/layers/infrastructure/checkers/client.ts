import type { Client } from "@domains/entities";
import { createPresetChecker, ResponseContract, useCheckerBuilder } from "@duplojs/http";
import { E, pipe } from "@duplojs/utils";
import { clientPort } from "infrastructure/adapters/ports";

export const checkClientExist = useCheckerBuilder()
	.handler(
		async(clientId: Client.Id, { output }) => {
			const result = await clientPort.findOne(clientId);

			return pipe(
				result,
				E.matchInformation({
					"none-Client": () => output("client.notExist", null),
					"some-Client": (client) => output("client.exist", client),
				}),
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
