// Task 1
/*
Requirement:
Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges" 		                -> "APPLE"
"Java is not a scripting programming language"  	-> "JavaScript"
"I don't like books" 			                    -> "I like books"
*/

let sentence1 = "I like apples and oranges";
let sentence2 = "Java is not a scripting programming language";
let sentence3 = "I don't like books";

let appleIndex = sentence1.indexOf('apple'); // 7
console.log(sentence1.slice(appleIndex, appleIndex + 5).toUpperCase());

console.log(sentence1.slice(7, 12).toUpperCase());

console.log(sentence2.slice(0, 4) + sentence2[14].toUpperCase() + sentence2.slice(15, 20));

console.log(sentence3.replace(` don't`, ''))


// Task 2
/*
Requirement:
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 	
	-if it has any vowel, then print true
	-Else, print false
	Vowels = a, e, i, u, o, A, E, I, U, O

Test Data 1:
let s1 = "JavaScript";

Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true


Test Data 2:
let s1 = "";

Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false
*/


let s1 = "";

console.log(`The length is = ${s1.length}
The first char is = ${s1[0]}
The last char is = ${s1.at(-1)}`);

s1 = s1.toLowerCase();
console.log(s1.includes('a') || s1.includes('e') || s1.includes('i') || s1.includes('o') || s1.includes('u'));

// console.log(s1.includes('a') || s1.includes('e') || s1.includes('i') || s1.includes('o') || s1.includes('u') ||
// s1.includes('A') || s1.includes('E') || s1.includes('I') || s1.includes('O') || s1.includes('U'));


// Task 3
let s2 = 'Viktoriya';
let length1 = s2[Math.floor(s2.length / 2)];
console.log(length1);

let s3 = 'Ali';
console.log(s3[(s3.length - 1) / 2]);
console.log(s3[Math.floor(s3.length / 2)]);
console.log(s3[parseInt()]);


// Task 4
/*
Requirement:
Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 

Test Data 1:
let s3 = "";

Expected Result 1:
""


Test Data 2:
let s3 = "abcd";

Expected Result 2:
"bc"


Test Data 3:
let s3 = "JavaScript";

Expected Result 3:
"Sc"
*/

let s4 = 'Toyota';
console.log(s4[(s4.length / 2) - 1] + s4[s4.length / 2]);
console.log(s4.slice(s4.length / 2 - 1, s4.length / 2 + 1));


// Task 5
/*
Requirement:
Write a program that divides the given String. Assume the length of the String will at least 
be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters


Test Data 1:
let s4 = "abcd";

Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are = 


Test Data 2:
let s4 = "JavaScript";

Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
*/

let s5 = "Hello";
s6 = s5.slice(2, -2); // or you can use s6 = s5.slice(2, s5.length - 2);
console.log(`The first 2 characters are = ${s5.slice(0, 2)}
The last 2 characters are = ${s5.slice(-2)}
The other characters are ${s6}`);


// Task 6
let s6 = '12ab12';

console.log(s6.slice(0, 2) === s6.slice(-2));


// Task 7
let s7 = '123456';
let s71 = 'Blue';

console.log(s7.slice(1, -1) + s71.slice(1, -1));

// Task 8
let s8 = 'xxbluexx';

console.log((s8.slice(0,2) === 'xx') && (s8.slice(-2) === 'xx'));


// Task 9
/*
Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1:
let s8 = "";

Expected Result 1:
""


Test Data 2:
let s8 = " ";

Expected Result 2:
" "


Test Data 3:
let s8 = "I like Apple";

Expected Result 3:
"Apple like I"



Test Data 4:
let s8 = "JavaScript is nice to learn";

Expected Result 4:
"learn is nice to JavaScript"
*/

let s9 = 'I like Apple';

let firstword = s9.slice(0, s9.indexOf(' '));
let lastWord = s9.slice(s9.lastIndexOf(' ') + 1);
let middle = s9.slice(s9.indexOf(' '), s9.lastIndexOf(' ') + 1);

console.log(lastWord + middle + firstword);


string1 = "My favorite class is TechGlobal"
let stringArray = string1.split(" "); // ["My", "favorite", "class", "is", "TechGlobal."]
tempString = stringArray[0]; 
stringArray[0] = stringArray[stringArray.length - 1];  
stringArray[stringArray.length - 1] = tempString; 
string1 = stringArray.join(" "); // Turns the array back into a string
console.log(string1); // "TechGlobal favorite class is My"


// Task 10
let s10 = 'JavaScript is nice to learn';

console.log(s10.split(' ').length) // 5
console.log(s10.length - s10.replaceAll(' ', '').length + 1); // 5