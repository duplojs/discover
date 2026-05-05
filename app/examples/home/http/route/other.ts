import express from "express";

// ---cut-start---
declare function createPost(userId: any, post: any): Promise<void>;
// ---cut-end---
const app = express();

app.get("/users/:userId/posts", express.json(), async(req, res) => {
	await createPost(req.params.userId, req.body);

	res.status(204).send("Hello World");
});
