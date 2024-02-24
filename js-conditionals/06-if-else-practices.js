const {generateRandomNumber} = require('../utils/MathHelper.js');

// Task 1
/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/
console.log(`\n----------------------------------\n`);

r1 = generateRandomNumber(1, 12);
console.log('Randomly generated number is ' + r1)

if(r1 == 1 || r1 === 2 || r1 === 12) {
    console.log('Winter');
}
else if(r1 === 3 || r1 === 4 || r1 === 5) {
    console.log('Spring');
}
else if(r1 === 6 || r1 === 7 || r1 === 8) {
    console.log('Summer');
}
else {
    console.log('Fall');
}

console.log(`\n----------------------------------\n`);

// Task 2

