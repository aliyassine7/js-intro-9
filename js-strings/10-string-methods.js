// Padding


let str= 'ABC';

console.log(str.padStart(str.length + 3, '#')); // '#######ABC'
console.log(str.padStart(5, '#')); // '##ABC'

console.log(str.padStart(4, '$$$')) // '$ABC'
console.log(str.padEnd(4, '$$$')) // 'ABC$'
console.log(str.padEnd(4, '$')) // 'ABC$'

console.log(str.padEnd(2, '$$')) // 'ABC'
console.log(str.padEnd(-10, '$$')) // 'ABC'

let greeting = 'Hello';

console.log(greeting.repeat(3)); // 'HelloHelloHello'

let well = 'Well!'

console.log(well.repeat(5)); // 'Well!Well!Well!Well!Well!'
