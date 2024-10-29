
// Declare variables name as string, age as number, isStudent as bool
let name = "Success";
let age = 21;
let isStudent = true;

// Log results to console
console.log("Name:", name, "| Type:", typeof name);
console.log("Age:", age, "| Type:", typeof age);
console.log("isStudent:", isStudent, "| Type:", typeof isStudent);

// Re-assign variables to new value
name = "John";
age = 17;
isStudent = false;

console.log("Name:", name, "| Type:", typeof name);
console.log("Age:", age, "| Type:", typeof age);
console.log("isStudent:", isStudent, "| Type:", typeof isStudent);

let num1 = 45; // number
let num2 = 24; // number

let x = num1 + num2;
console.log("Add: ", x, " Answer");

let x_sub = num1 - num2;
console.log("Subtract: ", x_sub);

x = num1 * num2
console.log("Multiply: ", x);

x = num1 / num2
console.log("Divide: ", x);

x = num1 % num2
console.log("Remainer: ", x);

let greeting;
greeting = "Hello, my name is " + name +  " and I am " + age + " years old."
console.log(greeting);

greeting = `Hello, my name is ${name} and I am ${age} years old.`
console.log(greeting);

const name2 = "Ojo";
// Error
/**
 * 
 * variablesAssignment.js:43 
 * Uncaught SyntaxError: 
 * Identifier 'name' 
 * has already been declared (at variablesAssignment.js:43:7)
 */

let color = "Yellow";
console.log(color);
color = "Red";
console.log(color);





