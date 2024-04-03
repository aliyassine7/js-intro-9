/* Task-1
Write a function named hasLowerCase() which takes a string argument and returns 
true if there is a lowercase letter and false if it there isn't. 
*/

const hasLowerCase = str => [...str].some(x => x >= 'a' && x <= 'z');
// try this with a loop as well

console.log(hasLowerCase("")); //            -> false
console.log(hasLowerCase("JAVASCRIPT")); //  -> false
console.log(hasLowerCase("hello")); //       -> true
console.log(hasLowerCase("125$")); //        -> false
console.log(hasLowerCase("  a  ")); //       -> true

/* Task-2
Write a function named noZero() which takes an array of numbers 
as argument and returns the array back with all zeros removed.
*/

const noZero = arr => arr.filter(x => x !== 0);

console.log(noZero([1])); //             -> [1]
console.log(noZero([1, 1, 10])); //      -> [1, 1, 10]
console.log(noZero([0, 1, 10])); //      -> [1, 10]
console.log(noZero([0, 0, 0])); //       -> []
console.log(noZero([10, 100, 0])); //    -> [10, 100]

/* Task-3
Write a function named numberAndSquare() which takes an array of numbers as 
argument and returns a multidimensional array with all numbers squared. 
*/

const numberAndSquare = arr => {
    return arr.map(x => [x, x ** 2])
}

console.log(numberAndSquare([1, 2, 3])); //      -> [[1, 1], [2, 4], [3, 9]]
console.log(numberAndSquare([0, 3, -6])); //     -> [[0, 0], [3, 9], [-6, 36]]
console.log(numberAndSquare([1, 4])); //         -> [[1,1], [4, 16]]
console.log(numberAndSquare([0, 0, 0])); //      -> [[0, 0], [0, 0], [0, 0]]
console.log(numberAndSquare([0, 1, -10])); //    -> [[0, 0], [1, 1], [-10, 100]]

/* Task-4
Write a function named containsValue() which takes a string array and a string as arguments and returns 
a boolean value. Search the string variable inside of the array and return true if it exists in the array. 
If it doesn't exist, return false. 
    NOTE: Assume that array size is at least 1.
    NOTE: The method is case-sensitive.
*/
    
console.log(containsValue(["abc", "foo", "javascript"], "hello")); //                -> false
console.log(containsValue(["abc", "def", "123"], "Abc")); //                         -> false
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")); //  -> true

/* Task-5
Write a function named reverseSentence() which takes a string as argument and returns 
the words in reverse order.​ If there is no enough words reverse, return "There is not enough words!".
*/

console.log(reverseSentence("Hello")); //                -> "There is not enough words!"
console.log(reverseSentence("Javascript is fun")); //    -> "Fun is javascript"
console.log(reverseSentence("This is a sentence")); //   -> "Sentence a is this"

/* Task-6
Write a function named removeStringSpecialsDigits() which takes a string as argument and returns 
a string without the special characters or digits.
*/

console.log(removeStringSpecialsDigits("123Javascript #$%is fun")); //   -> "Javascript is fun" 
console.log(removeStringSpecialsDigits("Cypress")); //                   -> "Cypress"
console.log(removeStringSpecialsDigits("Automation123#$%")); //          -> "Automation"

/* Task-7
Write a function named removeArraySpecialsDigits() which takes a string array as argument and return 
back without the special characters or digits.
*/

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])); //    -> ["Javascript", "is", "fun"]
console.log(removeArraySpecialsDigits(["Cypress", "123$%", "###"])); //          -> ["Cypress", "", ""]
console.log(removeArraySpecialsDigits(["Automation", "123#$%tool"])); //         -> ["Automation", "tool"]

/* Task-8 (try to make sure it works with multiple common strings)
Write a function named getCommons() which takes two string arrays as arguments and returns all the common words.
*/

console.log(getCommons(["Javascript", "is", "fun"], ["abc", "xyz", "123"])); //            -> []
console.log(getCommons(["Javascript", "is", "fun"], ["Javascript", "C#", "Python"])); //   -> ["Javascript"]
console.log(getCommons(["Javascript", "C#", "C#"], ["Python", "C#", "C++"])); //           -> ["C#"]

/* Task-9
Write a function named noXInVariables() which takes an array as argument and returns 
an array that all the x or X removed from the elements.
    NOTE: If the element is existing of x or X letters only, then completely remove the element.
*/

console.log(noXInVariables(["abc", 123, "#$%"])); //         -> ["abc", 123, "#$%"]
console.log(noXInVariables(["xyz", 123, "#$%"])); //         -> ["yz", 123, "#$%"]
console.log(noXInVariables(["x", 123, "#$%"])); //           -> [123, "#$%"]
console.log(noXInVariables(["xyXyxy", "Xx", "ABC"])); //     -> ["yyy", "ABC"]