import { A, S } from "@duplojs/utils";

const superTuple: [string, string, ...string[]] = ["one", "two", "three", "four"];

const result = A.mapTuple(superTuple, S.length);

void result;
//   ^?
