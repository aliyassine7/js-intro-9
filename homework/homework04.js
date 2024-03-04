//Task 1
/*
Requirement:
Write a program that outputs all the numbers that are 
divisible by 7 starting from 1 to 100 (both inclusive).
*/
for(let i = 1; i <= 100; i++) {
    if(i % 7 === 0) console.log(i);
}


//Task 2
/*
Requirement:
Write a program that outputs all the numbers that are 
divisible by both 2 and 3 starting from 1 to 50 (both 
inclusive).
*/
for(let i = 1; i <= 50; i++) {
    if(i % 2 === 0 && i % 3 === 0) console.log(i);
}


//Task 3
/*
Requirement:
Write a program that outputs all the numbers that are 
divisible by 5 starting from 100 to 50 (both inclusive).
*/
for(let i = 100; i >= 50; i--) {
    if(i % 5 === 0) console.log(i)
}


//Task 4
/*
Requirement:
Write a program that outputs the squares of all numbers 
starting from 0 to 7 (both inclusive).
*/
for(let i = 0; i <= 7; i++) {
    console.log(i ** 2);
}


//Task 5
/*
Requirement:
Write a program that finds sum of the numbers starting 
from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
*/
let sum = 0;
for(let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);


//Task 6
/*
Requirement:
Write a program generates a random number between 
1 and 10 (both inclusive).
And find the factorial of the number.

Mathematically, the factorial of a non-negative integer n 
is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1

For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1.
*/
let r1 = Math.floor(Math.random() * 10 + 1);
console.log(r1);

let factorial = 1;

for(let i = r1; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);


//Task 7
/*
Requirement:
Write a program generates a random number between 
1 and 100 (both inclusive).
Keep generating a new number till you get a number 
that is divisible by 5.

The program should also count how many attempts it 
takes to generate such a number.

Eventually, print the random number divisible by 5 with 
the number of attempts as below.

Expected Output:
The random number is {randomNumber} and it took 
{attempts} attempt/s to generate it.
*/
let r2;
let attempt = 0;

do {
    r2 = Math.floor(Math.random() * 100 + 1);
    attempt++;
} while (r2 % 5 !== 0);


console.log(`The random number is ${r2} and it took ${attempt} attempt/s to generate it.`);


// Task 8
/*
Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
if it has Pluto, then output true
if it does not have Pluto, output false

Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true
*/
const countries = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(countries.sort());


// Task 9
/*
Requirement:
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 

THEN:
-Output the entire array
-Then, check if the array has Pluto element
if it has Pluto, then output true
if it does not have Pluto, output false

Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true
*/
const dogs = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky'];

console.log(dogs);
console.log(dogs.includes('Pluto'));


// Task 10
/*
Requirement:
-Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael

THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
if it has both, then output true
if it does not have both, output false

Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false
*/
const cats = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];

console.log(cats.sort());

if(cats.includes('Garfield') && cats.includes('Felix')) console.log('true');
else console.log('false');


// Task 11
/*
Requirement:
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75
THEN:
-Output the entire array
-Ouput each element
Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
*/

const numbers = [10.5, 20.75, 70, 80, 15.75];

console.log(numbers);

for(let i = 0; i <= numbers.length - 1; i++) {
    console.log(numbers[i]);
}

//Task 12
/*
Requirement:
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler

THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', 
ignoring cases.
-Output how many elements has 'book' or 'pen' partial 
strings, ignoring cases.

Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4
*/

const objects = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];

console.log(objects);

let countBorP = 0;
let countBookorPen = 0;

for(let i = 0; i <= objects.length - 1; i++) {
    if(objects[i].toLowerCase().includes('book') || objects[i].toLowerCase().includes('pen')) countBookorPen++;
    if(objects[i][0].toLowerCase().startsWith('b') || objects[i][0].toLowerCase().startsWith('p')) countBorP++;
}

console.log(`Elements starting with 'B' or 'P' = ${countBorP}`);
console.log(`Elements having 'book' or 'pen' = ${countBookorPen}`);

countBookorPen = 0;
countBorP = 0;

for(const obj of objects) {
    if(obj[0].toLowerCase() === 'b' || obj[0].toLowerCase() === 'p') countBorP++;
    if(obj.toLowerCase().includes('book') || obj.toLowerCase().includes('pen')) countBookorPen++;
}
console.log(`Elements starting with 'B' or 'P' = ${countBorP}`);
console.log(`Elements having 'book' or 'pen' = ${countBookorPen}`);


// Task 13
/*
Requirement:
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78

THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10

Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2
*/

const nums = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];

console.log(nums);

let moreThan10 = 0;
let lessThan10 = 0;
let isTen = 0;

for(const num of nums) {
    if(num > 10) moreThan10++;
    else if(num < 10) lessThan10++;
    else isTen++; 
}

console.log(`Elements that are more than 10 = ${moreThan10}`);
console.log(`Elements that are less than 10 = ${lessThan10}`);
console.log(`Elements that are 10 = ${isTen}`);


//Task 14
/*
Requirement:
-Create 2 arrays that stores numbers below.
First array->  [ 5, 8, 13, 1, 2 ]
Second array ->  [ 9, 3, 67, 1, 0 ]

THEN:
-Output both arrays
–Then, create a new array that will take the greatest 
value of same index from first 2 arrays and output the 
third array as well.

Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is =  [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]
*/

const arr1 = [5, 8, 13, 1, 2];
const arr2 = [9, 3, 67, 1, 0];
const arr3 = [];

console.log(arr1);
console.log(arr2);

for(let i = 0; i < arr1.length; i++) {
    arr3.push(Math.max(arr1[i], arr2[i]));
}

console.log(`1st array is = ${arr1}`);
console.log(`2nd array is = ${arr2}`);
console.log(`3rd array is = ${arr3}`);


// Task 15
