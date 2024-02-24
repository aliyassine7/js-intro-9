const {generateRandomNumber} = require('../utils/MathHelper.js');

// Task 1
console.log(`\n----------------------------------\n`);


let randomNumber1 = generateRandomNumber(1, 100), randomNumber2 = generateRandomNumber(1, 100), randomNumber3 = generateRandomNumber(1, 100);

let avg = (randomNumber1 + randomNumber2 + randomNumber3) / 3;

if(avg >= 50) {
    console.log('true');
}
else {
    console.log('false');
}

console.log(`\n----------------------------------\n`);

// Task 2
let r1 = generateRandomNumber(1, 3), r2 = generateRandomNumber(1, 3), r3 = generateRandomNumber(1, 3);

if(r1 === r2 && r2 === r3) {
    console.log('TRIPLE MATCH')
}
else if(r1 === r2 || r1 === r3 || r2 === r3) {
    console.log('DOUBLE MATCH');
}
else {
    console.log('NO MATCH');
}

console.log(`\n----------------------------------\n`);

// Task 3
function hasA(word) {
    if(word.includes('a') || word.includes('A')) {
        return true;
    } 
    else {
        return false
    }
    // another way to write this function without if else statement   -> return word.toLowerCase().includes('a')
 }

console.log(hasA('Tech')); // false 
console.log(hasA('Global')); // true
console.log(hasA('')); // false
console.log(hasA('Apple')); // true

// Task 4
function doubleOrTripleWord(word) {
    if(word.length % 2 === 0) {
        return word + word + word;
    }
    else {
        return word + word;
    }
}
console.log(doubleOrTripleWord('Tech')); // 'TechTechTech'
console.log(doubleOrTripleWord('Apple')); // 'AppleApple'
console.log(doubleOrTripleWord('')); // ''
console.log(doubleOrTripleWord(' ')); // ''
console.log(doubleOrTripleWord('1')); // '11'
console.log(doubleOrTripleWord('22')); // '222222'


// Task 5
function firstWord(word) {
    let fWord = word.split(' ');
    return fWord[0];
}

console.log(firstWord('Hello World')); // 'Hello'
console.log(firstWord('I like JavaScript')); // 'I'
console.log(firstWord('Hello')); // 'Hello'
console.log(firstWord('')); // ''
console.log(firstWord(' ')); // ''

// Task 6
function lastWord(word) {
    return word.slice(word.lastIndexOf(' ') + 1);
}

console.log(lastWord('Hello World')); // World
console.log(lastWord('I like JavaScript')); // JavaScript
console.log(lastWord('Hello')); // Hello 
console.log(lastWord('')); // ''
console.log(lastWord(' ')); // ''

// Task 7
function firstLastWord(word) {
    let firstWord = word.split(' ');
    return firstWord[0] + firstWord[firstWord.length - 1];
}

console.log(firstLastWord('Hello World')); // HelloWorld
console.log(firstLastWord('I like JavaScript')); // IJavaScript
console.log(firstLastWord('Hello')); // HelloHello
console.log(firstLastWord('')); // ''
console.log(firstLastWord(' ')); // ''

// Task 8
function startVowel(word) {
    let vowels = word.toLowerCase();
    
    if(vowels.startsWith('a') || vowels.startsWith('e') || vowels.startsWith('i') || vowels.startsWith('o') || vowels.startsWith('u')) return true;
    return false;
}

console.log(startVowel('Hello')); // false
console.log(startVowel('Apple')); // true
console.log(startVowel('orange')); // true
console.log(startVowel('')); // false
console.log(startVowel(' ')); // false
console.log(startVowel('123')); // false

// Task 9 
function swap4(word) {
    if(word.length < 8) return '';

    let first4Letters = word.slice(0, 4);
    let middle = word.slice(4, -4)
    let last4Letters = word.slice(-4)

    return last4Letters + middle + first4Letters
}

console.log(swap4('abc')); // ''
console.log(swap4('JavaScript')); // riptScJava
console.log(swap4('TechGlobal')); // obalGlTech
console.log(swap4('')); // ''
console.log(swap4(' ')); // ''
console.log(swap4('Apple')); // ''

// Task 10
function swapFirstLastWord(word) {
    if(word.indexOf(' ') === -1) return ''; // If there is not a second word, return empty string
    if(word.at(word.lastIndexOf(' ') + 1) === undefined) return ''; // if there is no character after ' ' then return empty string 

    let firstWord = word.slice(0, word.indexOf(' '));
    let middle = word.slice(word.indexOf(' '), word.lastIndexOf(' ') + 1);
    let lastWord = word.slice(word.lastIndexOf(' ') + 1);

    return lastWord + middle + firstWord;
}

// Easier way to do it
// const swapFirstLastWord = (str) => {
//     str = str.trim();

//     if(str.includes(' ')){
//         let firstWord = str.slice(0, str.indexOf(' '));
//         let middle = str.slice(str.indexOf(' '), str.lastIndexOf(' ') + 1);
//         let lastWord = str.slice(str.lastIndexOf(' ') + 1);

//         return lastWord + middle + firstWord
//     }

//     return "";

// }

console.log(swapFirstLastWord('Hello World'));
console.log(swapFirstLastWord('I like JavaScript'));
console.log(swapFirstLastWord('foo bar foo bar'));
console.log(swapFirstLastWord(''));
console.log(swapFirstLastWord(' '));
console.log(swapFirstLastWord('Hello'));
console.log(swapFirstLastWord('Hello '));