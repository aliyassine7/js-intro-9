const {generateRandomNumber} = require('../utils/MathHelper.js');

let randomNumber = generateRandomNumber(1, 10);

if (randomNumber === 7) {
    console.log(`I got my favorite number`);
} 
else {
    console.log(`Unfortunately, I got ${randomNumber}`)
}
 
console.log(`\n----------------------------------\n`);
// Task 1
/*
Generate a random number between 1 and 10
Print EVEN if the number is EVEN
Print ODD if the number is ODD

5   -> 'ODD'
8   -> 'EVEN'
*/

let r1 = generateRandomNumber(1, 10);

if (r1 % 2 === 0) {
    console.log('EVEN')
}
else {
    console.log('ODD')
}

console.log(`\n----------------------------------\n`);

// Task 2
/*
Generate a random number between 0 and 1 (both inclusive)
Print "The number is ZERO" if the generated number is zero
Print "The number is ONE" if the generated number is one
*/
let r2 = generateRandomNumber(0, 1);

if (r2 === 1) {
    console.log(`The number is ONE`);
}
else {
    console.log(`The number is ZERO`);
}

console.log(`\n----------------------------------\n`);

// if (r2) {
//     console.log(`The number is ONE`);
// }
// else {
//     console.log(`The number is ZERO`);
// }

// Task 3
/*
Generate a random number between -10 and 10 (both inclusive)
Print "The number is POSITIVE" if the generated number is more than zero
Print "The number is NEGATIVE" if the generated number is less than zero
Print "The number is ZERO" if the generated number is zero
*/
let r3 = generateRandomNumber(-10, 10);

if (r3 > 0) {
    console.log(`The number is POSITIVE`);
}
else if (r3 < 0) {
    console.log(`The number is NEGATIVE`);
}
else { // hidden condition !(r3 > 0) && !(r3 < 0)
    console.log(`The number is ZERO`);
}

console.log(`\n----------------------------------\n`);
