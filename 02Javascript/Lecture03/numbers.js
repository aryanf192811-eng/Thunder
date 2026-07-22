// Lecture 03: Numbers and Math

// Basic Number usage
let integerNum = 42;
let floatNum = 3.14159;

// The Number Object (though usually primitives are preferred)
let numObj = new Number(10);
let primitiveNum = 10;

console.log("numObj == primitiveNum:", numObj == primitiveNum); // true (value comparison)
console.log("numObj === primitiveNum:", numObj === primitiveNum); // false (type comparison)

// NaN (Not-a-Number) and Infinity
let invalidMath = 0 / 0;
let infinityMath = 10 / 0;

console.log("0 / 0 is:", invalidMath); // NaN
console.log("10 / 0 is:", infinityMath); // Infinity
console.log("Type of NaN is:", typeof invalidMath); // "number"

// Using Math object
console.log("Round 3.14:", Math.round(3.14));
console.log("Random number between 0 and 1:", Math.random());
console.log("Square root of 16:", Math.sqrt(16));
