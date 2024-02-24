const {CharacterHelper} = require('../utils/CharacterHelper.js');

// Task 1
let t1num1 = 0;
let t1num2 = 1;

if(t1num1 === t1num2) console.log('true');
else console.log('false');

t1num1 === t1num2 ? console.log('true') : console.log('false')

switch(t1num1 === t1num2) {
    case 1: 
        console.log('true');
        break;
    default: 
        console.log('false');
}

// THE BEST SOLUTION
console.log(t1num1 === t1num2);


// Task 2
let t2char = '9'
let t2ascii = t2char.charCodeAt(0);

if(t2ascii >= 97 && 122 <= t2ascii) console.log(`'${t2char}' is a letter`);
else if(48 <= t2ascii && t2ascii <= 57) console.log(`'${t2char}' is a digit`);
else console.log(`INVALID INPUT`);

// ternary solution
t2ascii >= 97 && 122 <= t2ascii 
? console.log(`'${t2char}' is a letter`) 
: t2ascii >= 48 && 57 <= t2ascii
? console.log(`'${t2char}' is a digit`)
: console.log(`INVALID INPUT`);

// switch solution
switch(true) {
    case 48 <= t2ascii && t2ascii <= 57:
        console.log(`"${t2char}" is a digit`);
        break;
    case (65 <= t2ascii && t2ascii <= 90) || (97 <= t2ascii && t2ascii <= 122):
        console.log(`"${t2char}" is a letter`);
        break;
    default:
        console.log('INVALID INPUT');
}


// Task 3
let t3char = 'x';
let t3ascii = t3char.charCodeAt(0);

if(65 <= t3ascii && t3ascii <= 90) console.log(`"${t3char}" is an uppercase letter`);
else if(97 <= t3ascii && t3ascii <= 122) console.log(`"${t3char}" is a lowercase letter`);
else console.log('INVALID INPUT');

// ternary solution
65 <= t3ascii && t3ascii <= 90
? console.log(`"${t3char}" is an uppercase letter`)
: 97 <= t3ascii && t3ascii <= 122 
? console.log(`"${t3char}" is a lowercase letter`)
: console.log('INVALID INPUT');


// Task 4
let t4char = '$';
let t4ascii = t4char.charCodeAt(0);

if(65 <= t4ascii && t4ascii <= 90 || 97 <= t4ascii && t4ascii <= 122 || 48 <= t4ascii && t4ascii <= 57 || t4ascii === 32) {
    console.log(`"${t4char}" is not a special character`);
}
else console.log(`"${t4char}" is a special character`);


// Task 5
/*
Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.

NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1:
"a"

Expected result 1:
"a"  is a vowel

Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N"  is not a vowel

Test data 4:
" "

Expected result 4:
"INVALID INPUT"
*/
let t5char = 'a'
t5char = t5char.toLowerCase();
let t5ascii = t5char.charCodeAt(0);

if(65 <= t5ascii && t5ascii <= 90 || 97 <= t5ascii && t5ascii <= 122) {  // checks if it is a letter
    if(t5char === 'a' || t5char === 'e' || t5char === 'i' || t5char === 'o' || t5char === 'u') {
        console.log(`"${t5char}" is a vowel`);
    }
    else {
        console.log(`"${t5char}" is not a vowel`);
    }
}
else {
    console.log(`INVALID INPUT`);
}

// another way to write the task
if(65 <= t5ascii && t5ascii <= 90 || 97 <= t5ascii && t5ascii <= 122) { // checks if it is a letter
    if(`aeiouAEIOU`.includes(t5char)) console.log(`"${t5char}" is a vowel`); // simpler way
    else console.log(`"${t5char}" is not a vowel`);
}
else console.log(`INVALID INPUT`);

// another way to write the task
if('aeiouAEOUI'.includes(t5char)) {
    console.log(`"${t5char}" is a vowel`);
}
else if((65 <= t5ascii && t5ascii <= 90) || (97 <= t5ascii && t5ascii <= 122)) {
    console.log(`"${t5char}" is not a vowel`);
}
else {
    console.log('INVALID INPUT')
}