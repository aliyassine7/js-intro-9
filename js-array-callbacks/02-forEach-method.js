const names = ['John', 'Jane', 'Alex', 'Max'];

// Print each name in the array

names.forEach(name => console.log(name));

// Output first letter of each name

names.forEach(name => console.log(name[0]));


// Print each name uppercased
names.forEach(name => console.log(name.toUpperCase()));


// Output each name that starts with 'J'

names.forEach(name => name.toLowerCase().startsWith('j') ? console.log(name) : null);

names.forEach(name => {
    if(name.toLowerCase().startsWith('j')) console.log(name);
});


// Count how many names have 4 letters -> 3
// This task is better to solve with reduce method
let count4LetterName = 0;

names.forEach(name => {
    if(name.length === 4) count4LetterName++;
});

console.log(count4LetterName);


// Print each number
const numbers = [5, 10, 3, 0, -2];

numbers.forEach(number => console.log(number));


// Print true for even numbers and false for odd numbers
numbers.forEach(number => console.log(number % 2 === 0));


// Create a new array that multiplies and stores each of the numbers element by 3 -> [ 15, 30, 9, 0, -6 ]
// We can solve this with map() as well
const multiplyBy3 = [];

numbers.forEach(number => multiplyBy3.push(number * 3));

console.log(multiplyBy3);


// Create a new array that stores even number -> [10, 0, -2]
// We can also use filter() to solve
const newArr = [];

numbers.forEach(number => number % 2 === 0 ? newArr.push(number) : null);

console.log(newArr);

