import { ClientRepository } from "@applications/repositories";
import { type Client } from "@domains/entities";
import { C } from "@duplojs/utils";

interface Input {
	clientId: Client.Id;
}

export const FindOneClientUseCase = C.createUseCase(
	{ ClientRepository },
	({
		clientRepository,
	}) => ({ clientId }: Input) => clientRepository.findOne(clientId),
);
