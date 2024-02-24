let fName = 'John';

// length property - returns how many characters you have in the string
let sizeFName = fName.length;

console.log(sizeFName); // 4
console.log(fName.length); // 4


// concat() method
let lname= 'Wick';

// let fullName = fName + ' ' + lname;
// let fullName = `${fName} ${lname}`;
let fullName = fName.concat(' ').concat(lname); // 'John Wick'



/*
TASK: it combines strings 
RETURN: it returns a new string
ARGUMENTS: it takes a string as an argument 
CHANGE ORIGINAL VALUE: It does not change original string values
STATIC or ON-STATIC: non-static

Static vs non-static decision
Did you call method with variable?
YES -> non-static
NO -> static
*/