// reverse() method
const fruits = ['Apple', 'Orange', 'Grapes', 'Banana'];

const reverseFruits = fruits.reverse();

console.log(reverseFruits); // [ 'Banana', 'Grapes', 'Orange', 'Apple' ]
console.log(fruits) // [ 'Banana', 'Grapes', 'Orange', 'Apple' ]

// It changes the original copy

/* INTERVIEW QUESTION
How to have your array reversed keeping the original order
*/

const numbers = [1, 2, 3, 4, 5];

const numbersCopy = [...numbers]; // completely a new array

numbersCopy.reverse();

console.log(numbers);
console.log(numbersCopy);