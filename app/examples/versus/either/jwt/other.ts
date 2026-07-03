import JWT from "jsonwebtoken";

// Only those who have experienced it know
// that this function can cause an error.
const result = JWT.verify("receive-token", "key");
//    ^?
