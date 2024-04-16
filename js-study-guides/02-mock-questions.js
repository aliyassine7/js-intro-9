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

const swap4 = str => {
    
}

console.log(swap4("abc")); // ''
console.log(swap4("JavaScript")); // "riptScJava"      
console.log(swap4("TechGlobal")); // "obalGlTech"  
console.log(swap4("")); // ''      
console.log(swap4("      ")); // '' 
console.log(swap4("Apple")); // ''