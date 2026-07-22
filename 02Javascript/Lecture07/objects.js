// Lecture 07: Objects in JavaScript

// Creating a basic object to store structured data
const user = {
    name: "Rohit",
    age: 20,
    email: "rohit@example.com",
    amount: 420
};

// Accessing object properties
console.log("User Name:", user.name);        // Dot notation (recommended)
console.log("User Email:", user["email"]);   // Bracket notation (useful for dynamic keys)

// Complex object with nested objects and arrays
const customer = {
    name: "Mohit",
    age: 22,
    city: "Delhi",
    hobbies: ["Cricket", "Coding", "Reading"],
    address: {
        pincode: 110001,
        street: "Main St"
    }
};

console.log("Customer City:", customer.city);
console.log("Customer Pincode:", customer.address.pincode);
console.log("First Hobby:", customer.hobbies[0]);

// Object Destructuring (ES6) - extracting properties into distinct variables
const { name, age, city } = customer;
console.log(`Destructured Data -> Name: ${name}, Age: ${age}, City: ${city}`);

// Renaming variables during destructuring
const { email: userEmail, amount: accountBalance } = user;
console.log(`User Email: ${userEmail}, Balance: ${accountBalance}`);
