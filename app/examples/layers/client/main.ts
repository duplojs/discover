import { createHttpClient } from "@duplojs/http/client";
import type { Routes } from "./types";

const httpClient = createHttpClient<Routes>({
	baseUrl: "https://duplojs.dev",
});

const result = await httpClient
	.post(
		"/clients/{clientId}/give-back-book",
		{
			params: { clientId: "bookId" },
			body: { bookId: "bookId" },
		},
	)
	.whenInformation(
		"client.giveBackBook",
		() => {

			/* ... */
		},
	)
	.iWantInformation("client.giveBackBook");
