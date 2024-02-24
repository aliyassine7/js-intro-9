console.log('Hello ' + 1 + 1); // 'Hello 11'
console.log('Hello + 1' + 1); // 'Hello 11'
console.log('Hello ' + (1+ 1)); // 'Hello 2'

console.log('abc' - 1 + 1); // NaN => Not a Number
console.log('abc' - (1 + 1)); // NaN => Not a Number
console.log('1' - 1 + 1); // 1
console.log('1' - 1 + 1); // 1
console.log('a' - 1 + 1); // NaN

console.log(3 + 5 + 'a' + 3 + 5); // '8a35'

console.log('35' / '7' % 2) // 1
console.log('35' / '7' % '2') // 1
console.log('35' / '7' + '2') // 52



console.log('The sum is = ' + (5 + 2)); // The sum is = 7