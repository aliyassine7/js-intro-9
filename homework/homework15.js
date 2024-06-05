/* Task-1
Write a function named toCamelCase() which takes a string as its argument and returns a new string in camelCase. 
Assume the string only contains letters and spaces
*/ 

// const toCamelCase = str => {
//   if(!str.trim().includes(' ')) return str;
//   return str.trim().split(' ').map((word, index) => 
//     index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//   ).join('')
// }

const toCamelCase = str => {
  if(!str.trim().includes(' ')) return str;
  str = str.split(' ').filter(elem => elem !== '');

  return str.map((word, index) => {
    if (index === 0) return word.toLowerCase();
    else return word.at(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');
}

console.log(toCamelCase("first name")); // "firstName"
console.log(toCamelCase("last     name")); // "lastName"
console.log(toCamelCase("   ZIP CODE")); // "zipCode"
console.log(toCamelCase("I Learn Java Script")); // "iLearnJavaScript"
console.log(toCamelCase("helloWorld")); // "helloWorld"

/* Task-2
Write a function named toSnakeCase() which takes a string as its argument and returns a new string in snake_case.
Assume the string only contains letters and spaces

NOTE: In snake case words are separated by underscores (_) and are all lowercase.
*/

const toSnakeCase = str => str.trim().split(' ').filter((elem) => elem !== '').join('_').toLowerCase()

console.log(toSnakeCase("first name")); // "first_name"
console.log(toSnakeCase("last    name")); // "last_name"
console.log(toSnakeCase("    I love Java Script")); // "i_love_java_script"
console.log(toSnakeCase("already_snake_case")); // "already_snake_case"
console.log(toSnakeCase("hello")); // "hello"


/* Task-3
Write a function named alternatingCases() which takes a string argument and returns the string with alternating capitalization.
NOTE: The first letter should always be uppercase and non-letter characters are ignored.
*/ 

const alternatingCases = (str) => {
  let arr = str.split('');
  let counter = true;
  
  arr.forEach((elem, index) => {
    if (elem.toLowerCase() >= 'a' && elem.toLowerCase() <= 'z') {
      if (counter) {
        arr[index] = elem.toUpperCase();
        counter = !counter;
      } else {
        arr[index] = elem.toLowerCase();
        counter = !counter;
      }
    }
  });
  
  return arr.join('');
}

console.log(alternatingCases("Hello")); // "HeLlO"
console.log(alternatingCases("basketball")); // "BaSkEtBaLl"
console.log(alternatingCases("Tech Global")); // "TeCh GlObAl"
console.log(alternatingCases("")); // ""
console.log(alternatingCases("123!@#aB")); // "123!@#Ab"

/* Task-4
Write a function named isNeutral() that takes two strings comprised of + and -, and return 
a new string which shows how the two strings interact in the following way:
When positives and positives interact, they remain positive.
When negatives and negatives interact, they remain negative.
But when negatives and positives interact, they become neutral, and are shown as the number 0.
Note: The two strings will be the same length.
*/ 

// const isNeutral = (str1, str2) => {
//   let result = '';

//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] === str2[i]) {
//       result += str1[i];
//     } else {
//       result += '0';
//     }
//   }

//   return result;
// }

// const isNeutral = (str1, str2) => {
//   let result = [];
  
//   str1.split('').forEach((char1, index) => {
//     const char2 = str2[index];
//     if (char1 === char2) {
//       result.push(char1);
//     } else {
//       result.push('0');
//     }
//   });
  
//   return result.join('');
// }

const isNeutral = (str1, str2) => {
  return str1.split('')
    .map((char, index) => char === str2[index] ? char : '0')
    .join('');
};

console.log(isNeutral("-", "+")); // "0"
console.log(isNeutral("-+", "-+")); // "-+"
console.log(isNeutral("-++-", "-+-+")); // "-+00"
console.log(isNeutral("--++--", "++--++")); // "000000"
console.log(isNeutral("+++", "+++")); // "+++"

/* Task-5
Write a function named isTrueOrFalse() which takes a string with sets of character/words separated by space. 
Looking at the first letter of each word (case insensitive-"A" and "a" should be treated the same), you need to determine whether 
it falls into the positive/first half of the alphabet ("a"-"m") or the negative/second half ("n"-"z"). 
Return true if there are more (or equal) positive words than negative words, false otherwise.

NOTE: alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
NOTE: Ignore all the digits, spaces and special characters.
*/

// const isTrueOrFalse = str => {
//   const strArr = str.toLowerCase().split(' ')
//   return strArr.filter(elem => elem[0] >= 'a' && elem[0] <= 'm').length >= strArr.length / 2
// }

const is isTrueOrFalse = str => {

}

console.log(isTrueOrFalse("A big brown fox caught a bad rabbit")); //  -> true
console.log(isTrueOrFalse("Xylophones can obtain Xenon.")); //         ->  false
console.log(isTrueOrFalse("CHOCOLATE MAKES A GREAT SNACK")); //        -> true
console.log(isTrueOrFalse("All FOoD tAsTEs NIcE for someONe")); //     -> true
console.log(isTrueOrFalse("Got stuck in the Traffic")); //             -> false