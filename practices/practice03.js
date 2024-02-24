// Task 1
function tripleWord(triple) {
    return triple + triple + triple;
}
console.log(tripleWord('bob'));

// Task 2
function has4(str) {
    return str.length >= 4; 
}
console.log(has4(''));

//Task 3
function celciusToFarenheit(celcius) {
    return (celcius * 9) / 5 + 32;
}

console.log(celciusToFarenheit(20));

// Task 4
function kgToPounds(number) {
    let convert = number * 2.2;
    return convert;
}
console.log(kgToPounds(100))


// Task 5
function rectangleArea(x, y) {
    let area = x * y;
    return area;
}
function rectanglePerimeter(x, y) {
    let perimeter = 2 * (x + y);
    return perimeter;
}
console.log(rectangleArea(5, 4), rectanglePerimeter(5, 4));

// Task 6
function squareArea(x) {
    let area = x * x;
    return area;
}
function squarePerimeter(x) {
    let perimeter = 4 * x;
    return perimeter;
}
console.log(squareArea(5), squarePerimeter(5));