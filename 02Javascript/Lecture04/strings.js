// Lecture 04: Strings and String Methods

let greeting = "Hello";
let target = "World";

// Concatenation
let message = greeting + " " + target;
console.log(message);

// Template Literals (ES6)
let modernMessage = `${greeting} ${target}!`;
console.log(modernMessage);

// Common String Methods
let sentence = "The quick brown fox jumps over the lazy dog.";

console.log("Length of sentence:", sentence.length);
console.log("To Uppercase:", sentence.toUpperCase());
console.log("Contains 'fox'?", sentence.includes("fox"));
console.log("Index of 'brown':", sentence.indexOf("brown"));
console.log("Slice first 9 characters:", sentence.slice(0, 9));

// Splitting a string into an array
let wordsArray = sentence.split(" ");
console.log("Split by space:", wordsArray);

// Joining an array back to a string
let joinedString = wordsArray.join("-");
console.log("Joined by dash:", joinedString);
