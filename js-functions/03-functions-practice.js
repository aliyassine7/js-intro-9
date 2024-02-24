/*
Write a functions which takes a number and returns true if the number is even 
or return false if he number is odd

isEven(4) -> true
isEven(3) -> false
isEven(0) -> true
isEven(-2) -> true
isEven(-7) -> false

EVEN: number is divisible by 2          -> number % 2 === 0
EVEN: number is not divisible by 2      -> number % 2 !== 0
*/

function isEven(num) {
    return num % 2 === 0;
}

console.log(isEven(4));
console.log(isEven(3));
console.log(isEven(0));
console.log(isEven(-2));
console.log(isEven(-7));
console.log(isEven(Infinity));

/*
Write a functions which takes a number and returns true if the number is odd 
or return false if he number is even

isEven(4) -> true
isEven(3) -> false
isEven(0) -> true
isEven(-2) -> true
isEven(-7) -> false

EVEN: number is divisible by 2          -> number % 2 === 0
EVEN: number is not divisible by 2      -> number % 2 !== 0
*/

// function isOdd(num) {
//     return num % 2 !== 0;
// }

function isOdd(num) {
    return !isEven(num);
}

console.log(isOdd(4));
console.log(isOdd(3));
console.log(isOdd(0));
console.log(isOdd(-2));
console.log(isOdd(-7));
console.log(isOdd(Infinity));


/* 
Write a function named initials which takes 2 arguments as fName and lName and returns initials 

inintials('John', 'Doe')        -> 'J.D.'
inintials('Adam', 'Smith')      -> 'A.S.'
*/

function initials(fName, lName) {
    return `${fName[0]}.${lName[0]}.`
}

console.log(initials('John', 'Doe'));


/* 
Write a function named inits which takes a fullname and returns initials 

inits('John', 'Doe')        -> 'JD'
inits('Adam', 'Smith')      -> 'AS'
*/

function initials(fullName) {
    let name = fullName.split(' ');
    let firstInit = name[0];
    let lastInit = name[1];
    return firstInit[0] + lastInit[0];
}
console.log(initials('John Doe'));


function initials(fullName) {
    const names = fullName.split(' ');
    return names[0][0];
}
console.log(initials('John Doe'));


function inits(fullName) {
    return (fullName[0] + fullName[fullName.indexOf(' ') + 1]);
}
console.log(inits('John Doe'));

