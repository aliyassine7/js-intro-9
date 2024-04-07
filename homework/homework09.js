/* Task 1
Write a function named fizzBuzz1() which takes a number argument and returns "Fizz" if 
the given number is divisible by 3, "Buzz" if the number is divisible by 5, and "FizzBuzz" 
if the number is divisible by both 3 and 5. Otherwise, it will return the number itself.
*/

const fizzBuzz1 = num => {

}

console.log(fizzBuzz1(0)); // 		-> "FizzBuzz"
console.log(fizzBuzz1(1)); // 		-> 1
console.log(fizzBuzz1(3)); // 		-> "Fizz"
console.log(fizzBuzz1(5)); // 		-> "Buzz"
console.log(fizzBuzz1(30)); // 	    -> "FizzBuzz"
console.log(fizzBuzz1(10)); // 	    -> "Buzz"
console.log(fizzBuzz1(15)); // 	    -> "FizzBuzz"
console.log(fizzBuzz1(-15)); //	    -> "FizzBuzz"


/* Task 2
Write a function named fizzBuzz2() which takes a number argument 
and returns and array consist of numbers starting from 1 to given number. However, 
it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided by 5, 
and "FizzBuzz" for the numbers divided both by 3 and 5.
*/

const fizzBuzz2 = num => {
    
}

console.log(fizzBuzz2(3)); // 		-> [ 1, 2, 'Fizz' ]
console.log(fizzBuzz2(5)); // 		-> [ 1, 2, 'Fizz', 4, 'Buzz' ]
console.log(fizzBuzz2(10)); // 	    -> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]​
console.log(fizzBuzz2(15)); // 	    -> [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]​
console.log(fizzBuzz2(2)); // 		-> [ 1, 2 ]


/* Task 3
Write a function named findSumNumbers() which takes a string 
argument and returns sum of the all numbers appears in the string.
*/

console.log(findSumNumbers("abc$")); // -> 0
console.log(findSumNumbers("a1b4c  6#")); // -> 11
console.log(findSumNumbers("ab110c045d")); // -> 155
console.log(findSumNumbers("525")); // -> 525
console.log(findSumNumbers("3 for 10 dollars")); // -> 13

/* Task 4
Write a function named findBiggestNumber() which takes a string 
argument and returns the biggest number appears in the string.
*/

console.log(findBiggestNumber("abc$")); // -> 0
console.log(findBiggestNumber("a1b4c  6#")); // -> 6
console.log(findBiggestNumber("ab110c045d")); // -> 110
console.log(findBiggestNumber("525")); // -> 525
console.log(findBiggestNumber("3 for 10 dollars")); // -> 10


/* Task 5
Write a function named countOccurrencesOfCharacters() which takes a string 
argument and returns the count of repeated characters in the String.​

NOTE: If given String is empty, then return empty String.​
NOTE: It is case sensitive.
*/

console.log(countOccurrencesOfCharacters("")); // 		-> ""
console.log(countOccurrencesOfCharacters("abc")); // 	-> "1a1b1c"
console.log(countOccurrencesOfCharacters("abbcca")); // -> "1a2b2c1a"
console.log(countOccurrencesOfCharacters("aaAAa")); // 	-> "2a2A1a”
console.log(countOccurrencesOfCharacters("www")); // 	-> "3w"


/* Task 6
Write a function named fibonacciSeries1() which takes a number n 
argument and returns the n series of Fibonacci numbers as an array. ​
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
*/

console.log(fibonacciSeries1(3)); // 	-> [0, 1, 1]
console.log(fibonacciSeries1(5)); // 	-> [0, 1, 1, 2, 3]
console.log(fibonacciSeries1(7)); // 	-> [0, 1, 1, 2, 3, 5, 8]
console.log(fibonacciSeries1(8)); // 	-> [0, 1, 1, 2, 3, 5, 8, 13]
console.log(fibonacciSeries1(1)); // 	-> [0]
console.log(fibonacciSeries1(2)); // 	-> [0, 1]


/* Task 7
Write a function named fibonacciSeries2() which takes a number n 
argument and returns the nth series of Fibonacci number as a number.
REMEMBER: Fibonacci series = 0, 1, 1, 2, 3, 5, 8, 13, 21
*/

console.log(fibonacciSeries2(2)); // 	-> 1
console.log(fibonacciSeries2(4)); // 	-> 2
console.log(fibonacciSeries2(8)); // 	-> 13
console.log(fibonacciSeries2(9)); // 	-> 21
console.log(fibonacciSeries2(1)); // 	-> 0


/* Task 8
Write a function named findUniques() which takes two array of number arguments 
and returns the array which has only the unique values from both given arrays.
NOTE: If both arrays are empty, then return an empty array.​
NOTE: If one of the array is empty, then return unique values from the other array.
*/

console.log(findUniques([], [])); // -> []
console.log(findUniques([], [1, 2, 3, 2])); // 	-> [1, 2, 3]
console.log(findUniques([1, 2, 3, 4], [3, 4, 5, 5])); // -> [1, 2, 5]
console.log(findUniques([8, 9], [9, 8, 9])); // -> []
console.log(findUniques([-1, -2], [1, 2])); // -> [-1, -2, 1, 2]


/* Task 9
Write a function named isPowerOf3() which takes a number argument and 
returns true if given number is equal to 3 power of the X. Otherwise, return false.​
NOTE: Numbers that are power of 3 = 1, 3, 9, 27, 81, 243….
NOTE: Ignore negative scenarios.
*/

console.log(isPowerOf3(1)); // 	-> true
console.log(isPowerOf3(2)); // 	-> false
console.log(isPowerOf3(3)); // 	-> true
console.log(isPowerOf3(27)); // -> true
console.log(isPowerOf3(100)); // -> false
console.log(isPowerOf3(81)); // -> true
console.log(isPowerOf3(9)); // 	-> true
