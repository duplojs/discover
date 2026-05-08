import { D, DPE } from "@duplojs/utils";
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
});


const verifiedToken = await tokenHandler.verify("receive-token");
//    ^?
