import { ClientRepository } from "@applications/repositories";
import { C } from "@duplojs/utils";

export const clientRepository = ClientRepository.createImplementation({
	findOne: (id) => Promise.resolve(C.none("Client")),
	save: (entity) => Promise.resolve(entity),
});
