// Task 1
/*
Write a function named noSpace() which takes a string as an
argument and returns a new string with all the spaces removed.
*/

const noSpace = (str) => str.trim().split(' ').join('');

// Another solution 
// const noSpace = (str) => str.trim().split('').filter(word => word !== ' ').join('');

console.log(noSpace("")); // ""
console.log(noSpace("Javascript")); // "Javascript"
console.log(noSpace("  Hello  ")); // "Hello"
console.log(noSpace(" Hello World  ")); // "HelloWorld”
console.log(noSpace("Tech     Global")); // "TechGlobal"


// Task 2 
/*
Write a function named replaceFirstLast() which takes a string argument 
and returns a new string with the first and last characters replaced.

NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
*/

const replaceFirstLast = (str) => {
    str = str.trim();
    if(str.length < 2) return '';

    let first = str[0];
    let middle = str.slice(1, str.length - 1);
    let last = str.at(-1);
    
    return last + middle + first;
}

console.log(replaceFirstLast("")); // ""
console.log(replaceFirstLast("Hello")); // "oellH"
console.log(replaceFirstLast("Tech Global")); // "lech GlobaT"
console.log(replaceFirstLast("A")); // ""
console.log(replaceFirstLast("   A   ")); // ""


// Task 3
/*
Write a function named hasVowel() which takes a string argument and returns true if 
the string has a vowel, returns false if the string doesn’t contain any vowel letter.
Write a function named hasVowel() which takes a string argument and returns true if 
the string has a vowel, returns false if the string doesn’t contain any vowel letter.

NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
*/

const hasVowel = (str) => str.toLowerCase().split('').some(word => word.includes('a' || 'e' || 'i' || 'o' || 'u'));


console.log(hasVowel("")); // false
console.log(hasVowel("Javascript")); // true
console.log(hasVowel("Tech Global")); // true
console.log(hasVowel("1234")); // false
console.log(hasVowel("ABC")); // true


// Task 4
/*
Write a function named checkAge() which takes a number argument to be 
considered as the yearOfBirth and returns a message below based on the given year.

If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
*/

const checkAge = (yearOfBirth) => {
    let currentYear = 2024;

    let age = currentYear - yearOfBirth;

    if(age < 0) return `AGE IS NOT VALID`
    else if(age < 16) return `AGE IS NOT ALLOWED`;
    else if(age > 16 && age < 120) return `AGE IS ALLOWED`;
    else return `AGE IS NOT VALID`;
    
}

console.log(checkAge(2015)); // "AGE IS NOT ALLOWED"
console.log(checkAge(2007)); // "AGE IS ALLOWED"
console.log(checkAge(2050)); // "AGE IS NOT VALID"
console.log(checkAge(1920)); // "AGE IS ALLOWED"
console.log(checkAge(1800)); // "AGE IS NOT VALID"


// Task 5
/*
Write a function named averageOfEdges() which takes three number 
arguments and will return average of min and max numbers​.
*/

const averageOfEdges = (num1, num2, num3) => {
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);

    return (max + min) / 2;
}

console.log(averageOfEdges(0, 0, 0)); // 0
console.log(averageOfEdges(0, 0, 6)); // 3
console.log(averageOfEdges(-2, -2, 10)); // 4
console.log(averageOfEdges(-3, 15, -3)); // 6
console.log(averageOfEdges(10, 13, 20)); // 15


// Task 6
/*
Write a function named noA() which takes an array of strings as argument and will 
return a new array with all elements starting with "A" or "a" replaced with "###".
*/

const noA = (arr) => arr.map(el => el.toLowerCase().startsWith('a') ? el = '###' : el);

console.log(noA(["javascript", "hello", "123", "xyz"])); // ["javascript", "hello", "123", "xyz"]
console.log(noA(["apple", "123", "ABC", "javascript"])); // ["###", "123", "###", "javascript"]
console.log(noA(["apple", "abc", "ABC", "Alex", "A"])); // ["###", "###", "###", "###", "###"]


// Task 7
/*
Write a function named no3and5() which takes an array of integer numbers as 
argument and will return a new array with elements replaced by conditions below.

If element can be divided by 5, replace it with 99​
If element can be divided by 3, replace it with 100​
If element can be divided by both 3 and 5, replace it with 101
*/

const no3and5 = arr => arr.map(el => el % 3 === 0 && el % 5 === 0 ? el = 101 : el % 5 === 0 ? el = 99 : el % 3 === 0 ? el = 100 : el);

console.log(no3and5([7, 4, 11, 23, 17])); // [7, 4, 11, 23, 17]
console.log(no3and5([3, 4, 5, 6])); // [100, 4, 99, 100]
console.log(no3and5([10, 11, 12, 13, 14, 15])); // [99, 11, 100, 13, 14, 101]


// Task 8
/*
Write a function named countPrimes() which takes an array of integer numbers as 
argument and will return the number of the prime numbers in the given array.

NOTE: Prime number is a number that can be divided only by 1 and itself​.
NOTE: Negative numbers cannot be prime​.
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc.​
NOTE: Smallest prime number is 2.
*/
const isPrime = num => {
    if(num < 2) return false;
    if(num === 2 || num === 3) return true;
    if(num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;

    while (i < num) {
        if (num % i === 0) return false;
        i += 2;
    }

    return true;
}

const countPrimes = arr => arr.reduce((acc, curr) => isPrime(curr) ? acc + 1 : acc, 0);
const countPrimes = arr => arr.reduce((acc, curr) => isPrime(curr) ? acc + 1 : acc, 0);

console.log(countPrimes([-10, -3, 0, 1])); // 0
console.log(countPrimes([7, 4, 11, 23, 17])); // 4
console.log(countPrimes([41, 53, 19, 47, 67])); // 5

// Task 9
// Task 9
/*
Write a function named removeDuplicates() which takes an array 
argument and returns a new array with all the duplicates removed.
*/

const removeDuplicates = arr => arr.reduce((newArray, el) => !(newArray.includes(el)) ? newArray.concat(el) : newArray, [])


console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); // [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3])); // [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])); // [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); // ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"]))// ["1", "2", "3"]


// Task 10
/*
Write a method named isDateFormatValid() that takes a string as an argument 
and returns true if the given date is valid or returns false otherwise.

Expected Format: nn/nn/nnnn
So, it must be presented as <2digits>/<2digits>/<4digits>
*/

const isDateFormatValid = (str) => {
    const [month, day, year] = str.split('/');

    if(month > 12 || month < 1) return false;
    if(day < 1 || day > 31) return false;

    return month.trim().length === 2 && day.trim().length === 2 && year.trim().length === 4;
}

console.log(isDateFormatValid("")); // false
console.log(isDateFormatValid("15/30/2020")); // false
console.log(isDateFormatValid("10-30-2020 ")); // false
console.log(isDateFormatValid("10.30.2020")); // false
console.log(isDateFormatValid("5/30/2020")); // false
console.log(isDateFormatValid("05/30/2020 ")); // true
console.log(isDateFormatValid("10/2/2020")); // false
console.log(isDateFormatValid("10/02/2020 ")); // true


// Task 11
/*
Write a method named secondMax() takes an array argument 
and returns the second max number from the array.

NOTE: Assume that you will not be given empty array and if the
array has only 1 element, it will be returned as second max number.

NOTE: Be careful when there is multiple max numbers.
*/

const secondMax = (arr) => {
    arr.filter()
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23])); // 7
console.log(secondMax([3, 4, 5, 6])); // 5
console.log(secondMax([10])); // 10


// Task 12
/*
Write a method named secondMin() takes an array argument
and returns the second min number from the array.

NOTE: Assume that you will not be given empty array and if the 
array has only 1 element, it will be returned as second min number.

NOTE: Be careful when there is multiple min numbers.
*/

const secondMin = () => {
    
}

console.log(secondMax([7, 4, 4, 4, 23, 23, 23])); // 7
console.log(secondMax([3, 4, 5, 6])); // 4
console.log(secondMax([10])); // 10


// Task 13
/*
Write a method named mostRepeated() takes an array argument
and returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the 
count of one element will always be more than the others.
*/

const mostRepeated = (arr) => {

}

console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])); // 4
console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])); // "pen"
console.log(mostRepeated([10])); // 10
console.log(mostRepeated(["TechGlobal"])); // "TechGlobal"



