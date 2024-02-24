// Replacing some characters or substrings within a string


let str = 'I like apple and pineapple'; 

let strReplaced = str.replace('apple', 'orange');
let strReplacedAll = str.replaceAll('apple', 'orange');

console.log(str);
console.log(strReplaced);
console.log(strReplacedAll);

/*
TASK: used to replace an occurrence of a substring within the original string
RETURN: it returns a new string with the replaced value
ARGUMENTS: takes two argument; target(substring to be replaced) and source: is the new value
CHANGE ORIGINAL VALUE: does not change the original
STATIC or NON-STATIC: non-static

The difference btween replace() and replaceAll()
replace() - replaces the first occurence
replaceAll() - replaces all the occurences
*/

let word = 'Hello World';

console.log(word.replace('Hi', 'XXX')); // 'Hello World'
console.log(word.replace(' ', '###')); // 'Hello###World'
console.log(word.replace('l', '$')); // 'He$lo World'
console.log(word.replaceAll('l', '$')); // 'He$$o Wor$d'

