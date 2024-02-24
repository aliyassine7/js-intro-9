let num = 1;
let letter; // undefined

switch(num) {
    case 1: 
        letter = 'A';
        break;
    case 2: 
        letter = 'B';
        break;
    case 3:
        letter = 'C';
        break;
    default: 
    letter = '';
}

console.log(letter);



const date = new Date(); // built in JS object

console.log(date.getDate()); // 12
console.log(date.getMonth()); // 1      -> january considered as 0, february 1....
console.log(date.getFullYear()); // 2024
console.log(date.getDay()); // 1        -> sunday is considered 0, monday = 1...
console.log(date.getHours()); // 19
console.log(date.getMinutes()); // 27

console.log(date.toLocaleTimeString()); // 7:29:44 PM
console.log(date.getSeconds()); // 9

console.log(date.toLocaleDateString()); // 2/12/2024


/*
0 sunday
1 monday
.
.
.
.
6 staurday

in case it returns 0 or 6, print 'WEEKEND'
otherwise, print 'WEEKDAY'
*/

let day = date.getDate(); // returns 0-6 inclusive

// switch solution
switch(day) {
    case 0:
    case 6:
        console.log('WEEKEND');
        break;
    default:
        console.log('WEEKDAY');
}

switch(true) {
    case day === 0 || day === 6: 
        console.log('WEEKEND');
        break;
    case day >= 1 && day <= 5:
        console.log('WEEkDAY');
        break;
    default: 
        throw Error('Day came unexpected!');
}

// if-else solution
if(day ===0 || day === 6) {
    console.log('WEEKEND');
}
else {
    console.log('WEEKDAY');
}

// ternary solution
day === 0 || day === 6 ? console.log('WEEKEND') : console.log('WEEKDAY');



/*
Find and print the quarter that our r1 is in 
1 and 25 inclusive  -> 'FIRST'
26 and 50 inclusive  -> 'SECOND'
51 and 75 inclusive  -> 'THIRD'
76 and 100 inclusive  -> 'FOURTH'
*/

let r1 = Math.floor(Math.random() * 100) + 1;

switch(true) {
    case r1 >= 1 && r1 <= 25:
        console.log('FIRST');
        break;
    case r1 >= 26 && r1 <= 50:
        console.log('SECOND');
        break;
    case r1 >= 51 && r1 <= 75:
        console.log('THIRD');
        break;
    default:
        console.log('FOURTH');
}

// another way to write the above switch statement
switch(true) {
    case r1 <= 25: // it will always give us a number >= 1 because thats what we set the parameters for in r1
        console.log('FIRST');
        break;
    case r1 <= 50:
        console.log('SECOND');
        break;
    case r1 <= 75:
        console.log('THIRD');
        break;
    default:
        console.log('FOURTH');
}

// if-else 
if(r1 <= 25) console.log('FIRST');
else if(r1 <= 50) console.log('SECOND');
else if(r1 <= 75) console.log('THIRD');
else console.log('FOURTH');