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
console.log(swapFirstLastWord("")); // ''   
console.log(swapFirstLastWord(" ")); // ''    
console.log(swapFirstLastWord("Hello")); // ''    
console.log(swapFirstLastWord("Hello   ")); // ''


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
    let max = Math.max(num1, num2);
    let min = Math.min(num1, num2);

    let result = [];

    for(let i = min; i <= max; i++) {
        if(i % 5 === 0) result.push(i);
    }
    if(max === num1) result.reverse();

    return result;
}

console.log(getMultipleOf5(3, 17)); // [ 5, 10, 15 ]
console.log(getMultipleOf5(23, 5)); // [ 20, 15, 10, 5 ]
console.log(getMultipleOf5(5, 5)); // [5]
console.log(getMultipleOf5(2, 4)); // []


/* Count Negative Numbers 
Write a function named countNeg() which takes an array of numbers as an argument and 
returns how many elements are negative when invoked.
*/
const countNeg = arr => {
    return arr.reduce((count, elem) => elem < 0 ? count + 1 : count, 0)
    
    // let count = 0;

    // for(const neg of arr) {
    //     if(neg < 0) count++;
    // }

    // return count;
}

console.log(countNeg([-45, 0, 0, 34, 5, 67])); // 1 
console.log(countNeg([-23, -4, 0, 2, 5, 90, 123])); // 2 
console.log(countNeg([0, -1, -2, -3])); // 3


/* Count A
Write a function named countA() which takes a string argument and returns how many A or a 
there are in the given string when invoked. 
NOTE: Ignore case sensitivity. 
*/
const countA = str => str.split('').filter(el => el.toLowerCase().includes('a')).length;

console.log(countA("TechGlobal is a QA bootcamp")); // 4
console.log(countA("QA stands for Quality Assurance")); // 5
console.log(countA("Cypress")); // 0


/* Count Words
Write a function named countWords() which takes a string argument 
and returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
*/
// const countWords = str => str.trim().split(' ').filter(el => el.length > 0).length;
const countWords = str => str.trim().split(' ').length;

console.log(countWords("   Javascript is fun   ")); // 3
console.log(countWords("Cypress is an UI automation tool.   ")); // 6 
console.log(countWords("1 2 3 4")); // 4


/* Factorial 
Write a function named as factorial() which takes a number as an argument 
and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
*/
const factorial = num => {
    let total = 1;
    for (let i = num; i >= 1; i--) {
        total *= i;
    }
    return total;
}

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1


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
}

console.log(count3OrLess("Hello")); // 0
console.log(count3OrLess("Hi John")); // 1
console.log(count3OrLess("JavaScript is fun")); // 2
console.log(count3OrLess("My name is John Doe")); // 3
console.log(count3OrLess("")); // 0


/* Remove Extra Spaces
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked.
*/
const removeExtraSpaces = str => str.trim().split(' ').filter(word => word !== '').join(' ');
// const removeExtraSpaces = str => str.trim().split(' ').filter(word => word !== '').join(' ').split('\t').join('')

console.log(removeExtraSpaces("Hello")); //	"Hello" 
console.log(removeExtraSpaces("      Hello    World     ")); // "Hello World" 
console.log(removeExtraSpaces("     JavaScript is        fun")); // "JavaScript is fun”
console.log(removeExtraSpaces("")); // ''


/* Middle Number
Write a function named middleInt() which takes 
three number arguments and return the middle number. 
*/
// const middleInt = (num1, num2, num3) => {
//     const sortedNums = [num1, num2, num3].sort((a, b) => a - b);
//     return sortedNums[1];
// }

const middleInt = (num1, num2, num3) => {
    let smallestNum = Math.min(num1, num2, num3);
    let largestNum = Math.max(num1, num2, num3);

    return num1 + num2 + num3 - smallestNum - largestNum;
}

console.log(middleInt(1, 2, 2)); // 2
console.log(middleInt(5, 5, 8)); // 5
console.log(middleInt(5, 3, 5)); // 5
console.log(middleInt(1, 1, 1)); // 1
console.log(middleInt(-1, 25, 10)); // 10


/* First Duplicate Element
Write a function named as firstDuplicate() which takes an 
array argument and returns the first duplicated number in the 
array when invoked.

NOTE: Make your code dynamic that works for any array and 
return -1 if there are no duplicates in the array. For two 
elements to be considered as duplicated, value and data types 
of the elements must be same.
*/
const firstDuplicate = arr =>  {
    for(let elem of arr) {
      if(arr.indexOf(elem) !== arr.lastIndexOf(elem)) return elem
    }
    return -1;
}

console.log(firstDuplicate([3, 7, 10, 0, 3, 10])); // 3
console.log(firstDuplicate([5, 7, 7, 0, 5, 10])); // 5
console.log(firstDuplicate([5, '5', 3, 7, 4])); // -1
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc'])); // 'abc'
console.log(firstDuplicate([1, 2, 3])); // -1
console.log(firstDuplicate(['foo', 'abc', '123', 'bar'])); // -1



/* Find All Duplicate Elements
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.

NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same.
*/


/* Count Vowels
Write a function named as countVowels() which takes a string word as an argument 
and returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
*/
const countVowels = str => {
    // return str.trim().split('').reduce((count, elem) => 'AEIOUaeiou'.includes(elem) ? count + 1 : count, 0);

    let count = 0;

    for (const letter of str) {
        if ('AEIOUaeiou'.includes(letter)) count++;
    }
    return count;
}

console.log(countVowels("Hello")); // 2
console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript is fun")); // 5
console.log(countVowels("")); // 0


/* Reverse String Word
Write a function named as reverseStringWords() which takes a string 
as an argument and returns string back with each word separately 
reversed when invoked.

NOTE: Make your code dynamic that works for any string. Make sure you 
consider extra spaces before and after words in the given string.
*/


/* Count Consonants
Write a function named as countConsonants() which takes a string word as an argument 
and returns the count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.
*/




/* Count Multiple Words 
Write a function named as countMultipleWords() which takes an array as an argument 
and returns the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.
*/
const countMultipleWords = arr => {

}


/* FizzBuzz
Write a function named as fizzBuzz() which takes 2 number arguments and 
returns a string composed with below requirements when invoked.
You need to find all the numbers within the range of given 2 numbers (both inclusive) 
and store them in a string from smallest to greatest number with a ' | ' separator for each number.
You will need to convert numbers divisible by 3 to 'Fizz'
You will need to convert numbers divisible by 5 to 'Buzz'
You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
*/


/* Palindrome
Write a function named as isPalindrome() which takes a string word as an argument 
and returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity
*/



/* Prime Number
Write a function named as isPrime() which takes a number as an argument 
and returns true if the number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. 
It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.

Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
*/


/* Add Two Arrays
Write a function named add() which takes two array of numbers as argument 
and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.
*/
const add = (arr1, arr2) => {
    const shortArray = arr1.length < arr2.length ? arr1 : arr2;
    const longArray = arr1.length > arr2.length ? arr1 : arr2;
    const sum = [];

    for (let i = 0; i < shortArray.length; i++) {
        sum.push(arr1[i] + arr2[i]);
    }
    return sum.concat(longArray.slice(shortArray.length));
}
// const add = (arr1, arr2) => {
//     [arr1 , arr2] = arr1.length > arr2.length ? [arr1, arr2] : [arr2, arr1]
//     for (let i = 0; i < arr1.length; i++) {
//         if (i < arr2.length) arr1[i] += arr2[i]
//     }
//     return arr1
// }

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); // [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); // [16, 11, 9,  3, 2, 7, 5, 10, 34]​
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); // [0, 0, 0, 0]


/* No Elements With A
*/


/* No Elements Divisible by 3 and 5
*/



/* No Elements Equal 13
*/



/* Remove Duplicates
Write a function named removeDuplicates() which takes an array 
argument and returns a new array with all the duplicates removed.
*/
const removeDuplicates = arr => arr.reduce((newArray, el) => !(newArray.includes(el)) ? newArray.concat(el) : newArray, []);

// const removeDuplicates = arr => arr.filter((el, i) => arr.indexOf(el) === i);

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); // [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3])); // [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])); // [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); // ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"])); // ["1", "2", "3"]


/* No Digits 
*/


/* No Vowel
Write a function named noVowel() which takes a string argument and 
returns a new string with all vowels removed from the original string​.
*/
const noVowel = str => {
    return str.split('').filter(elem => !'aeiouAEIOU'.includes(elem)).join('');
}

console.log(noVowel("TechGlobal")); // "TchGlbl"
console.log(noVowel("AEOxyz")); // "xyz"
console.log(noVowel("Javascript")); // "Jvscrpt"
console.log(noVowel("")); // ""
console.log(noVowel("125$")); // "125$"


/* Sum of Digits
*/


/* Array Factorial
*/