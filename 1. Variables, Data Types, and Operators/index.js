/*
    Resources:
    - MDN Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators
*/

// TODO 1.1 Use the var keyword to define a variable. Log the variable to the console. Now try moving the variable declaration after you log the variable.
// Your code here
var numba1 = 1
console.log(numba1)

// TODO 1.2 Use the let keyword to define a variable.
// Your code here
let nomber = 25
console.log(nomber)
// TODO 1.3 Use the const keyword to define a variable. Try reassigning the value of the variable. What happens?
// Your code here
const nottrue = false
console.log(nottrue)

// Checkpoint 1.1 What is the difference between var, let, and const?
// Answer:  var is globally scoped that can also be change or reassign its value while let and const are not globally scoped, instead they are blocked scoped, both of them cannot be redeclared but, let's value can be reassigned.

// TODO 1.4 Try out the different arithmetic operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#arithmetic_operators
// Your code here
var num1 = 23
var num2 = 2
console.log((num1+num2),(num1%num2))
// Checkpoint 1.2 What operators did you use?
// Answer: I used the arithmetic operators addition and remainder.
// Your code here

// TODO 1.5 Try out the different string operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#string_operators
// Your code here
let mystring = "string"
console.log("my" + mystring)
let my = "my"
console.log(my+=mystring)

// Checkpoint 1.3 What operators did you use?
// Answer: I used the concatenation operator and the shorthand assignment operator.

// TODO 1.6 Try out the different logical operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
// Your code here
console.log(true && true)
console.log(true || false)
console.log(!true)
// Checkpoint 1.4 What operators did you use?
// Answer: I used the logical operators, AND, OR and NOT.


// TODO 1.7 Try out the different relational operators
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#relational_operators


// Checkpoint 1.5 What does [] == false evaluate to? Why does that happen? Research why
// Answer: [] == false evaluates to true because [] is empty which is considered as false, which means that [] == false will return as true.
// Your code here
console.log([] == false)