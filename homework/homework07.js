// Task 1
/*
Write a function named hasUpperCase() which takes a string argument 
and return true if there is an uppercase letter and false otherwise.
*/

const hasUpperCase = str => {
    if(str.split('').filter(x => x >= 'A' && x <= 'Z').length > 0) return true
    else return false;
}

console.log(hasUpperCase("javascript")); // false
console.log(hasUpperCase("John")); // true
console.log(hasUpperCase("$125.0")); // false
console.log(hasUpperCase("")); // false


// Task 2
/*
Write a function named noDigit() which takes a string argument and 
returns a new string with all digits removed from the original string​.
*/

const noDigit = str => {
    return str.split('').filter(x => !(x >= 0 && x <= 9)).join('');
}

console.log(noDigit("")); // ""
console.log(noDigit("Javascript")); // "Javascript"
console.log(noDigit("123Hello")); // "Hello"
console.log(noDigit("123Hello World149")); // "Hello World”
console.log(noDigit("123Tech456Global149")); // "TechGlobal"


// Task 3
/*
Write a function named noVowel() which takes a string argument and 
returns a new string with all vowels removed from the original string​.
*/

const noVowel = str => {
    
}

console.log(noVowel("TechGlobal")); // "TchGlbl"
console.log(noVowel("AEOxyz")); // "xyz"
console.log(noVowel("Javascript")); // "Jvscrpt"
console.log(noVowel("")); // ""
console.log(noVowel("125$") ); // "125$"


// Task 4
/*
Write a function named no13() which takes an array of numbers as 
argument and return a new array with all 13s replaced with 0s. 
*/

console.log(no13([1, 2, 3 ,4])); // [1, 2, 3 ,4] 
console.log(no13([13, 2, 3])); // [0, 2, 3]
console.log(no13([13, 13, 13 , 13, 13])); // [0, 0, 0, 0, 0]
console.log(no13([])); // []


// Task 5
/*
Write a function named middleInt() which takes 
three number arguments and return the middle number. 
*/

console.log(middleInt(1, 2, 2)); // 2
console.log(middleInt(5, 5, 8)); // 5
console.log(middleInt(5, 3, 5)); // 5
console.log(middleInt(1, 1, 1)); // 1
console.log(middleInt(-1, 25, 10)); // 10


// Task 6
/*
Write a function named sumOfDigits() which takes a string 
argument and returns sum of all digits from the original string.
*/

console.log(sumOfDigits("Javascript")); // 0
console.log(sumOfDigits("John's age is 29")); // 11
console.log(sumOfDigits("$125.0")); // 8
console.log(sumOfDigits("")); // 0


// Task 7
/*
Write a function named arrFactorial() which takes an array of numbers as 
argument and return the array with every number replaced with their factorials.
*/

console.log(arrFactorial([1, 2, 3 ,4])); // [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); // [1,120]
console.log(arrFactorial([5 , 0, 6])); // [120, 1, 720]
console.log(arrFactorial([])); // []


// Task 8
/*
Write a function named categorizeCharacters() which takes a string word as argument and 
return an array as letters at index of 0, digits at index of 1 and specials at index of 2.
*/

console.log(categorizeCharacters("1234")); // [ '' , '1234', '' ] 
console.log(categorizeCharacters("abc123$#%")); // [ 'abc', '123', '$#%' ]
console.log(categorizeCharacters("12ab$%3c%")); // [ 'abc', '123', '$%%' ]