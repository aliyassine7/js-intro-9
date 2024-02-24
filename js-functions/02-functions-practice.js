// VOID Methods
/* 
Create a function named as sayHi which outputs "Hi" to the console when invoked
If the function does not RETURN something, then you cannot store the result of the function in a variable
*/

function sayHi() {
     console.log('Hi');
}

sayHi(); // Output: 'Hi'

/*
Write a function named as sayHello which takes a name (string) outputs 'Hello {name}!'

sayHello('John'); // Output: 'Hello John!'
*/

function sayHello(name) {
    console.log(`Hello ${name}!`);
}

sayHello('Ali');
sayHello('Bob');
sayHello('Joe');

/*
Write a function named as greet which takes 2 arguments as name and greeting and output 

greet('Good morning', 'John'); // Output: 'Good morning, John!'
greet('Hello', 'Ali'); // Output: 'Hello, Ali!'
*/

function greet(greeting, name) {
    console.log(`${greeting}, ${name}!`)
}

greet(`Good morning`, `John`);
greet(`Ali`, `Good Morning`);
greet(`Hello`, `Ali`);


// RETURN methods 
/*
Write a function named as sum which takes 2 number arguments and return their sum

sum(3, 5)   -> 8
sum(4, 7)   -> 11
sum(-2, 3)   -> 1
*/

function sum(num1, num2) {
    return num1 + num2;
}

console.log(sum(1, 2)); // 3
console.log(sum(5, 5)); // 10
console.log(sum(10, 15)); // 25
console.log(sum(10.5, 15)); // 25.5

/*
Write a function named as product which takes 3 number arguments and returs their product

product(2, 4, 5) -> 40
product(3, 7, 6) -> 126
product(5, 0, 9) -> 0
*/

function product(num1, num2, num3) {
    return num1 * num2 * num3;
}

console.log(product(2, 4, 5)); // 40
console.log(product(3, 7, 6)); // 126
console.log(product(5, 0, 9)); // 0


function numTimesStr(str, num) {
    for(let i =1; i <= num; i++){
        console.log(str);
    }
}

numTimesStr('You got this!!!', 5)


function king(name, n) {
    console.log(`${name} the ${n}th!`)
}

king('Henry', 5) // 'Henry the 5th'