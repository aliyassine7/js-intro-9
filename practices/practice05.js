// Task 1
let r1 = Math.floor(Math.random() * 100 + 1);

if(r1 <= 25) console.log(`${r1} is in the 1st half\n${r1} is in the 1st quarter`);
else if(r1 <= 50) console.log(`${r1} is in the 1st half\n${r1} is in the 2nd quarter`);
else if(r1 <= 75) console.log(`${r1} is in the 2nd half\n${r1} is in the 3rd quarter`);
else console.log(`${r1} is in the 2nd half\n${r1} is in the 4th quarter`);

// Shorter way for task 1 w/ nested if-else
// if (r1 <= 50) {
//     console.log(`${r1} is in the 1st half`);
//     if (num1 <= 25) console.log(`${r1} is in the 1st quarter`);
//     else console.log(`${r1} is in the 2nd quarter`);
// }
// else {
//     console.log(`${r1} is in the 2nd half`);
//     if (r1 <= 75) console.log(`${r1} is in the 3rd quarter`);
//     else console.log(`${r1} is in the 4th quarter`);
// }

// Task 2
let r2 = Math.floor(Math.random() * 100 + 1);
let r3 = Math.floor(Math.random() * 100 + 1);
let r4 = Math.floor(Math.random() * 100 + 1);

if (r2 % 2 === 0 && r3 % 2 === 0 && r4 % 2 === 0) console.log(`true`);
else console.log(`false`);

// let r2 = Math.floor(Math.random() * 100) + 1;
// let r3 = Math.floor(Math.random() * 100) + 1;
// let r4 = Math.floor(Math.random() * 100) + 1;
// console.log(r2 % 2 === 0 && r3 % 2 === 0 && r4 % 2 === 0);


// Task 3
let char = ' '
let ascii = char.charCodeAt(0)

if(48 <= ascii && ascii <= 57) console.log(`"${char}" is a digit`);
else if(65 <= ascii && ascii <= 90 || 97 <= ascii && ascii <= 122) console.log(`"${char}" is a letter`);
else if(ascii === 32) console.log(`"${char}" is a whitespace`);
else console.log(`"${char}" is a special character`); 

// Task 4
function hasBlue(word) {
    return word.toLowerCase().includes('blue'); 
}

// Task 5
function startT(str) {
    return str.toLowerCase().startsWith('t');
}