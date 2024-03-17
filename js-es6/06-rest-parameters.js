// Rest parameters allow us to create a method with any number of arguments 

function sum(...args) { // any number of arguments as an array
    let sum = args.reduce((acc, curr) => acc + curr, 0);

    console.log(sum);
}

// Method overloading -> same method name but different arguments

sum(1); // 1
sum(1, 2); // 3
sum(1, 2, 3); // 6
sum(1, 2, 3, 4); // 10


/*
Write a function that takes any number of arguments and return their product

product()               -> 0
product(5)              -> 5
product(2, 5)           -> 10
product(2, 5, 3)        -> 30
*/
const product = (...args) => {
    if(args.length === 0) return 0; // if there are no arguemnts then return 0

    let result = args.reduce((acc, curr) => acc * curr, 1)

    return result;
}

// One line solution
// const product = (...args) =>  args.length === 0 ? 0 : args.reduce((acc, curr) => acc * curr, 1)

console.log(product()); // 0
console.log(product(0)); // 0
console.log(product(5)); // 5
console.log(product(2, 5)); // 10
console.log(product(2, 5, 3)); // 30


function printUserInfo(fname, lname, ...rest) {
    console.log(`fullname is ${fname} ${lname}.`);

    for(const arg of rest) {
        console.log(`Additional info ${arg}`);
    }
}

// printUserInfo('John', 'Doe');
// printUserInfo('John', 'Doe', 25);
printUserInfo('John', 'Doe', 25, 'Chicago');


function favActs(top, ...rest) {
    console.log(`Top fav activity is ${top}`);

    let count = 0;

    if(rest.length > 0) {
        for(const arg of rest) {
            count++;
            console.log(`The next fav activity is ${count} ${arg}`);
        }
    } 
}

favActs('Coding', 'Reading', 'Biking');