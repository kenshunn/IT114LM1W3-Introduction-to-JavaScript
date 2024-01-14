/*
    Resources:
    - freeCodeCamp on Map, Reduce and Filter: https://www.freecodecamp.org/news/javascript-map-reduce-and-filter-explained-with-examples/
*/
// TODO 5.1 Use the map method to create a new array that contains the squares of all numbers in the array
const numbers = [1, 2, 4, 4, 5];
// Your code here
const squares = numbers.map((number) => number*2);
console.log(squares);

// TODO 5.2 Use the filter method to create a new array that contains only the even numbers in the array
// Your code here
const even = numbers.filter((number) => number%2 === 0);
console.log(even);
// TODO 5.3 Use the reduce method to find the sum of all numbers in the array
// Your code here
const sum = numbers.reduce((total,number) => total+number);
console.log(sum);
// TODO 5.4 Use the map method to convert all elements in the array to uppercase
const words = ['hello', 'world'];
// Your code here
const mapped = words.map((word) => word.toUpperCase());
console.log(mapped);
// TODO 5.5 Use the filter method to create a new array that contains only the words with more than four letters in the array
// Your code here
const morethan4letter = words.filter((word) => word.length > 4);
console.log(morethan4letter);
// TODO 5.6 Use the reduce method to concatenate all words in the array into a single string
// Your code here
const concatenatewords = words.reduce((string, word) => string += word);
console.log(concatenatewords)
// Checkpoint 5.1 Summarize what map, filter, and reduce do
// Answer: Map is a lot more easier to use in traversing into an array specially if theres a need to modify the given array.
// Filter stands for its name as you can use it to filter a specific array to be able to narrow down an entire array.
// Reduce works as its name, because it can concatenate an array of strings or even sum an array of numbers.