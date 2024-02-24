// Exctracting partial strings (substring)

let language = 'JavaScript';

// slice()
console.log(language.slice(0, 4)); // 0,1,2,3 -> 'Java'

console.log(language.slice(4)); // 'Script'
console.log(language.slice(4, 10)); // 'Script'
console.log(language.slice(4, 11)); // 'Script'

let quote = 'Practice makes it perfect!';

/*
'Practice'
'perfect'
'makes it perfect!'
*/

console.log(quote.slice(0, 8)); // 'Practice'
console.log(quote.slice(18, 25)); // 'perfect'
console.log(quote.slice(9)); // 'makes it perfect!' 

/*
TASK: used to extract partial string from the original string by using indexes
RETURN: it returns a partial string (substring)
    slice(startIndex) -> this will extract substring starting from the startIndex going all the way til the end 
    slice(startIndex, endIndex) -> this will extract substring starting from the startIndex going all the way til the end 
ARGUMENTS: takes one or 2 arguments which are indexes
CHANGE ORIGINAL VALUE: does not change the original value
STATIC or NON-STATIC: non-static

The only difference between slice() and substring() is the way they handle the negative indexes
slice() counts backward when you pass negative arguments 
substring() converst negative indexes to 0
*/

// Tricky part
console.log('abc'.slice(5)); // ''
console.log('abc'.slice(4, 10)); // ''
console.log('abc'.slice(2, 100)); // 'c'

// Negative indexes
console.log('JavaScript'.slice(-3)); // 'ipt'
console.log('JavaScript'.slice(-6)); // 'Script'
console.log('JavaScript'.slice(10, -6)); // 'Script'
console.log('JavaScript'.slice(-5, -7)); // ''

console.log('JavaScript'.slice(3, 2)); // ''

// substring()
let obj = 'Table';
console.log(obj.substring(0, 3)); // 'Tab'
console.log(obj.substring(1)); // 'able'

console.log(obj.slice(0, 3)); // 'Tab'
console.log(obj.slice(1)); // 'able'

console.log(obj.slice(-2)); // 'le'
console.log(obj.substring(-2)); // 'Table' -> substring considers any negative number as 0
console.log(obj.substring(-5, -10)); // ''
console.log(obj.substring(-3, 2)); // 'Ta'


// split() method
let shoppingList = 'Apple, Orange, Bananas, Milk, Eggs';

const shoppingListArray = shoppingList.split(', ');

console.log(shoppingListArray);

console.log(shoppingListArray[0]); // 'Apple'
console.log(shoppingListArray[2]); // 'Bananas'

// ['Apple', 'Orange', 'Bananas', 'Milk', 'Eggs']

/*
Mouse | Computer | Keyboard        -> ' | '

Today is Sunday -> 'is'         ['Today ', ' Sunday']
Today is Sunday -> 'ay'         ['Tod', 'is Sund', '']
hello world     -> 'l'          ['he', '', 'o wor', 'd']

'JavaScript is fun' -> ' '  ['JavaScript', 'is', 'fun']
*/

console.log('Mouse | Computer | Keyboard'.split(' | ')); // ['Mouse', 'Computer', 'Keyboard'] 


/*
TASK: used to split the string into array elements with the given seperator
RETURN: it returns an array
ARGUMENTS: takes one arguments
CHANGE ORIGINAL VALUE: does not change the original
STATIC or NON-STATIC: non.static
*/