import { createHttpClient } from "@duplojs/http/client";
import { E } from "@duplojs/utils";

const client = createHttpClient({ baseUrl: "http://example.com" });

const response = await client.get("/api/users");


if (E.isRight(response)) {
	void response;
	//    ^?
}

if (E.isLeft(response)) {
	void response;
	//    ^?
}

if (E.hasInformation(response, "request-error")) {
	void response;
	//    ^?
}
