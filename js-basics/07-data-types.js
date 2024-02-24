// 1. string
let favCoffee = 'Mocha'; 
let itemName = 'Mouse';

// 2. number -> floating numbers & absolute numbers
let favCoffeePrice = 4.00;
let itemPrice = 19.99;

let age = 25;
let itemQuantity = 5;

// 3. boolean
let b1 = true;
let b2 = false;
let isThereMocha = true;

if(isThereMocha) {
    console.log('Can I get a Mocha');
}
else {
    console.log('Can I get a regular black coffee');
}

// 4. undefined - a variable declared but not assigned with any value
let favBook;
console.log(favBook); // undefined

// 5. null
let middleName = null;
console.log(middleName);

// 6. bigint -> this was added with ES6
let num1 = 98342349837423987832326n;
let num2 = BigInt(98342349837423987832326n); // longer version of bigint

console.log(num1);

// 7. symbol
let star = Symbol('*');
console.log(star);


// typeof operator 
console.log(typeof 5); // number
console.log(typeof 5n); // bigint
console.log(typeof true); // boolean
console.log(typeof !false); // boolean
console.log(typeof (3 == 3 && 5 != 5)); // boolean
console.log(typeof '123'); // boolean
console.log(typeof null); // null
console.log(typeof undefined); // undefined

