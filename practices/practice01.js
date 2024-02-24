// Task 1
console.log(`The random number * 5 = ${Math.floor(Math.random() * 51) * 5}`);


// Task 2
let randomNum1 = Math.floor(Math.random() * 11);
let randomNum2 = Math.floor(Math.random() * 11);
let randomNum3 = randomNum1 - randomNum2;

console.log(`Min number = ${Math.min(randomNum1, randomNum2)}`);
console.log(`Max number = ${Math.max(randomNum1, randomNum2)}`);
console.log(`Difference = ${Math.abs(randomNum3)}`);

// Task 3
let randomNum4 = Math.floor(Math.random() * 51) + 50;
let remainder = randomNum4 % 10;

console.log(`The random number % 10 = ${remainder}`);

// Task 4
let n1 = (Math.floor(Math.random() * 11) + 1) * 5;
let n2 = (Math.floor(Math.random() * 11) + 1) * 4;
let n3 = (Math.floor(Math.random() * 11) + 1) * 3;
let n4 = (Math.floor(Math.random() * 11) + 1) * 2;
let n5 = (Math.floor(Math.random() * 11) + 1) * 1;

console.log(n1 + n2 + n3 + n4 + n5);

// Task 5
let num1 = Math.floor(Math.random() * 25) + 1;
let num2 = Math.floor(Math.random() * 25) + 26;
let num3 = Math.floor(Math.random() * 25) + 51;
let num4 = Math.floor(Math.random() * 25) + 76;

let max = Math.max(num1, num2, num3, num4);
let min = Math.min(num1, num2, num3, num4);

console.log(`Difference of max and min = ${Math.abs(max - min)}`);
console.log(`Difference of second and third = ${Math.abs(num3 - num2)}`);
console.log(`Average of all = ${(num1 + num2 + num3 + num4) / 4}`);