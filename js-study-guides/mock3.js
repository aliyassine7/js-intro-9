const countPalindrome = str => str.trim().toLowerCase().split(' ').reduce((count, elem) => elem !== '' && elem === elem.split('').reverse().join('') ? count + 1 : count, 0)


console.log(countPalindrome('Mom and Dad')) 


/*Write a function named replaceFirstLast() which takes a string argument and returns a new 
string with the first and last characters replaced. 
NOTE: If the length is less than 2, return an empty string. 
NOTE: Ignore extra spaces before and after the string.
Examples: 
replaceFirstLast("")      
replaceFirstLast("Hello")     
replaceFirstLast("Tech Global")    
replaceFirstLast("A")     
replaceFirstLast("    A      ) 
*/
const replaceFirstLast = str => {
  str = str.trim();

  if(str.length < 2) return ''

  return str.at(-1) + str.slice(1, -1) + str[0]
}

console.log(replaceFirstLast('Hello'))
console.log(replaceFirstLast('Tech Global'))
console.log(replaceFirstLast('A'))
console.log(replaceFirstLast('       A      '))


/*Write a function named as swapFirstLastWord() which takes a string word as an argument 
and returns the string back with its first and last words swapped when invoked. 
NOTE: Return empty string if the given string does not have 2 or more words. 
Examples: 
swapFirstLastWord("Hello World")          -> "World Hello"
swapFirstLastWord("I like JavaScript")    -> "JavaScript like I"
swapFirstLastWord("foo bar foo bar")      -> "bar bar foo foo"
swapFirstLastWord("")                     -> ""
swapFirstLastWord(" ")                    -> ""
swapFirstLastWord("Hello")                -> ""
swapFirstLastWord("Hello   ")             -> ""
*/

// const swapFirstLastWord = str => {
//   str = str.trim().split(' ')
//   if(str.length < 2) return ''

//   return `${str.at(-1)} ${str.slice(1, -1).join(' ')} ${str[0]}`
// }

// const swapFirstLastWord = str => {
//   str = str.trim();

//   if (str.includes(' ')) {
//       let firstWord = str.slice(0, str.indexOf(' '));
//       let middle = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1);
//       let lastWord = str.slice(str.lastIndexOf(' ') + 1);

//       return lastWord + middle + firstWord
//   }

//   return "";
// }

const swapFirstLastWord = (str) => {
  strArr = str.trim().split(' ')
  if (strArr.length < 2) return ''

  let firstWord = strArr[0]
  let middle = strArr.slice(1, -1).join(' ')
  let lastWord = strArr[strArr.length -1] 

  return strArr.length >= 3 ? `${lastWord} ${middle} ${firstWord}` : `${lastWord} ${firstWord}`
}

console.log(swapFirstLastWord("Hello World"))
console.log(swapFirstLastWord("I like JavaScript"))
console.log(swapFirstLastWord("foo bar foo bar"))
console.log(swapFirstLastWord(""))
console.log(swapFirstLastWord(" "))
console.log(swapFirstLastWord("Hello"))
console.log(swapFirstLastWord("Hello   "))


/*Factorial 
Write a function named as factorial() which takes a number as an argument and returns the 
factorial of the number when invoked. 
NOTE: Mathematically, the factorial of a non-negative integer n is defined as: 
n! = n × (n-1) × (n-2) × ... × 2 × 1 
Assume you will not be given a negative number. 
Examples: 
factorial(5)   -> 120
factorial(4)   -> 24
factorial(0)   -> 1
factorial(1)   -> 1
*/

// const factorial = num => {
//   let total = 1;
//   for (let i = num; i >= 1; i--) {
//       total *= i;
//   }
//   return total;
// }

const factorial = (num) => {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1


/*
Write a function named as removeExtraSpaces() which takes a string word as an argument 
and returns the string back with all extra spaces removed when invoked.
*/

// const removeExtraSpaces = (str) => {
//   let words = str.trim().split(' ');
//   return words.filter(word => word !== '').join(' '); //  removes any empty strings from the array of words.
// }

const removeExtraSpaces = str => {
  let words = str.trim().split(' ')

  return words.filter(word => word !== '').join(' ')
}

console.log(removeExtraSpaces("Hello")); //	"Hello" 
console.log(removeExtraSpaces("      Hello    World     ")); // "Hello World" 
console.log(removeExtraSpaces("     JavaScript is          fun")); // "JavaScript is fun”
console.log(removeExtraSpaces("")); // "" 