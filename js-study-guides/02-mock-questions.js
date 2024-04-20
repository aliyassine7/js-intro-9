/* Double or Triple the Word
Write a function named as doubleOrTripleWord() which takes a string word as an argument 
and returns the given word back tripled if the string length is even or doubled if the string length 
is odd when invoked

Examples:
doubleOrTripleWord("Tech") -> "TechTechTech"
doubleOrTripleWord("Apple") -> "AppleApple”
doubleOrTripleWord("") -> ""
doubleOrTripleWord(" ") -> " "
doubleOrTripleWord("1") -> "11"
doubleOrTripleWord("22") -> "222222"
*/

const doubleOrTripleWord = word => word.length % 2 === 0 ? word.repeat(3) : word.repeat(2);

console.log(doubleOrTripleWord("Tech")); // "TechTechTech"
console.log(doubleOrTripleWord("Apple")); //  "AppleApple”
console.log(doubleOrTripleWord("")); //  ""
console.log(doubleOrTripleWord(" ")); // " "
console.log(doubleOrTripleWord("1")); // "11"
console.log(doubleOrTripleWord("22")); // "222222"


/* First and Last Word
Write a function named as firstlastWord() which takes a string word as an argument and 
returns the first and last words from the given string when invoked.
NOTE: Return empty string if the given string does not have any word.

Examples:
firstLastWord("Hello World") -> "HelloWorld"
firstLastWord("I like JavaScript") -> "IJavaScript”
firstLastWord("Hello") -> "HelloHello"
firstLastWord("") -> ""
firstLastWord(" ") -> ""
*/

// const firstLastWord = str => str.trim().split(' ')[0] + str.trim().split(' ').at(-1);

const firstLastWord = str => {
    let word = str.trim().split(' ');

    return word[0] + word[word.length - 1];
}

console.log(firstLastWord("Hello World")); // "HelloWorld"
console.log(firstLastWord("I like JavaScript")); // "IJavaScript”
console.log(firstLastWord("Hello")); // "HelloHello"
console.log(firstLastWord("")); // ""
console.log(firstLastWord(" ")); // ""


/* Has Vowel
Write a function named hasVowel() which takes a string argument and returns true if the 
string has a vowel, returns false if the string doesn’t contain any vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.

Examples:
hasVowel("") -> false
hasVowel("Javascript") -> true
hasVowel("Tech Global") -> true
hasVowel("1234") -> false
hasVowel("ABC") -> true
*/

// const hasVowel = str => str.split('').some(el => 'AEIOUaeiou'.includes(el));

// const hasVowel1 = (str) => ['a','e','i','o','u'].some(elem => str.toLowerCase().includes(elem))

// const hasVowel = (str) => /[aeiou]/i.test(str)

// const hasVowel = str => {
//         // Regular expression to match any vowel
//         const vowelRegex = /[aeiou]/i;
//         // Test if any vowel is present in the string
//         return vowelRegex.test(str);
// }

// const hasVowel = (str) => str.toLowerCase().includes('a') || str.toLowerCase().includes('e') || str.toLowerCase().includes('i') || str.toLowerCase().includes('o') || str.toLowerCase().includes('u')

console.log(hasVowel("")); // false
console.log(hasVowel("Javascript")); // true
console.log(hasVowel("Tech Global")); // true
console.log(hasVowel("1234")); // false
console.log(hasVowel("ABC")); // true
console.log(hasVowel("A")); // true
console.log(hasVowel("e")); // true
console.log(hasVowel("u")); // true
console.log(hasVowel("a")); // true
console.log(hasVowel("i")); // true
console.log(hasVowel("O")); // true
console.log(hasVowel("C")); // false


/* Start Vowel
Write a function named as startVowel() which takes a string word as an argument and returns 
true if given string starts with a vowel, and false otherwise when invoked.
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U
*/

// const startVowel = str => {
//     str = str.toLowerCase();

//     // Define an array of vowels
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     // Extract the first character of the string
//     const firstChar = str[0];

//     // Check if the first character is a vowel
//     return vowels.includes(firstChar);
// }

// const startVowel = str => {
//     // Convert the first character of the string to lowercase for comparison
//     const firstChar = str.charAt(0).toLowerCase();

//     // Define an array of vowels
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     // Check if the first character is a vowel
//     return vowels.includes(firstChar);
// }

const startVowel = str => ['a', 'e', 'i', 'o', 'u'].some(el => str.toLowerCase().startsWith(el));

console.log(startVowel("Hello")); // false 
console.log(startVowel("Apple")); // true 
console.log(startVowel("orange")); // true 
console.log(startVowel("")); // false   
console.log(startVowel(" ")); // false
console.log(startVowel("123")); // false  


/* Average of Edges
Write a function named averageOfEdges() which takes three number arguments and will 
return average of min and max numbers.
*/

const averageOfEdges = (num1, num2, num3) => {
    let min = Math.min(num1, num2, num3);
    let max = Math.max(num1, num2, num3);

    return (min + max) / 2;
}

console.log(averageOfEdges(0, 0, 0)); // 0 
console.log(averageOfEdges(0, 0, 6)); // 3 
console.log(averageOfEdges(-2, -2, 10)); // 4 
console.log(averageOfEdges(-3, 15, -3)); // 6 
console.log(averageOfEdges(10, 13, 20)); // 15


/* Swap First and Last Characters
Write a function named replaceFirstLast() which takes a string argument and returns a new 
string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
*/

// const replaceFirstLast = str => {
//     str = str.trim();

//     if(str.length < 2) return '';

//     let firstChar = str[0];
//     let middle = str.slice(1, -1);
//     // let middle = str.slice(1, str.length - 1);
//     let lastChar = str.at(-1);
//     // let lastChar = str.slice(-1);

//     return lastChar + middle + firstChar;
// }

const replaceFirstLast = str => str.trim().length < 2 ? '' : str.trim().at(-1) + str.slice(1, -1) + str[0];

console.log(replaceFirstLast("")); // ''
console.log(replaceFirstLast("Hello")); // "oellH"     
console.log(replaceFirstLast("Tech Global")); // "lech GlobaT" 
console.log(replaceFirstLast("A")); // ''   
console.log(replaceFirstLast("   A    ")); // ''


/* Swap First and Last Four Characters 
Write a function named as swap4() which takes a string word as an argument and returns the 
string back with its first and last 4 characters swapped when invoked. 
NOTE: Return empty string if the given string does not have 8 or more characters. 
*/

const swap4 = str => str.trim().length < 8 ? '' : str.slice(-4) + str.slice(4, -4) + str.slice(0, 4);

console.log(swap4("abc")); // ''
console.log(swap4("JavaScript")); // "riptScJava"      
console.log(swap4("TechGlobal")); // "obalGlTech"  
console.log(swap4("")); // ''      
console.log(swap4("      ")); // '' 
console.log(swap4("Apple")); // ''


/**
 * Swap First and Last Words
*/

const swapFirstLastWord = str => {
    str = str.trim();

    if (str.includes(' ')) {
        let firstWord = str.slice(0, str.indexOf(' '));
        let middle = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1);
        let lastWord = str.slice(str.lastIndexOf(' ') + 1);

        return lastWord + middle + firstWord
    }

    return "";
}

console.log(swapFirstLastWord("Hello World")); //     
console.log(swapFirstLastWord("I like JavaScript")); //  
console.log(swapFirstLastWord("foo bar foo bar")); //    
console.log(swapFirstLastWord("")); //      
console.log(swapFirstLastWord(" ")); //      
console.log(swapFirstLastWord("Hello")); //     
console.log(swapFirstLastWord("Hello   ")); // 


/**
 * Count Positive Numbers 
*/

const countPos = arr => arr.reduce((count, elem) => elem > 0 ? count + 1 : count, 0);

console.log(countPos([-45, 0, 0, 34, 5, 67])); // 3 
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); // 4 
console.log(countPos([0, -1, -2, -3])); // 0


/**
 * Find Even Numbers
*/
const getEvens = (num1, num2) => {
    let evens = [];

    let min = Math.min(num1, num2);
    let max = Math.max(num1, num2);

    for(let i = min; i <= max; i++) {
        if(i % 2 === 0) evens.push(i);
    }

    return evens;
}
console.log(getEvens(2, 7)); // [ 2, 4, 6 ]
console.log(getEvens(17, 5)); // [ 6, 8, 10, 12, 14, 16 ]
console.log(getEvens(4, 4)); // [ 4 ]
console.log(getEvens(3, 3)); // []


/* Find Numbers Divisible by 5
Write a function named as getMultipleOf5() which takes 2 
number arguments and returns all the numbers divisible by 5 
as an array stored from first found match to last found match 
when invoked.

NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no numbers divisible by 5 
in the range of given 2 numbers. 
Assume you will not be given negative numbers.
*/
const getMultipleOf5 = (num1, num2) => {
    
}

console.log(getMultipleOf5(3, 17)); // [ 5, 10, 15 ]
console.log(getMultipleOf5(23, 5)); // [ 20, 15, 10, 5 ]
console.log(getMultipleOf5(5, 5)); // [5]
console.log(getMultipleOf5(2, 4)); // []


/**
 * Count Negative Numbers 
*/
const countNeg = arr => {
    return arr.reduce((count, elem) => elem < 0 ? count + 1 : count, 0)
}

console.log(countNeg([-45, 0, 0, 34, 5, 67])); // 1 
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123])); // 2 
console.log(countNeg([0, -1, -2, -3])); // 3


/**
 * Count A
*/


/**
 * Count Words
*/


/**
 * Factorial 
*/


/* Count 3 or Less
Write a function named as count3OrLess() which takes a string word as an argument and 
returns the count of the words that has 3 characters or less when invoked.
*/
const count3OrLess = str => {
    let count = 0;

    let words = str.trim().split(' ');
    for (const word of words) {
        if (word.length <= 3 && word.length > 0) count++;
    }
    return count;

    // return str.trim().split(' ').reduce((count, elem) => elem <= 3 ? count + 1 : count, 0)
}

console.log(count3OrLess("Hello")); // 0
console.log(count3OrLess("Hi John")); // 1
console.log(count3OrLess("JavaScript is fun")); // 2
console.log(count3OrLess("My name is John Doe")); // 3
console.log(count3OrLess("")); // 0


/**
 * Remove Extra Spaces
*/


/**
 * Middle Number
*/


/**
 * First Duplicate Element
*/


/**
 * Find All Duplicate Elements
*/


/**
 * Count Vowels
*/


/**
 * Reverse String Word
*/


/**
 * Count Consonants
*/




/**
 * Count Multiple Words 
*/
const countMultipleWords = arr => {

}


/**
 * FizzBuzz
*/


/**
 * Palindrome
*/


/**
 * Prime Number
*/


/**
 * Add Two Arrays
*/


/**
 * No Elements With A
*/


/**
 * No Elements Divisible by 3 and 5
*/



/**
 * No Elements Equal 13
*/



/**
 * Remove Duplicates
 */


/**
 * No Digits 
*/


/**
 * No Vowel
*/



/**
 * Sum of Digits
*/


/**
 * Array Factorial
*/