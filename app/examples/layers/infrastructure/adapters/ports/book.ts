import { BookPort } from "applications/ports";
import { C } from "@duplojs/utils";

export const bookPort = BookPort.createImplementation({
	findOne: (id) => Promise.resolve(C.none("Book")),
	save: (entity) => Promise.resolve(entity),
});
