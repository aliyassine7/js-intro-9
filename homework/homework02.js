// Task 1
let str1 = "5", str2 = "2";
let sum = Number(str1) + Number(str2);
let product = Number(str1) * Number(str2);
let division = Number(str1) / Number(str2);
let subtraction = Number(str1) - Number(str2);
let remainder = Number(str1) % Number(str2);
let exponentiation = Number(str1) ** Number(str2);

console.log(`The sum of ${str1} and ${str2} is = ${sum}`);
console.log(`The product of ${str1} and ${str2} is = ${product}`);
console.log(`The division of ${str1} and ${str2} is = ${division}`);
console.log(`The subtraction of ${str1} and ${str2} is = ${subtraction}`);
console.log(`The remainder of ${str1} and ${str2} is = ${remainder}`);
console.log(`The exponentiation of ${str1} and ${str2} is = ${exponentiation}`);

// Task 2
let s1 = "200", s2 = "-50";
let num1 = Number(s1), num2 = Number(s2);

console.log(`The greatest value is = ${Math.max(num1, num2)}`);
console.log(`The smallest value is = ${Math.min(num1, num2)}`);
console.log(`The average is = ${(num1 + num2) / 2}`);
console.log(`The absolute difference is = ${Math.abs(num1 - num2)}`);

// Task 3
let randomN1 = Math.floor(Math.random() * 50 + 1);
let randomN2 = Math.floor(Math.random() * 50 + 1);

console.log(`The absolute difference between numbers is = ${Math.abs(randomN1 - randomN2)}`);

// Task 4
let r1 = Math.floor(Math.random() * 50 + 1);
let r2 = Math.floor(Math.random() * 50 + 1);
let r3 = Math.floor(Math.random() * 50 + 1);
let r4 = Math.floor(Math.random() * 50 + 1);
let r5 = Math.floor(Math.random() * 50 + 1);

console.log(`The max value = ${Math.max(r1, r2, r3, r4, r5)}`);
console.log(`The min value = ${Math.min(r1, r2, r3, r4, r5)}`);

// Task 5
let randNum1 = (Math.floor(Math.random() * 51) + 50);
let randNum2 = (Math.floor(Math.random() * 51) + 50);
let randNum3 = (Math.floor(Math.random() * 51) + 50);

console.log(`The number 1 = ${randNum1}`);
console.log(`The number 2 = ${randNum2}`);
console.log(`The number 3 = ${randNum3}`);
console.log(`The sum of numbers is = ${randNum1 + randNum2 + randNum3}`);

// Task 6
let randomNum1 = Math.floor(Math.random() * 100 + 1);
let randomNum2 = Math.floor(Math.random() * 100 + 1);
let randomNum3 = Math.floor(Math.random() * 100 + 1);

let correct = (randomNum1 > 25) && (randomNum2 > 25) && (randomNum3 > 25);

console.log(correct);

// Task 7
let name = 'David';

console.log(`The length of the name = ${name.length}
The first character in the name is = ${name[0]}
The last character in the name is = ${name[name.length - 1]}
The first 3 characters in the name are = ${name.slice(0, 3)}
The last 3 characters in the name are = ${name.slice(-3)}`);