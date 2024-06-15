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
// const replaceFirstLast = str => {
//   str = str.trim();

//   if(str.length < 2) return ''

//   return str.at(-1) + str.slice(1, -1) + str[0]
// }

const replaceFirstLast = str => {
  str = str.trim()

  return str.length < 2 ? '' : str.at(-1) + str.slice(1, -1) + str[0]
}

console.log(replaceFirstLast('Hello')) // 'oellH'
console.log(replaceFirstLast('Tech Global')) // 'lech GlobaT'
console.log(replaceFirstLast('A')) // ''
console.log(replaceFirstLast('       A      ')) // ''


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
  const strArr = str.trim().split(' ')
  if (strArr.length < 2) return ''

  let firstWord = strArr[0]
  let middle = strArr.slice(1, -1).join(' ')
  let lastWord = strArr.at(-1) 

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

// const factorial = (num) => {
//   if (num === 0 || num === 1) return 1;
//   return num * factorial(num - 1);
// }

const factorial = num => {
  let result = 1;

  for(let i = 2; i <= num; i++) {
    result*=i;
  }
  return result;
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


/*First Duplicate Element 
Write a function named as firstDuplicate() which takes an array argument and returns the first 
duplicated number in the array when invoked. 
NOTE: Make your code dynamic that works for any array and return -1 if there are no duplicates 
in the array. For two elements to be considered as duplicated, value and data types of the 
elements must be same.
firstDuplicate([ 3, 7, 10, 0, 3, 10 ])    
firstDuplicate([ 5, 7, 7, 0, 5, 10 ])    
firstDuplicate([ 5, '5', 3, 7, 4 ])    
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ])   
firstDuplicate([ 1, 2, 3])     
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])    -> 3 -> 5 -> -1 -> 'abc' -> -1  */

// const firstDuplicate = arr =>  {
//   for(let elem of arr) {
//     if(arr.indexOf(elem) !== arr.lastIndexOf(elem)) return elem
//   }
//   return -1;
// }

const firstDuplicate = arr => arr.find((elem) => arr.indexOf(elem) !== arr.lastIndexOf(elem) ?? -1)

console.log(firstDuplicate([3, 7, 10, 0, 3, 10])); // 3
console.log(firstDuplicate([5, 7, 7, 0, 5, 10])); // 5
console.log(firstDuplicate([5, '5', 3, 7, 4])); // -1
console.log(firstDuplicate([123, 'abc', '123', 3, 'abc'])); // 'abc'
console.log(firstDuplicate([1, 2, 3])); // -1
console.log(firstDuplicate(['foo', 'abc', '123', 'bar'])); // -1


/*
Requirement:
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.

NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same.

Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12' , 12, 'bar', 'a', 'a', 'foo' ]) -> [ 'foo', 'a' ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -> [ ]
*/

// function getDuplicates(arr) {
//   let duplicates = [];
//   for (let i = 0; i < arr.length; i++) {
//       if (arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i]) && !duplicates.includes(arr[i])) duplicates.push(arr[i]);
//   }
//   return duplicates;
// }

const getDuplicates = arr => [...new Set(arr.filter((elem) => arr.indexOf(elem) !== arr.lastIndexOf(elem)))] ?? -1

console.log(getDuplicates([0, -4, -7, 0, 5, 10, 45, -7, 0])); // [0, -7]
console.log(getDuplicates([1, 2, 5, 0, 7])); // []
console.log(getDuplicates(['A', 'foo', '12', 12, 'bar', 'a', 'a', 'foo'])); // ['foo', 'a']
console.log(getDuplicates(['foo', '12', 12, 'bar', 'a'])); // []


/*
Requirement:
Write a function named as reverseStringWords() which takes a string 
as an argument and returns string back with each word separately 
reversed when invoked.

NOTE: Make your code dynamic that works for any string. Make sure you 
consider extra spaces before and after words in the given string.

Examples:
reverseStringWords("Hello World")  -> "olleH dlroW"
reverseStringWords("I like JavaScript")  -> "I ekil tpircSavaJ"
reverseStringWords("Hello")  -> "olleH"
reverseStringWords("")  -> ""
reverseStringWords("    ")  -> ""
*/

const reverseStringWords = str => str.trim().split(' ').map(elem => elem.split('').reverse().join('')).join(' ')

console.log(reverseStringWords("Hello World")); // "olleH dlroW"
console.log(reverseStringWords("I like JavaScript")); // "I ekil tpircSavaJ"
console.log(reverseStringWords("Hello")); // "olleH"
console.log(reverseStringWords("")); // ''
console.log(reverseStringWords("    "));// ''

/*
Write a function named add() which takes two array of numbers as argument 
and returns a new array with sum of given arrays elements.

NOTE: Be careful about the array sizes as they could be different.
*/
// const add = (arr1, arr2) => {
//       const shortArray = arr1.length < arr2.length ? arr1 : arr2;
//       const longArray = arr1.length > arr2.length ? arr1 : arr2;
//       const sum = [];
  
//       for (let i = 0; i < shortArray.length; i++) {
//           sum.push(arr1[i] + arr2[i]);
//       }
//       return sum.concat(longArray.slice(shortArray.length));
//   }

  const add = (arr1, arr2) => {
    if(arr2.length > arr1.length) [arr1, arr2] = [arr2, arr1]
    return arr1.map((elem, index) => elem += (arr2[index] || 0))
  }
  
  console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2])); // [9, 3, 2, 7, 5, 10]
  console.log(add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])); // [16, 11, 9,  3, 2, 7, 5, 10, 34]​
  console.log(add([-5, 6, -3, 11], [5, -6, 3, -11])); // [0, 0, 0, 0]


/*
Write a function named fizzBuzz2() which takes a number argument and returns 
an array that consists of numbers starting from 1 to given number. However, 
it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided by 5, 
and "FizzBuzz" for the numbers divided both by 3 and 5.
*/
const fizzBuzz2 = num => {
  let result = [];
  for (let i = 1; i <= num; i++) {
      // result.push((i % 3 === 0 ? 'Fizz' : '') + (i % 5 === 0 ? 'Buzz' : '') || i)
      if (i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz');
      else if (i % 3 === 0) result.push('Fizz');
      else if (i % 5 === 0) result.push('Buzz');
      else result.push(i);
  }
  return result;
}

console.log(fizzBuzz2(3)); //  [ 1, 2, 'Fizz' ]
console.log(fizzBuzz2(5)); //  [ 1, 2, 'Fizz', 4, 'Buzz' ]
console.log(fizzBuzz2(10)); // [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz' ]​
console.log(fizzBuzz2(15)); // [ 1​, 2​, 'Fizz'​, 4​, 'Buzz'​, 'Fizz'​, 7, 8​, 'Fizz'​, 'Buzz', 11, 'Fizz'. 13, 14,  'FizzBuzz' ]​
console.log(fizzBuzz2(2)); //  [ 1, 2 ]


/*
Write a function named as isPalindrome() which takes a string word as an argument 
and returns true if the word is palindrome or returns false otherwise when invoked.

NOTE: Palindrome: It is a word that is read the same backward as forward
Examples: kayak, civic, madam

NOTE: your function should ignore case sensitivity
*/

const isPalindrome = str => str.toLowerCase() === str.toLowerCase().split('').reverse().join('')

console.log(isPalindrome("Hello"));	// false
console.log(isPalindrome("Kayak")); // true 
console.log(isPalindrome("civic")); // true
console.log(isPalindrome("abba")); // true
console.log(isPalindrome("ab  a")); // false
console.log(isPalindrome("123454321")); // true
console.log(isPalindrome("A")); // true
console.log(isPalindrome("")); // true


/*
Write a function named removeDuplicates() which takes an array 
argument and returns a new array with all the duplicates removed.
*/

// const removeDuplicates = arr => arr.reduce((newArray, el) => !(newArray.includes(el)) ? newArray.concat(el) : newArray, []);
// const removeDuplicates = arr => arr.filter((el, i) => arr.indexOf(el) === i);

const removeDuplicates = arr => [...new Set(arr)]

console.log(removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])); // [10, 20, 35, 60, 70]
console.log(removeDuplicates([1, 2, 5, 2, 3])); // [1, 2, 5, 3]
console.log(removeDuplicates([0, -1, -2, -2, -1])); // [0, -1, -2]
console.log(removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])); // ["abc", "xyz", "123", "ab", "ABC"]
console.log(removeDuplicates(["1", "2", "3", "2", "3"]))// ["1", "2", "3"]


const isPrime = num => {
  if(num < 2) return false
  
  for(let i = 2; i <= Math.sqrt(num); i++) {
    if(num % i === 0) return false
  }
  return true
}

console.log(isPrime(5)); // true
console.log(isPrime(2)); // true
console.log(isPrime(3)); // true
console.log(isPrime(29)); // true
console.log(isPrime(4)); // false
console.log(isPrime(-5)); // false
console.log(isPrime(0)); // false
console.log(isPrime(1)); // false



const arrFactorial = arr => arr.map(factorial)

console.log(arrFactorial([1, 2, 3, 4])); // [1, 2, 6, 24]
console.log(arrFactorial([0, 5])); // [1, 120]
console.log(arrFactorial([5, 0, 6])); // [120, 1, 720]
console.log(arrFactorial([])); // []


