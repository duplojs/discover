import { writeFile } from "node:fs/promises";

const result = await writeFile("/superFile", "test", "utf-8");
//    ^?
