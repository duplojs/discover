import { writeFile } from "node:fs/promises";

// No success or failure information.
const result = await writeFile("/superFile", "test", "utf-8");
//    ^?
