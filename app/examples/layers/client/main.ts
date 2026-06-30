import { createHttpClient } from "@duplojs/http/client";
import type { Routes } from "./types";

const httpClient = createHttpClient<Routes>({
	baseUrl: "https://duplojs.dev",
});

const result = await httpClient
	.post(
		"/clients/{clientId}/borrow-book",
		{
			params: { clientId: "bookId" },
			body: { bookId: "bookId" },
		},
	)
	.whenInformation(
		"client.borrowBook",
		() => {

			/* ... */
		},
	)
	.iWantInformation("client.borrowBook");
