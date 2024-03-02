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
let r2 = Math.floor(Math.random() * 100 + 1);

attempt = 0;

for(let i = r2; i >= 1; i++) {
    if(r2 % 5 === 0) console.log(i)
    attempt++;
}

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


// ChatGPT
/*
const objects = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];

console.log(objects);

let countBorP = 0;
let countBookorPen = 0;

for(let i = 0; i <= objects.length - 1; i++) {
    if(objects[i][0].toLowerCase() === 'b' || objects[i][0].toLowerCase() === 'p') countBorP++;
    if(objects[i].toLowerCase() === 'book' || objects[i].toLowerCase() === 'pen') countBookorPen++;
}

console.log(`Elements starting with 'B' or 'P' = ${countBorP}`);
console.log(`Elements having 'book' or 'pen' = ${countBookorPen}`);
*/