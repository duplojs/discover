import { createHttpClient } from "@duplojs/http/client";
import { E } from "@duplojs/utils";

type Routes = (
	// ---cut-start---
	| {
		method: "GET";
		path: "/users/{userId}";
		params: {
			userId: number;
		};
		responses: {
			code: "422";
			information: "extract-error";
			body?: undefined;
		} | {
			code: "200";
			information: "users.find";
			body: {
				id: number;
				name: string;
				age: number;
			};
		};
	}
	// ---cut-end---
);

const httpClient = createHttpClient<Routes>({
	baseUrl: "http://example.com/api",
});

const response = await httpClient
	.get("/users/{userId}", { params: { userId: "1" } })
	.whenInformation("users.find", ({ body }) => {
		void body;
		//   ^?
	})
	.iWantInformation("users.find");

if (E.isRight(response)) {
	void response;
}

if (E.isLeft(response)) {
	void response;
}
