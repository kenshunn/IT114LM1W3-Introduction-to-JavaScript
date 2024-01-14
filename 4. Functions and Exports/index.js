/*
    Resources:
    - MDN on Functions: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
    - JavaScript Tutorial on Functions: https://javascript.info/function-basics
    - freeCodeCamp on Functions: https://www.freecodecamp.org/news/what-is-a-function-javascript-function-examples/
*/

// Todo 4.1 Declare a function named 'greet' that takes one parameter 'name' and displays a greeting
// Then, Call the 'greet' function with your name as the argument
// Your code here
function greet(name){
    console.log("Welcome, "+name)
}
greet("kenshunn")

// Checkpoint 4.1 What is the difference between a function declaration and a function expression?
// Answer: Function declaration is to declare or define what the function does by setting its name, while function expression is like whats inside a function that is going to be used.

// Todo 4.2 Declare a function expression named 'calculateArea' that takes the length and width of a rectangle and returns its area
// Then, Call the 'calculateArea' function with any length and width as arguments
// Your code here
function calculateArea(length,width){
    return length*width
}
console.log(calculateArea(10,15))

// Checkpoint 4.2 What is a callback function? Provide an example.
// Answer: A callback function is a function that is passed onto another function as an argument.

function times2(value){
    return value*2
}
function isEven(value,callback){
    let num = callback(value)
    return num % 2 === 0;
}
console.log(isEven(5,times2))

// Todo 4.3 Declare a higher-order function named 'modifyArray' that takes an array and a function as parameters. The function should modify each element in the array using the provided function and return the modified array.
// Then, Call the 'modifyArray' function with the 'numbers' array and a function that increments each number by 1
// Useful Tutorial: https://youtu.be/H4awPsyugS0?si=7wC1B7whXVkG8X5l
// Your code here
let numbers = [1,2,3,4,5]
function modifyArray(array, callback){
    for(let i in array){
        array[i] = callback(array[i])
    }
}
function addOne(value){
    return value+=1
}
modifyArray(numbers,addOne)
console.log(numbers)

// Todo 4.4 See mathUtils.js for the instructions to create the add method and PI constant.
// Then, import and call the add method here and display the value of the PI constant
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here
import { add , PI } from "./mathUtils"

// Todo 4.5 See isPalindrome.js for the instructions to create the isPalindrome method.
// Then, import and call the isPalindrome method here
// Useful Tutorial: https://youtu.be/qgRUr-YUk1Q?si=ceAaeHJfCYCmeNWx
// Your code here

// Checkpoint 4.3 What does the require function and module.exports variable do?
// Should we use it over the import and export keywords? Why? Research your answer.
// Answer: 
