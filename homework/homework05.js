// Task 1
/*
Write a function named countPos() which takes an array of numbers as an argument 
and returns how many elements are positive​ when invoked. 
*/

const countPos = (arr) => {
    let count = 0;

    arr.forEach(num => {
        if (num > 0) count++;
    });
    return count;
}

console.log(countPos([-45, 0, 0, 34, 5, 67])); // 3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); // 4
console.log(countPos([0, -1, -2, -3])); // 0


// Task 2
/*
Write a function named countA() which takes a string argument 
and returns how many A or a there are in the given string when invoked.

NOTE: Ignore case sensitivity.
*/

const countA = (str) => {
    let count = 0;
    str.trim();
    const words = str.split(''); // Split the string into an array of words
    words.forEach(word => {
        if (word.toLowerCase().includes('a')) count++;
    });
    return count;
}

console.log(countA("TechGlobal is a QA bootcamp")); // 4
console.log(countA("QA stands for Quality Assurance")); // 5
console.log(countA("Cypress")); // 0


// Task 3
/*
Write a function named as countVowels() which takes a string word as an argument 
and returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
*/

const countVowels = (str) => {
    let count = 0;
    let lowerCaseStr = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        let letter = lowerCaseStr[i];

        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            count++;
        }
    }
    return count;

    // Another solution 
    /*
    let count = 0;
    for (const letter of str) {
        let lowerCaseLetter = letter.toLowerCase();

        if (lowerCaseLetter === 'a' || lowerCaseLetter === 'e' || lowerCaseLetter === 'i' || lowerCaseLetter === 'o' || lowerCaseLetter === 'u') {
            count++;
        }
    }
    return count;
    */
}

console.log(countVowels("Hello")); // 2
console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript is fun")); // 5
console.log(countVowels("")); // 0


// Task 4
/*
Write a function named as countConsonants() which takes a string word as an argument 
and returns the count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.
*/

const countConsonants = (str) => {
    let count = 0;

    for (const letter of str) {
        let lowerCaseLetter = letter.toLowerCase();
        if (!(lowerCaseLetter === 'a' || lowerCaseLetter === 'e' || lowerCaseLetter === 'i' || lowerCaseLetter === 'o' || lowerCaseLetter === 'u')) count++;
    }
    return count;
}

console.log(countConsonants("Hello"));// 3
console.log(countConsonants("Hello World")); // 8
console.log(countConsonants("JavaScript is fun")); // 12
console.log(countConsonants("")); // 0


// Task 5
/*
Write a function named countWords() which takes a string argument 
and returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
*/

const countWords = (str) => {
    str = str.trim();
    let words = str.split(' ');
    return words.length;
}

console.log(countWords("   Javascript is fun   ")); // 3
console.log(countWords("Cypress is an UI automation tool.   ")); // 6 
console.log(countWords("1 2 3 4")); // 4


// Task 6
/*
Write a function named as factorial() which takes a number as an argument 
and returns the factorial of the number when invoked.

NOTE: Mathematically, the factorial of a non-negative integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

Assume you will not be given a negative number.
*/

const factorial = (num) => {
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


// Task 7
/*
Write a function named as isPalindrome() which takes a string word as an argument 
and returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity
*/

const isPalindrome = (str) => {
    let reversedWord = [...str.toLowerCase()].reverse().join('')
    return reversedWord === str.toLowerCase();
}

console.log(isPalindrome("Hello"));	// false
console.log(isPalindrome("Kayak")); // true 
console.log(isPalindrome("civic")); // true
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("ab  a")); // false
console.log(isPalindrome("123454321")); // true
console.log(isPalindrome("A")); // true
console.log(isPalindrome("")); // true


// Task 8
/*
Write a function named as countMultipleWords() which takes an array as an argument 
and returns the count of the elements that has multiple words when invoked.

NOTE: Be careful about the extra whitespaces before and after the array element.
*/

const countMultipleWords = (arr) => {
    let count = 0;

    // Another solution
    // for (const word of arr) {
    //     if (word.trim().includes(' ')) count++;
    // }

    arr.forEach(word => {
        if (word.trim().includes(' ')) count++;
    });
    return count;
}

console.log(countMultipleWords(["foo", "", "    ", "foo bar", "     foo"])); // 1
console.log(countMultipleWords(["foo", "bar", "foobar", "     foobar   "])); // 0
console.log(countMultipleWords(["f o o", "b a r", "foo bar", "     foo bar   "])); // 4
console.log(countMultipleWords([])); // 0 	


// Task 9
/*
Write a function named as count3OrLess() which takes a string word as an argument 
and returns the count of the words that has 3 characters or less when invoked.
*/

const count3OrLess = (str) => {
    let count = 0;

    str.split(' ').forEach(word => {
        if (word.length <= 3) count++;
    });

    return count

    // Another solution 
    // let words = str.split(' ');
    // for (const word of words) {
    //     if(word.length <= 3) count++;
    // }
    // return count;
}


console.log(count3OrLess("Hello")); // 0
console.log(count3OrLess("Hi John")); // 1
console.log(count3OrLess("JavaScript is fun")); // 2
console.log(count3OrLess("My name is John Doe")); // 3
console.log(count3OrLess("")); // 0


// Task 10
/*
Write a function named as isPrime() which takes a number as an argument 
and returns true if the number is prime or returns false otherwise when invoked.

NOTE: Mathematically, Prime number is a number that can be divided only by itself and 1. 
It cannot be divided by any other number. The smallest prime number is 2 and 2 is the only even prime number.

Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31…
NOTE: The smallest prime number is 2 and there is no negative prime numbers.
*/

const isPrime = (num) => {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }

    return true;
}

console.log(isPrime(5)); // true
console.log(isPrime(2)); // true
console.log(isPrime(29)); // true
console.log(isPrime(-5)); // false
console.log(isPrime(0)); // false
console.log(isPrime(1)); // false


// Task 11
/*
Write a function named add() which takes two array of numbers as argument 
and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.
*/

// const add = (arr1, arr2) => {
//     // return arr1.map((value, index) => value + arr2[index]);

//     const sum = [];

//     for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
//         sum.push(arr1[i] + arr2[i]);
//     }
//     return sum;
// }

const add = (arr1, arr2) => {
    const maxLength = Math.max(arr1.length, arr2.length);
    const sum = [];

    for (let i = 0; i < maxLength; i++) {
        const num1 = arr1[i] || 0; // If arr1[i] is undefined, use 0
        const num2 = arr2[i] || 0; // If arr2[i] is undefined, use 0
        sum.push(num1 + num2);
    }

    return sum;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); // [9, 3, 2, 7, 5, 10]
console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); // [16, 11, 9,  3, 2, 7, 5, 10, 34]​
console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); // [0, 0, 0, 0]


// Task 12
/*
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked.
*/

const removeExtraSpaces = (str) => {
    let words = str.trim().split(' ');
    return words.filter(word => word !== '').join(' '); //  removes any empty strings from the array of words.
}

console.log(removeExtraSpaces("Hello")); //	"Hello" 
console.log(removeExtraSpaces("      Hello    World     ")); // "Hello World" 
console.log(removeExtraSpaces("     JavaScript is          fun")); // "JavaScript is fun”
console.log(removeExtraSpaces("")); // "" 


// Task 13
/*
Write a function named findClosestTo10() which takes an array of numbers as argument 
and returns the closest element to 10 from the given array.

NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, return the smaller number.
*/

const findClosestTo10 = (arr) => {
    let closestNum = 0;
    let smallestDiff = Infinity; 

    for (const num of arr) {
        if (num !== 10) { // Ignore 10 itself
            const diff = Math.abs(10 - num);
            if (diff < smallestDiff || (diff === smallestDiff && num < closestNum)) {
                closestNum = num;
                smallestDiff = diff;
            }
        }
    }

    return closestNum;
}

console.log(findClosestTo10([10, -13, 5, 70, 15, 57])); // 5
console.log(findClosestTo10([10, -13, 8, 12, 15, -20])); // 8
console.log(findClosestTo10([0, -1, -2])); // 0


// Task 14
/*
Write a function named as isEmailValid() which takes a string email as an argument 
and returns true if the email is valid or returns false otherwise when invoked.

NOTE: A VALID EMAIL:
should NOT have any space.
should not have more than one “@” character.
should be in the given format <2+chars>@<2+chars>.<2+chars> meaning
There should be at least characters before @ character.
There should be at least 2 characters between @ and . Characters.
There should be at least 2 characters after the . character.
*/

const isEmailValid = (email) => {
    let beforeAt = email.slice(0, email.indexOf('@')).length;
    let afterDot = email.slice(email.indexOf('.')).length;
    let betweenAtAndDot = email.slice(email.indexOf('@'), email.indexOf('.')).length;
    
    // Check for any space in the email
    if (email.includes(' ')) {
        return false;
    }
    // Check for more than one "@" character
    if (email.split('@').length > 1) {
        return false;
    }
}

console.log(isEmailValid("")); // false
console.log(isEmailValid("@gmail.com")); // false
console.log(isEmailValid("johndoe@yahoo")); // false
console.log(isEmailValid("johndoe@.com")); // false
console.log(isEmailValid("a@outlook.com")); // false
console.log(isEmailValid("johndoe@a.com")); // false
console.log(isEmailValid("johndoe@@gmail.com")); // false
console.log(isEmailValid("johndoe@gmail.com")); // true