import { ClientPort } from "applications/ports";
import { C } from "@duplojs/utils";

export const clientPort = ClientPort.createImplementation({
	findOne: (id) => Promise.resolve(C.none("Client")),
	save: (entity) => Promise.resolve(entity),
});
