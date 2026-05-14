import { createHub, routeStore } from "@duplojs/http";
import { createHttpServer } from "@duplojs/http/node";
import { codeGeneratorPlugin } from "@duplojs/http/codeGenerator";
import { openApiGeneratorPlugin } from "@duplojs/http/openApiGenerator";

import "./routes";

const hub = createHub({ environment: "BUILD" })
	.register(routeStore.getAll())
	.plug(codeGeneratorPlugin({ outputFile: "types.d.ts" }))
	.plug(openApiGeneratorPlugin({
		outputFile: "swagger.json",
		routePath: "/swagger-ui",
	}));

await createHttpServer(
	hub,
	{
		host: "localhost",
		port: 1506,
	},
);

console.log("Server is ready !");
