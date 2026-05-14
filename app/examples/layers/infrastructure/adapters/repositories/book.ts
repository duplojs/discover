import { BookRepository } from "@applications/repositories";
import { C } from "@duplojs/utils";

export const bookRepository = BookRepository.createImplementation({
	findOne: (id) => Promise.resolve(C.none("Book")),
	save: (entity) => Promise.resolve(entity),
});
