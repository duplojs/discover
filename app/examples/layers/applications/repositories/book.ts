import { type Book } from "@domains/entities";
import { C } from "@duplojs/utils";

export interface BookRepository {
	save<T extends Book.Entity>(entity: T): Promise<T>;
	findOne(bookId: Book.Id): Promise<C.Maybe<Book.Entity>>;
}

export const BookRepository = C.createRepository<BookRepository>();
