import { ResponseContract, useRouteBuilder } from "@duplojs/http";
import { DPE } from "@duplojs/utils";

// ---cut-start---
declare function createPost(userId: any, post: any): Promise<void>;
// ---cut-end---
useRouteBuilder("POST", "/users/{userId}/posts")
	.extract({
		params: {
			userId: DPE.string(),
		},
		body: DPE.object({
			title: DPE.string(),
			content: DPE.string(),
		}),
	})
	.handler(
		ResponseContract.noContent("post.created"),
		async({ userId, body }, { response }) => {
			// You can access the body only after verification.
			await createPost(userId, body);

			return response("post.created");
		},
	);
