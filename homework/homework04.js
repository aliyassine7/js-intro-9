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
hello