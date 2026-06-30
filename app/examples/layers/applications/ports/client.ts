import { type Client } from "@domains/entities";
import { C } from "@duplojs/utils";

export interface ClientPort {
	save<T extends Client.Entity>(entity: T): Promise<T>;
	findOne(clientId: Client.Id): Promise<C.Maybe<Client.Entity>>;
}

export const ClientPort = C.createPort<ClientPort>();
