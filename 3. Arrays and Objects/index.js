/*
    Resources:
    - JavaScript Tutorial on Objects: https://javascript.info/object
    - freeCodeCamp on Objects: https://www.freecodecamp.org/news/objects-in-javascript-for-beginners/
    - JavaScript Tutorial on Arrays: https://javascript.info/array
    - freeCodeCamp on Arrays: https://www.freecodecamp.org/news/javascript-array-tutorial-array-methods-in-js/
*/

let numbers = [
    1, 89, 55, 63, 29, 19,
    15, 77, 62, 68, 29, 84,
    21, 26, 49
];

// Todo 3.1 Get the first, 5th, and last items in the numbers array.
// Your code here
console.log(numbers[0],numbers[4],numbers[(numbers.length)-1])

// Todo 3.2 calculate the min, max, and the average of the numbers array
// Your code here
var min,max
var average = 0;
for(let i of numbers){
    if((min === undefined) || (min > i)){
        min = i
    } else if((max === undefined) || (max < i)){
        max = i
    }
}
for(let i of numbers){
    average+=i
}
console.log(min)
console.log(max)
console.log(average/=numbers.length)

// Checkpoint 3.1 How would you compare lists in python vs arrays in JavaScript
// Answer: I would say that arrays in JavaScript is better as it resizes and easier to use in indexing.

// Todo 3.3 Declare an object with information about IT114L (course code, name, units, number of students)
// Your code here
let IT114L ={
    coursecode: "IT114L",
    name: "Web Systems and Technologies (Laboratory)",
    units: 1,
    numstudent: 40
}

// Todo 3.4 Add professor name as one of the fields of the object. Display the value of professor name.
// Your code here
IT114L.profname = "Job Lipat"
console.log(IT114L.profname)

// Todo 3.5 Declare and array of objects with information about the courses you are taking this term
// Your code here
let courses = [
    { course: "CS107", name: "Information Management", units: 2, numstudent: 40, profname: "Dahlia De Mesa"},
    { course: "CS107L", name: "Information Management (Laboratory)", units: 1, numstudent: 25, profname: "Adomar Ilao"},
    { course: "HUM039", name: "Ethics", units: 3, numstudent: 40, profname: "Rogelio Valenzuela"},
    { course: "IT114", name: "Web Systems and Technologies", units: 2, numstudent: 37, profname: "Mark Anthony Hernandez"},
    { course: "IT114L", name: "Web Systems and Technologies (Laboratory)", units: 1, numstudent: 40, profname: "Job Lipat"},
    { course: "IT132", name: "Logic Design and Switching Theory", units: 2, numstudent: 41, profname: "Leonnel De Mesa"},
    { course: "IT132L", name: "Logic Design and Switching Theory (Laboratory)", units: 1, numstudent: 41, profname: "Leonnel De Mesa"},
    { course: "IT133", name: "Technopreneurship", units: 3, numstudent: 40, profname: "Khristian Kikuchi"}
];

// Todo 3.5 Calculate the total number of units you are taking this term using the array of objects.
// Your code here
var totalNumUnits = 0;
for(let i of courses){
    totalNumUnits+=i.units
}
console.log(totalNumUnits)

// Checkpoint 3.2 What would be the equivalent of objects in python? How would you compare them?
// Answer: The equivalent would be python dictionaries, but I would say that object in JavaScript is much more easier to handle than python dictionaries.

// Todo 3.6 Going back to the array of numbers, use the spread syntax to create a copy of the array with an additional number
// Your code here
let numberscopy = [...numbers, 78, 25]
console.log(numberscopy)
// Todo 3.7 Going back to your IT114L object, extract the course code and units using the spread operator
// Your code here
let {coursecode,units, ...rest} = IT114L
console.log(coursecode,units)
