// Impossible to type
const body = await fetch("http://example.com/api/users/1")
	.then((value) => value.json());

void body;
//   ^?
