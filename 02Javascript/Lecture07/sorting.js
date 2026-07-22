// Lecture 07: Sorting Arrays

// Sorting an array of strings
// Array.sort() sorts elements in ascending order by default based on ASCII character codes
const names = ["Rohit", "Mohan", "Sohan", "Yash", "Rajat", "rohit"];

console.log("Original names:", names);
names.sort();
console.log("Sorted names:", names); 
// Note: 'rohit' (lowercase) will appear at the end because lowercase letters 
// have higher ASCII values than uppercase letters (e.g., 'R' is 82, 'r' is 114)

names.reverse(); // Reverses the array in place
console.log("Reversed names:", names);

// Sorting an array of numbers
const numbers = [10, 20, 7, 101, 23, 78, 4];

console.log("Original numbers:", numbers);
numbers.sort(); 
// Be careful! Default sort converts everything to a string first, 
// so "10" and "101" come before "20" and "4".
console.log("Default sorted numbers (incorrect for math):", numbers);

// Correct way to sort numbers using a comparator function
numbers.sort((a, b) => a - b);
console.log("Properly sorted numbers (ascending):", numbers);

numbers.sort((a, b) => b - a);
console.log("Properly sorted numbers (descending):", numbers);
