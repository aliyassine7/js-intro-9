// Task 1
/*
Write function that takes a name and check if it starts with 'E' or 'e' and returns a boolean
Function name is startE.
NOTE: If the given name is empty -> then return false

startE('Emily') -> true
startE('emily') -> true 
startE('Alex') -> false 
startE('') -> false
*/
function startE(fname) {
    if(fname[0] === 'e' || fname[0] === 'E') {
        return true;
    } 
    else {
        return false
    }

    // another way to write the function without if else statements    -> return fname[0] === 'E' || fname[0] === 'e'
    /* another way to write the function would be:
       if(fname.length === 0 || fname[0].toUpperCase() !== 'E') {
        return false;
        }
        else {
            return true;
        }
    */

}

console.log(startE('Emily')); // true
console.log(startE('emily')); // true
console.log(startE('Alex')); // false
console.log(startE('')); // false

// Task 2
function divisible5(num) {
    if(num % 5 === 0) {
        return true
    }
    return false;

    // another way to write the function without if else statements    -> return num % 5 === 0;
}

console.log(divisible5(7)); // false
console.log(divisible5(0)); // true
console.log(divisible5(10)); // true
console.log(divisible5(99)); // false


// Task 3
// THIS IS AN INTERVIEW QUESTION!!!!
/*
Write a function called divisible5 and it takes a number as an argument
It will return true if the number is divisible by 5
It will return false if the number is NOT divisible by 5

divisible5(7)       -> false
divisible5(0)       -> true
divisible5(10)      -> true
divisible5(99)      -> false
*/
function fooBar(num) {
    if(num % 5 === 0 && num % 7 === 0) {
        return 'foobar';
    }
    else if(num % 5 === 0) {
        return 'foo';
    }
    else if(num % 7 === 0) {
        return 'bar';
    }
    else {
        return num;
    }
    // another way to write this function is by using the least common multiple
    // 35 is the LCM for 5 and 7
    // if(num % 35 === 0)
}

console.log(fooBar(2)); // 2
console.log(fooBar(3)); // 3
console.log(fooBar(5)); // 'foo'
console.log(fooBar(10)); // 'foo'
console.log(fooBar(14)); // 'bar'
console.log(fooBar(0)); // 'foobar'
console.log(fooBar(35)); // 'foobar' 
console.log(fooBar(70)); // 'foobar'


// Task 4
/*
Write a function called getGrade which takes a number as the score and return a letter as a grade
0-100

90-100          -> 'A'
80-89           -> 'B'
70-79           -> 'C'
60-69           -> 'D'
less than 60    -> 'F'

getGrade(90) -> 'A' 
getGrade(89) -> 'B' 
getGrade(80) -> 'B' 
getGrade(79) -> 'C' 
getGrade(70) -> 'C' 
getGrade(69) -> 'D' 
getGrade(60) -> 'D' 
getGrade(59) -> 'F' 

getGrade(95) -> 'A' 
getGrade(83) -> 'B' 
getGrade(23) -> 'F' 
getGrade(67) -> 'D'
*/

// function getGrade(score) {
//     if(score >= 90 && score <= 100) {
//         return 'A';
//     }
//     else if(score >= 80 && score <= 89) {
//         return 'B';
//     }
//     else if(score >= 70 && score <= 79) {
//         return 'C';
//     }
//     else if(score >= 60 && score <= 69) {
//         return 'D';
//     }
//     else {
//         return 'F';
//     }
// }

// function getGrade(score) {
//     if(score >= 90 && score <= 100) return 'A';
//     else if(score >= 80 && score <= 89) return 'B';
//     else if(score >= 70 && score <= 79) return 'C';
//     else if(score >= 60 && score <= 69) return 'D';
//     return 'F';
// }

// function getGrade(score) {
//     if(score < 60) return 'F';
//     else if(score < 70) return 'D';
//     else if(score < 80) return 'C';
//     else if(score < 90) return 'B';
//     return 'A';
// }

function getGrade(score) {
    if(score < 0 || score > 100) throw Error(`INVALID input!!! The score cannot be ${score}`);

    if(score >= 90) return 'A';
    else if(score >= 80) return 'B';
    else if(score >= 70) return 'C';
    else if(score >= 60) return 'D';
    return 'F';
}

console.log(getGrade(90)); // 'A'
console.log(getGrade(89)); // 'B'
console.log(getGrade(80)); // 'B'
console.log(getGrade(79)); // 'C'
console.log(getGrade(70)); // 'C'
console.log(getGrade(69)); // 'D'
console.log(getGrade(60)); // 'D'
console.log(getGrade(59)); // 'F' 
console.log(getGrade(95)); // 'A'
console.log(getGrade(-1)); // ERROR