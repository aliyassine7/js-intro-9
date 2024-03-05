// Task 1
const numbers = [3, 4, 7, 3, 2, 2, 7];

let sumEvenIndexes = 0;

for(let i = 0; i < numbers.length; i++) {
    if(i % 2 === 0) sumEvenIndexes += numbers[i];
}
console.log(sumEvenIndexes)


// Task 2
let productOddIndex = 1;

for(let i = 0; i < numbers.length; i++) {
    if(i % 2 !== 0) productOddIndex *= numbers[i];
}
console.log(productOddIndex);


/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->       [ 5, 8, 2, 1, 2 ]
Second array ->     [ 9, 3, 5, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will multiply the numbers of the same indexes from the first 2 arrays 
and output the third array as well.

Third array->       [ 45, 24, 10, 1, 0 ]
*/

const arr1 = [ 5, 8, 2, 1, 2 ];
const arr2 = [ 9, 3, 5, 1, 0 ];

console.log(arr1);
console.log(arr2);

const arr3 = [];

for(let i = 0; i < arr1.length; i++) {
    arr3.push(arr1[i] * arr2[i]);
}
console.log(arr3);


const array1 = [5, 8];
const array2 = [9, 3, 5, 1, 0];

// [45, 24, 5, 1, 0]

let array3 = [];

let shortLength = Math.min(array1.length, array2.length);

const shortArray = array1.length < array2.length ? array1 : array2;
const longArray = array1.length > array2.length ? array1 : array2;

for(let i = 0; i < shortArray.length; i++) {
    array3.push(array1[i] * array2[i]);
}

console.log(array3.concat(longArray.slice(shortArray.length)));