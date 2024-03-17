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



const product = (...args) => {
    if(args.length === 0) return 0; // if there are no arguemnts then return 0

    let result = args.reduce((acc, curr) => acc * curr, 1)

    return result;
}

console.log(product()); // 0
console.log(product(0)); // 0
console.log(product(5)); // 5
console.log(product(2, 5)); // 10
console.log(product(2, 5, 3)); // 30