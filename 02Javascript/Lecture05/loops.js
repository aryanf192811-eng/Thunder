// Lecture 05: Loops

// For loop: Printing Hello World 10 times
for (let i = 1; i <= 10; i++) {
    console.log("Hello World: " + i);
}

// Sum of first 50 numbers using a loop
let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += i;
}
console.log("Sum of first 50 numbers is:", sum);

// The mathematical formula for sum of N numbers: N * (N + 1) / 2
let n = 50;
let formulaSum = (n * (n + 1)) / 2;
console.log("Sum using formula is:", formulaSum);

// While loop example
let count = 5;
while (count > 0) {
    console.log("Countdown:", count);
    count--;
}
