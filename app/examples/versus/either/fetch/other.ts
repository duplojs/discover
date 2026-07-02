// No obligation to handle errors
const response = await fetch("http://example.com/api/users");
const body = await response.json();

try {
	const response = await fetch("http://example.com/api/posts");
	const body = await response.json();
} catch (error: unknown) {
	console.log(error);
}
