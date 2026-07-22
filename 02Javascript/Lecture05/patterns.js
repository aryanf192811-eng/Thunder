// Lecture 05: Patterns and Character printing

// Printing a simple right-angled triangle of stars
console.log("Star Pattern:");
let rows = 5;
for (let j = 1; j <= rows; j++) {
    let str = "";
    for (let i = 1; i <= j; i++) {
        str += "*";
    }
    console.log(str);
}

// Printing alphabets (a to z) using ASCII codes
console.log("\nAlphabets a-z:");
for (let i = 97; i <= 122; i++) {
    // String.fromCharCode converts an ASCII number to its character equivalent
    // 97 is 'a', 122 is 'z'
    console.log(String.fromCharCode(i));
}

// Printing alphabets (A to Z)
console.log("\nAlphabets A-Z:");
for (let i = 65; i <= 90; i++) {
    // 65 is 'A', 90 is 'Z'
    console.log(String.fromCharCode(i));
}
