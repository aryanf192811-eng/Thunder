// Lecture 02: Variables and Data Types

// 'let' is block-scoped and allows reassignment
let age = 25;
console.log("Initial Age:", age);

age = 26; // Reassignment is allowed
console.log("Updated Age:", age);

// 'const' is block-scoped but does NOT allow reassignment
const birthYear = 1998;
// birthYear = 1999; // This would throw a TypeError

console.log("Birth Year:", birthYear);

// Primitive Data Types
let isStudent = true; // Boolean
let score = 95.5; // Number
let userName = "Alice"; // String
let notAssigned; // Undefined
let emptyValue = null; // Null

console.log(typeof isStudent); // "boolean"
console.log(typeof score); // "number"
console.log(typeof userName); // "string"
console.log(typeof notAssigned); // "undefined"
console.log(typeof emptyValue); // "object" (this is a known JavaScript bug/quirk)
