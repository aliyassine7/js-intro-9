/* Task 1
Write a function named hasLowerCase() which takes a string argument and returns 
true if there is a lowercase letter and false if it there isn't. 
*/

const hasLowerCase = str => [...str].some(x => x >= 'a' && x <= 'z');
// const hasLowerCase = (str) =>  str.split('').filter(i => i >= 'a' && i <= 'z').length > 0
// try this with a loop as well

console.log(hasLowerCase("")); //            -> false
console.log(hasLowerCase("JAVASCRIPT")); //  -> false
console.log(hasLowerCase("hello")); //       -> true
console.log(hasLowerCase("125$")); //        -> false
console.log(hasLowerCase("  a  ")); //       -> true


/* Task 2
Write a function named noZero() which takes an array of numbers 
as argument and returns the array back with all zeros removed.
*/

const noZero = arr => arr.filter(x => x !== 0);

console.log(noZero([1])); //             -> [1]
console.log(noZero([1, 1, 10])); //      -> [1, 1, 10]
console.log(noZero([0, 1, 10])); //      -> [1, 10]
console.log(noZero([0, 0, 0])); //       -> []
console.log(noZero([10, 100, 0])); //    -> [10, 100]


/* Task 3
Write a function named numberAndSquare() which takes an array of numbers as 
argument and returns a multidimensional array with all numbers squared. 
*/

const numberAndSquare = arr => arr.map(x => [x, x ** 2]);
// const numberAndSquare = (arr) =>  arr.map(i => [i, i*i])
// try this problem with a loop

console.log(numberAndSquare([1, 2, 3])); //      -> [[1, 1], [2, 4], [3, 9]]
console.log(numberAndSquare([0, 3, -6])); //     -> [[0, 0], [3, 9], [-6, 36]]
console.log(numberAndSquare([1, 4])); //         -> [[1,1], [4, 16]]
console.log(numberAndSquare([0, 0, 0])); //      -> [[0, 0], [0, 0], [0, 0]]
console.log(numberAndSquare([0, 1, -10])); //    -> [[0, 0], [1, 1], [-10, 100]]


/* Task 4
Write a function named containsValue() which takes a string array and a string as arguments and returns 
a boolean value. Search the string variable inside of the array and return true if it exists in the array. 
If it doesn't exist, return false. 
    NOTE: Assume that array size is at least 1.
    NOTE: The method is case-sensitive.
*/

const containsValue = (arr, str) => arr.includes(str)
// const containsValue = (arr, str) => arr.some(x => x.includes(str));

console.log(containsValue(["abc", "foo", "javascript"], "hello")); //                -> false
console.log(containsValue(["abc", "def", "123"], "Abc")); //                         -> false
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")); //  -> true


/* Task 5
Write a function named reverseSentence() which takes a string as argument and returns 
the words in reverse order.​ If there is not enough words to reverse, return "There is not enough words!".

NOTE: make sure that the first letter of the reversed sentence is capitalized.
*/

// const reverseSentence = str => {
//     const words = str.split(' ');

//     if (words.length < 2) return `There is not enough words!`;

//     let reversedWords = words.reverse().join(' ').toLowerCase();

//     // Capitalize the first letter of the reversed sentence
//     reversedWords = reversedWords[0].toUpperCase() + reversedWords.slice(1);
//     // reversedWords = reversedWords.charAt(0).toUpperCase() + reversedWords.slice(1);

//     return reversedWords;
// }

const reverseSentence = str => {
    if(!(str.trim().includes(' '))) return `There is not enough words!`

    let newStr = str.split(' ').reverse().join(' ').toLowerCase();

    return newStr[0].toUpperCase() + newStr.slice(1);
}

console.log(reverseSentence("Hello")); //                -> "There is not enough words!"
console.log(reverseSentence("Javascript is fun")); //    -> "Fun is javascript"
console.log(reverseSentence("This is a sentence")); //   -> "Sentence a is this"


/* Task 6
Write a function named removeStringSpecialsDigits() which takes a string as argument and returns 
a string without the special characters or digits.
*/

const removeStringSpecialsDigits = str => [...str].filter(x => x.toLowerCase() >= 'a' && x.toLowerCase() <= 'z' || x === ' ').join('')

console.log(removeStringSpecialsDigits("123Javascript #$%is fun")); //   -> "Javascript is fun" 
console.log(removeStringSpecialsDigits("Cypress")); //                   -> "Cypress"
console.log(removeStringSpecialsDigits("Automation123#$%")); //          -> "Automation"


/* Task 7
Write a function named removeArraySpecialsDigits() which takes a string array as argument and return 
back without the special characters or digits.
*/

// const removeArraySpecialsDigits = arr => arr.map(str => removeStringSpecialsDigits(str))
const removeArraySpecialsDigits = arr => arr.map(el => el.split('').filter(i => i.toLowerCase() >= 'a' && i.toLowerCase() <= 'z').join(''))

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])); //    -> ["Javascript", "is", "fun"]
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"])); //          -> ["Cypress", "", ""]
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"])); //         -> ["Automation", "tool"]


/* Task 8
Write a function named getCommons() which takes two string arrays as arguments and returns all the common words. 

NOTE: Make sure you deal with common words that occur more than once in the same array
*/

// const getCommons = (arr1, arr2) => {
//     let commonsWithDuplicates = arr1.filter(el => arr2.includes(el));

//     let commons = [];

//     for(const el of commonsWithDuplicates) {
//         if(!commons.includes(el)) commons.push(el);
//     }

//     return commons;
// }

const getCommons = (arr1, arr2) => arr1.filter(el => arr2.includes(el)).reduce((commons, el) => !commons.includes(el) ? commons.concat(el) : commons, []);
    // return arr1.filter(el => arr2.includes(el)).reduce((commons, el) => !commons.includes(el) ? [...commons, el] : commons, []);

    // let commons = [];

    // for(const el of commonsWithDuplicates) {
    //     if(!commons.includes(el)) commons.push(el);
    // }

    // return commons;

console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"])); //            -> []
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"])); //   -> ["Javascript"]
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"])); //           -> ["C#"]


/* Task 9
Write a function named noXInVariables() which takes an array as argument and returns 
an array that all the x or X removed from the elements.

NOTE: If the element is existing of x or X letters only, then completely remove the element.
*/

// const noXInVariables = arr => {
//     arr = arr.map(element => {
//         if (typeof element === 'string') {
//             return element.split('').filter(letter => {
//                 return letter.toLowerCase() !== 'x'
//             }).join('');
//         }
//         else return element;
//     });

//     // completely remove the element from the array
//     return arr.filter(x => x !== '');
// }

const noXInVariables = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'string') arr[i] = arr[i].split('').filter(ele => ele.toLowerCase() !== 'x').join('');
    }
    return arr.filter(ele => ele);
}

console.log(noXInVariables(["abc", 123, "#$%"])); //         -> ["abc", 123, "#$%"]
console.log(noXInVariables(["xyz", 123, "#$%"])); //         -> ["yz", 123, "#$%"]
console.log(noXInVariables(["x", 123, "#$%"])); //           -> [123, "#$%"]
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"])); //     -> ["yyy", "ABC"]