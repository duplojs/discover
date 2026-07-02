import { D, DPE, E, when } from "@duplojs/utils";
import { Signer, createTokenHandler } from "@duplojs/json-web-token";


const tokenHandler = createTokenHandler({
	// ---cut-start---
	maxAge: D.createTime(15, "minute"),
	signer: Signer.createHS256({
		secret: "my-secret",
	}),
	customPayloadShape: {
		userId: DPE.string(),
	},
	// ---cut-end---
	// config
});


const verifiedToken = when(
	await tokenHandler.verify("receive-token"),
	E.isLeft,
	(left) => {
		// Do something with the error
		return E.left("token-verify-error");
	},
);

