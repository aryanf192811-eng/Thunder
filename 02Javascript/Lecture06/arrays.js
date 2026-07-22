// Lecture 06: Arrays

// Arrays allow storing multiple values in a single variable
let studentMarks = [30, 20, 11, 80, 70];
console.log("Marks:", studentMarks);

// Getting the length of an array
console.log("Number of students:", studentMarks.length);

// Accessing and modifying elements via index (0-based)
console.log("Third student's marks:", studentMarks[2]);
studentMarks[1] = 25; // Reassigning
console.log("Updated Marks:", studentMarks);

// Arrays can hold heterogenous data types in JS
let mixedData = [10, "Rohit", true, { role: "admin" }];
console.log("Mixed Data:", mixedData);

// Array Methods: push (add to end), pop (remove from end)
studentMarks.push(95, 45); // Adds 95 and 45 to the end
console.log("After push:", studentMarks);

studentMarks.pop(); // Removes the last element (45)
console.log("After pop:", studentMarks);

// Multidimensional Arrays (Arrays inside Arrays)
let matrix = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];
console.log("Element at Row 1, Col 2:", matrix[1][2]); // 60
