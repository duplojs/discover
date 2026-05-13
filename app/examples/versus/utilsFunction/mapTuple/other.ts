const superTuple: [string, string, ...string[]] = ["one", "two", "three", "four"];

const result = superTuple.map((element) => element.length);

void result;
//   ^?
