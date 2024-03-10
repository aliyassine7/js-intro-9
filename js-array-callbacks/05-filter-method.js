const numbers = [10, 5, 100, 77, 50, 65, 0];

// Find all the numbers that are 50 or more

const newNumbers = numbers.filter(number => number >= 50);

console.log(newNumbers);

/*
Create a method which takes an array as argument and returns all the even numbers from the original
array as a new array

evens([1, 5, 2, 0, 6, 7])   -> [2, 0, 6]
evens([4, 5, 2])            -> [4, 2]
*/

function evens(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(evens([1, 5, 2, 0, 6, 7])); // [2, 0, 6]
console.log(evens([4, 5, 2])); // [4, 2]


const fruits = [ 'Orange', 'Apple', 'Red apple', 'Pineapple', 'Kiwi'];

// Find all the fruits that has apple -> [ 'Apple', 'Red apple', 'Pineapple' ]
// Count how many elements has a      -> 4
// Count how many elements has i      -> 2

const newFruits = fruits.filter(fruit => fruit.toLowerCase().includes('apple'));
const countA = fruits.filter(fruit => fruit.toLowerCase().includes('a')).length;
const countI = fruits.filter(fruit => fruit.toLowerCase().includes('i')).length;

console.log(newFruits);
console.log(countA);
console.log(countI);