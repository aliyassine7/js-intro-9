let gender = 'male';
// let fname;

// if(gender === 'male') {
//     fname = 'Alex'
// }
// else {
//     fname = 'Emma';
// }

// Using ternary instead of if-else above
// condition ? true-statement : false-statement;
// gender === 'male' ? fname = 'Alex' : fname = 'Emma';

let fname = gender === 'male' ? 'Alex' : 'Emma';

console.log(fname); // 'Alex'


let number = 1;

number & 2 === 0 ? console.log('EVEN') : console.log('ODD');


let num2 = 5;

if(num2 > 0) {
    console.log('POSITIVE');
}
else if(num2 < 0) {
    console.log('NEGATIVE');
}
else {
    console.log('ZERO');
}

num2 > 0 ? console.log('POSITIVE') : num2 < 0 ? console.log('NEGATIVE') : console.log('ZERO');

let result = num2 > 0 ? 'POSITIVE' : num2 < 0 ? 'NEGATIVE' : 'ZERO';
console.log(result);


/* 

*/

// let mood; // it will be either 'GREAT' (70+) or 'GOOD' (< 70)

let mood;
let mock_score = 70;

// mock_score >= 70 ? mood = 'GREAT' : mood = 'GOOD'; // logging the mood without storing

console.log(mood);

// let mood = mock_score >= 70 ? 'GREAT' : 'GOOD'; // storing mood in a variable to be used for the rest of the program

if(mood === 'GREAT') {
    console.log('Have fun!');
}
else {
    console.log('Practice more!');
}

let name;

name = true ? 'John' : 'Jane';
