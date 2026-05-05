import { SC } from "@duplojs/server-utils";
import { DP } from "@duplojs/utils";

SC.exec(
	{
		options: [
			SC.createBooleanOption("recursive", {
				aliases: ["r"],
				description: "copy directories recursively",
			}),
			SC.createBooleanOption("force", {
				aliases: ["f"],
				description: "overwrite without prompt",
			}),
		],
		subject: DP.tuple([DP.string(), DP.string()]),
	},
	({ subject, options }) => {
		void subject;
		//     ^?
		void options;
		//     ^?
	},
);

const bb = "";

process.exit(1);

const tt = "";
