// Task 1
function firstPos(arr) {
    for (let num of arr) {
        if (num > 0) {
            return num;
        }
    }
}
console.log(firstPos([0, 3, -9, 5, 8]));
console.log(firstPos([-2, 0, -7, 10, -5]));
console.log(firstPos([1, 2, 3, -2]));

// Task 2
function lastNeg(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] < 0) {
            return arr[i];
        }
    }
}
console.log(lastNeg([0, 3, -9, 5, 8]));
console.log(lastNeg([-2, 0, -7, 10, -5]));
console.log(lastNeg([1, 2, 3, -2]));

// Task 3
function firstLongest(arr) {
    let longestElement = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longestElement.length) {
            longestElement = arr[i];
        }
    }

    return longestElement;
}

console.log(firstLongest(["red", "blue", "yellow", "white"])) //    -> "yellow"
console.log(firstLongest(["Apple", "Banana", "Orange"])) // 	    -> "Banana"
console.log(firstLongest(["purple", "yellow", "orange"])) //    	-> "purple"


// Task 4
function lastShortest(arr) {
    let shortestElement = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length <= shortestElement.length) shortestElement = arr[i];
    }
    return shortestElement;
}

console.log(lastShortest(["red", "blue", "yellow", "white"]));
console.log(lastShortest(["Apple", "Banana", "Mango"]));
console.log(lastShortest(["white", "yellow", "brown"]));

// Task 5
function max(array) {
    let greatest = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] > greatest) greatest = array[i];
    } return greatest;

}
console.log(max([0, 3, -9, 5, 8]));
console.log(max([-2, 0, -7, 10, -5]));
console.log(max([1, 2, 3, -2]));


// Task 6
function max(arr) {
    let greatest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > greatest) {
            greatest = arr[i];
        }
    }
    return greatest;
}
console.log(max([0, 3, 5, 8]));


// Task 7
function commonElements(arr1, arr2) {
    const commonE = [];

    for (let i = 0; i < arr1.length; i++) {
        let currentElement = arr1[i];
        if (arr2.includes(currentElement)) {
            commonE.push(currentElement);
        }
    }

    return commonE;
}


console.log(commonElements([10, 20, 30, 50, 70], [20, 50, 70]));
console.log(commonElements([30, 50, 70], [20, 100, 300]));
console.log(commonElements(["30", "abc", "hi"], [30, "Hi", "abc"]));