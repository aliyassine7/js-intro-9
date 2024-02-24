let name = 'Jon';
console.log(name);


const names = ['John', 'Jane', 'Alex', 'Max'];

// logging out your array
console.log(names);

// retrieving an individual element from an array
console.log(names[2]); //Alex
console.log(names[0]); //John

// retrieve and update Max with Mark
names[3] = 'Mark';
console.log(names);




const numbers = [10, -3, 25, 67, 99, 100.99];

//you can get array size with the length property
let arraySize = numbers.length;

console.log(arraySize); // 5

console.log(numbers[2],numbers[3],numbers[5]);



const arr = ['John', true, 25, undefined, null, 45]

console.log(arr.length); // 6
console.log(arr[0]); // 'John'
console.log(arr[5]); // 45
console.log(arr[-1]); // undefined
console.log(arr[6]); // undefined
console.log(arr[7]); // undefined
console.log(arr[1000]); // undefined
