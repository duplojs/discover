import { C } from "@duplojs/utils";
import { type Book } from "@domains/entities";

export interface BookPort {
	save<T extends Book.Entity>(entity: T): Promise<T>;
	findOne(bookId: Book.Id): Promise<C.Maybe<Book.Entity>>;
}

export const BookPort = C.createPort<BookPort>();
