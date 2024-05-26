/* Task 1
Write a function named repeatingX() which takes a string argument and returns
true if the letter x is followed by another x. Otherwise, return false.

NOTE: This method should be case-insensitive.
*/

const repeatingX = str => {
  return str.toLowerCase().split('').some((el, index, arr) => el === 'x' && arr[index + 1] === 'x')
}

console.log(repeatingX("xTechxGlobalx")); // false
console.log(repeatingX("Hello Xx World")); // true
console.log(repeatingX("x x")); // false
console.log(repeatingX("")); // false
console.log(repeatingX("xxxxx")); // true


/* Task 2
Write a function named isPerfectSquare() which takes a number as an argument and checks
if it is a perfect square. It returns true if the number is a perfect square and false otherwise.

NOTE: A perfect square is a number that can be expressed as the product of an 
integer by itself or as the second exponent of an integer. For example, 25 is 
a perfect square because it is the product of integer 5 by itself, 5 × 5 = 25. 
However, 21 is not a perfect square number because it cannot be expressed as 
the product of two same integers.
*/

const isPerfectSquare = num => Math.sqrt(num) % 1 === 0 ? true : false

console.log(isPerfectSquare(25)); // true
console.log(isPerfectSquare(24)); // false
console.log(isPerfectSquare(0)); // true
console.log(isPerfectSquare(1)); // true
console.log(isPerfectSquare(-1)); // false
console.log(isPerfectSquare(144)); // true