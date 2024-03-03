const numbers = [3, 4, 7, 3, 2, 2, 7];

// Find the sum of all numbers          -> 28
// Find the average of all numbers      -> 4

let sum = 0;

for(i of numbers) {
    sum += i;
}
console.log('Sum =', sum);
console.log('Average =', sum / numbers.length);


// Find the product of all the numbers starting from the index 3 -> 3 * 2 * 2 * 7 -> 84
let product = 1

for(let i = 3; i < numbers.length; i++) {
    product *= numbers[i];
}
console.log('The product is =', product);




const nums = [ 1, 5, 7, 2, 3, 4, 9, 4, 5, 2, 1, 0, 10, 3, 5 ];

// Find the sum of first 3 and last 3 elements -> 31

let result = 0;

for(let i = 0; i <= 2; i++) {
    // result += nums[i] + nums[nums.length - (i + 1)];
    result += nums[i] + nums.at(-i-1);
}
console.log(`Sum of the first and last 3 elements are = ${result}`);


result = 0;

for(let i = 0; i < nums.length; i++) {
    if(i <= 2 || i >= nums.length - 3) result += nums[i];
}
console.log(`Sum of the first and last 3 elements are = ${result}`);


const newArr = [...nums.slice(0, 3), ...nums.slice(-3)];

result = 0;

for(const num of newArr) {
    result += num
}
console.log(`Sum of the first and last 3 elements are = ${result}`);