const numbers = [-5, 0, 5, 10, 23, -10];

// find if some of these number are divisble by 5 -> true
// check if every element is positive -> false
// check if some elements are negative -> true

console.log(numbers.some(num => num % 5 === 0));
console.log(numbers.every(num => num % 2 === 0));
console.log(numbers.some(num => num < 0));