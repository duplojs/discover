import { type Client } from "@domains/entities";
import { C } from "@duplojs/utils";

export interface ClientRepository {
	save<T extends Client.Entity>(entity: T): Promise<T>;
	findOne(clientId: Client.Id): Promise<C.Maybe<Client.Entity>>;
}

export const ClientRepository = C.createRepository<ClientRepository>();
