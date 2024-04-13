/* Task 1
Write a function named fizzBuzz1() which takes a number argument and returns "Fizz" if 
the given number is divisible by 3, "Buzz" if the number is divisible by 5, and "FizzBuzz" 
if the number is divisible by both 3 and 5. Otherwise, it will return the number itself.
*/

const fizzBuzz1 = num => num % 3 === 0 && num % 5 === 0 ? `FizzBuzz` : num % 3 === 0 ? `Fizz` : num % 5 === 0 ? `Buzz` : num;
// const fizzBuzz1 = num => (num % 3 === 0 ? 'Fizz' : '') + (num % 5 === 0 ? 'Buzz' : '') || num;

console.log(fizzBuzz1(0)); //  "FizzBuzz"
console.log(fizzBuzz1(1)); // 	1
console.log(fizzBuzz1(3)); // 	"Fizz"
console.log(fizzBuzz1(5)); // 	"Buzz"
console.log(fizzBuzz1(30)); // 	"FizzBuzz"
console.log(fizzBuzz1(10)); // 	"Buzz"
console.log(fizzBuzz1(15)); // 	"FizzBuzz"
console.log(fizzBuzz1(-15)); //	"FizzBuzz"


/* Task 2
Write a function named fizzBuzz2() which takes a number argument and returns 
an array that consists of numbers starting from 1 to given number. However, 
it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided by 5, 
and "FizzBuzz" for the numbers divided both by 3 and 5.
*/
// const fizzBuzz2 = (num) =>  Array.from({ length: num }, (_, i) => ((i + 1) % 3 === 0 ? 'Fizz' : '') + ((i + 1) % 5 === 0 ? 'Buzz' : '') || (i + 1));
const fizzBuzz2 = num => {
    let result = [];
    for (let i = 1; i <= num; i++) {
        result.push((i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '') || i)

        // if (i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
        // else if (i % 3 === 0) result.push('Fizz');
        // else if (i % 5 === 0) result.push('Buzz');
        // else result.push(i);
    }
    return result;
}

console.log(fizzBuzz2(3)); //  [ 1, 2, 'Fizz' ]
console.log(fizzBuzz2(5)); //  [ 1, 2, 'Fizz', 4, 'Buzz' ]
console.log(fizzBuzz2(10)); // [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]​
console.log(fizzBuzz2(15)); // [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]​
console.log(fizzBuzz2(2)); //  [ 1, 2 ]


/* Task 3
Write a function named findSumNumbers() which takes a string 
argument and returns sum of the all numbers appears in the string.
*/

const findSumNumbers = str => {
    let sum = 0;

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        // Check if the character is a digit
        if (!isNaN(char)) {
            // Convert the character to a number and add it to the sum
            sum += parseInt(char);
        }
    }

    return sum;

}

console.log(findSumNumbers("abc$")); // -> 0
console.log(findSumNumbers("a1b4c 6#")); // -> 11
console.log(findSumNumbers("ab110c045d")); // -> 155
console.log(findSumNumbers("525")); // -> 525
console.log(findSumNumbers("3 for 10 dollars")); // -> 13

/* Task 4
Write a function named findBiggestNumber() which takes a string 
argument and returns the biggest number appears in the string.
*/

const findBiggestNumber = str => {
    let currentNumber = ''; // Variable to store the current number being built
    let biggestNumber = 0; // Variable to store the biggest number found

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);

        // Check if the character is a digit
        if (!isNaN(char)) {
            // If it's a digit, append it to the currentNumber string
            currentNumber += char;
        } else {
            // If it's not a digit and currentNumber is not empty, compare it with biggestNumber
            if (currentNumber !== '') {
                const num = parseInt(currentNumber);
                if (num > biggestNumber) {
                    biggestNumber = num;
                }
                currentNumber = ''; // Reset the currentNumber for the next number
            }
        }
    }

    // Check if the last character in the string is a digit
    if (currentNumber !== '') {
        const num = parseInt(currentNumber);
        if (num > biggestNumber) {
            biggestNumber = num;
        }
    }

    return biggestNumber;
}

console.log(findBiggestNumber("abc$")); // -> 0
console.log(findBiggestNumber("a1b4c 6#")); // -> 6
console.log(findBiggestNumber("ab110c045d")); // -> 110
console.log(findBiggestNumber("525")); // -> 525
console.log(findBiggestNumber("3 for 10 dollars")); // -> 10


/* Task 5
Write a function named countOccurrencesOfCharacters() which takes a string 
argument and returns the count of repeated characters in the String.​

NOTE: If given String is empty, then return empty String.​
NOTE: It is case sensitive.
*/

const countOccurrencesOfCharacters = str => {
    if (str === "") return "";

    let countMap = {};
    let result = "";

    // Count occurrences of each character
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (countMap[char]) {
            countMap[char]++;
        } else {
            countMap[char] = 1;
        }
    }

    // Construct the result string
    for (let char in countMap) {
        result += countMap[char] + char;
    }

    return result;
}

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

const fibonacciSeries1 = num => {
    if (num <= 0) return [];
    if (num === 1) return [0];

    let series = [0, 1];
    for (let i = 2; i < num; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }

    return series;
}

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

const fibonacciSeries2 = num => {
    if (num <= 0) return 0;

    let prev = 0;
    let curr = 1;

    for (let i = 2; i <= num; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }

    return prev;
}

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

const findUniques = (arr1, arr2) => {
    const combinedArray = arr1.concat(arr2);
    const uniqueArray = combinedArray.filter((item, index) => combinedArray.indexOf(item) === index);
    return uniqueArray;
}

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

const isPowerOf3 = num => {
    if (num < 1) return false;
    while (num !== 1) {
        if (num % 3 !== 0) {
            return false;
        }
        num /= 3;
    }
    return true;
}

console.log(isPowerOf3(1)); // 	-> true
console.log(isPowerOf3(2)); // 	-> false
console.log(isPowerOf3(3)); // 	-> true
console.log(isPowerOf3(27)); // -> true
console.log(isPowerOf3(100)); // -> false
console.log(isPowerOf3(81)); // -> true
console.log(isPowerOf3(9)); // 	-> true