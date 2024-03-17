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
Write a function named hasVowel() which takes a string argument and returns 
true if the string has a vowel, returns false if the string doesn’t contain any vowel letter.

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

    if(age < 16) console.log(`AGE IS NOT ALLOWED`);
    if(age > 120 || currentYear > 2024) console.log(`AGE IS NOT VALID`);
    if(age > 16) console.log(`AGE IS ALLOWED`);
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

averageOfEdges(0, 0, 0) 		-> 0
averageOfEdges(0, 0, 6) 		-> 3
averageOfEdges(-2, -2, 10) 	-> 4
averageOfEdges(-3, 15, -3) 	-> 6
averageOfEdges(10, 13, 20) 	-> 15