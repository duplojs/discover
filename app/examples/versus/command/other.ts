import { Command } from "commander";

const program = new Command();

program
	.argument("<src>", "source file or directory")
	.argument("<dest>", "destination path")
	.option("-r, --recursive", "copy directories recursively")
	.option("-f, --force", "overwrite without prompt")
	.action((src, dest, recursive, force) => {
		//      ^?
	});

program.parse();
