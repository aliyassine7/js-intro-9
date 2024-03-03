const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

//Count how many positive numbers you have in the array -> 4
console.log('\n------------------Count positives------------------\n');

let countP = 0;

for(const number of numbers) {
    if(number > 0) countP++;
}
console.log('Positives = ' + countP);


countP= 0

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > 0) countP++;
}
console.log('Positives = ' + countP);


//Count how many negative or neutral numbers you have in the array -> 6
console.log('\n------------------Count negatives or neutrals------------------\n');

let countNorN = 0

for(const number of numbers) {
    if(number <= 0) countNorN++;
}
console.log('Negatives = ' + countNorN);


//Count how many even numbers you have in the array -> 7
console.log('\n------------------Count evens------------------\n');

let countE = 0;

for(number of numbers) {
    if(number % 2 === 0) countE++;
}
console.log('Even numbers = ' + countE);


//Count how many even, but not negative, numbers you have in the array -> 5
console.log('\n------------------Count positive evens------------------\n');

let countPEven = 0;

for(i of numbers) {
    if(i % 2 === 0 && i >= 0) countPEven++;
}

console.log('Even but no negative numbers = ' + countPEven);