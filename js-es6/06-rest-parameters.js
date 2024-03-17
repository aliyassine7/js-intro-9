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