/* Task 1
Write a function named calculateTotalPrice1() which takes an object of some 
shopping items with their quantities as key-value pairs and returns the 
total price of the given items based on the price list below.

1 Apple is $2.00​
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25
*/

const calculateTotalPrice1 = obj => {
    const menu = {
        apple: 2.00,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25
    }

    let total = 0;

    for (const amount in obj) {
        total += menu[amount] * obj[amount];
    }
    return total;
}

console.log(calculateTotalPrice1({ apple: 3, mango: 1 })); // 10.99
console.log(calculateTotalPrice1({ apple: 2, pineapple: 1, orange: 3 })); // 19.12
console.log(calculateTotalPrice1({ apple: 0, mango: 0, orange: 0 })); // 0
console.log(calculateTotalPrice1({ apple: 1, pineapple: 1, orange: 0, mango: 1 })); // 12.24


/* Task 2
Write a function named calculateTotalPrice2() which takes an object of 
some shopping items with their quantities as key-value pairs and returns 
the total price of the given items based on the price list below.

1 Apple is $2.00​
1 Orange is 3.29
1 Mango is $4.99
1 Pineapple $5.25

Note: There will be some discounts as below​.
There will be %50 discount for every second Apple​
There will be 1 free Mango if customer gets 3. So, fourth one is free.
*/

const calculateTotalPrice2 = (order) => {
    let total = 0;

    const menu = {
        apple: 2.0,
        orange: 3.29,
        mango: 4.99,
        pineapple: 5.25,
    };

    for (const item in order) {
        let price = menu[item];
        let amount = order[item];

        if (item === 'apple') {
            for (let i = 1; i <= amount; i++) {
                if (i % 2 === 0) total += (price / 2);
                else total += price;
            }
        }

        else if (item === 'mango') {
            for (let i = 1; i <= amount; i++) {
                if (i % 4 === 0) total += 0;
                else total += price;
            }
        }

        else total += price * amount;
    }
    return total.toFixed(2);
};

console.log(calculateTotalPrice2({ apple: 3, mango: 5 })) // 24.96
console.log(calculateTotalPrice2({ apple: 4, mango: 8, orange: 3 })) // 45.81
console.log(calculateTotalPrice2({ apple: 0, pineapple: 0, orange: 0 })) // 0.00
console.log(calculateTotalPrice2({ apple: 4, pineapple: 1, orange: 1, mango: 3 })) // 29.51 


/* Task 3
Write a function named nthWord() which takes a string and a 
number arguments and returns the nth word in the string. 

Note: Function should return empty string if the number argument 
is greater than the count of the words in the given string.
*/

// const nthWord = (str, num) => {
//     const words = str.split(' ');

//     if (num >= 1 && num <= words.length) return words[num - 1];
//     else return '';
// }

const nthWord = (str, num) => {
    str = str.split(' ');
    return num > str.length ? '' : str[num - 1];
}

console.log(nthWord("I like programming languages", 2)); // "like"
console.log(nthWord("QA stands for Quality Assurance", 4)); // "Quality"
console.log(nthWord("Hello World", 3)); // ""
console.log(nthWord("Javascript", 1)); //  "Javascript”
console.log(nthWord("", 1)); //  ""


/* Task 4
Write a function named isArmstrong() which takes a number argument and 
returns true if given number is armstrong, return false otherwise.​

Note: An armstrong number is a number that is equal to the sum of its own digits raised to the power of the number of digits. 
In other words, an n-digit number is an Armstrong number if the sum of its digits, each raised to the nth power, is equal to the number itself.
Let's take an example to understand it better. Consider the number 153.​
To determine if 153 is an armstrong number, we need to check if the sum of its digits, 
each raised to the power of the number of digits, equals the original number.​
1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153​
In this case, the sum of the individual digits raised to the power of 3 (the number of digits in 153)
is equal to the original number, which means 153 is an armstrong number.
*/

const isArmstrong = num => {
    const numbers = num.toString().split('');

    return numbers.reduce((acc, curr) => acc + curr ** numbers.length, 0) === num;
}

console.log(isArmstrong(153)); // 	true
console.log(isArmstrong(123)); // 	false
console.log(isArmstrong(1634)); // 	true
console.log(isArmstrong(153)); // 	true
console.log(isArmstrong(1111)); // 	false


/* Task 5
Write a function named reverseNumber() which takes a number argument 
and returns it back reversed without converting it to a String.

Note: Do not convert number to string to complete the task.
*/

const reverseNumber = num => {
    let reversed = 0;
    while (num !== 0) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reversed;
}

console.log(reverseNumber(371)); // 173
console.log(reverseNumber(123)); // 321
console.log(reverseNumber(12)); // 21
console.log(reverseNumber(0)); // 0
console.log(reverseNumber(111)); // 111


/* Task 6
Write a function named doubleOrTriple() which takes an array of numbers as argument and a boolean value. 
It will return the array elements doubled if true or tripled if the boolean value is false.
*/

const doubleOrTriple = (arr, boolean) => arr.map(el => boolean ? el * 2 : el * 3);
// const doubleOrTriple = (arr, num) => arr.map(elem => elem * (num ? 2 : 3))

console.log(doubleOrTriple([1, 5, 10], true)); // [2, 10, 20]
console.log(doubleOrTriple([3, 7, 2], false)); //  [9, 21, 6]
console.log(doubleOrTriple([-1, -2], true)); // [-2, -4]
console.log(doubleOrTriple([0], false)); // [0]
console.log(doubleOrTriple([-1, 0, 1], true)); // [-2, 0, 2]


/* Task 7
Write a function named splitString() which takes a string and a 
number arguments and returns the string back split by the given number. 

Note: Return empty string if the string shorter than splitting 
number or the string length is not divisible by the given number.
*/

// const splitString = (str, num) => {
//     if (str.length % num !== 0) return '';

//     let result = '';

//     for (let i = 0; i < str.length; i++) {
//         result += str[i];
//         if ((i + 1) % num === 0) result += ' ';
// }
//     return result.trim();
// }

// const splitString = (str, num) => {
//     if (str.length % num !== 0 || str.length < num) return '';

//     const parts = [];
    
//     for (let i = 0; i < str.length; i += num) {
//         parts.push(str.slice(i, i + num));
//     }

//     return parts.join(' ');
// };

// const splitString = (str, num) => {
//     if(str.length > num && str.length % num === 0) {
//         return str.slice(0, num) + ' ' + str.slice(num)
//     }
//     else return ''
// }

const splitString = (str, num) => str.length > num && str.length % num === 0 ? str.slice(0, num) + ' ' + str.slice(num) : '';

console.log(splitString("JavaScript", 5)); // "JavaS cript"
console.log(splitString("Java", 2)); // "Ja va"
console.log(splitString("Javava", 2)); // "Ja va"
console.log(splitString("Automation", 3)); // ""
console.log(splitString("Hello", 6)); // ""
console.log(splitString("12", 1)); // "1 2"
console.log(splitString("123456789012345", 5)); // "1 2"