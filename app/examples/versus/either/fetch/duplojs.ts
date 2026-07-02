import { createHttpClient } from "@duplojs/http/client";
import { E } from "@duplojs/utils";

const client = createHttpClient({ baseUrl: "http://example.com" });

// Covers all cases exhaustively
const result = E.matchInformation(
	await client.get("/api/users"),
	{
		response: ({ body }) => {
			// Do something with the body
		},
		"request-error": ({ error }) => {
			// Do something with the error
		},
	},
);
