// Task 13
/*
Write a method named mostRepeated() takes an array argument
and returns the most counted element from the array.

NOTE: Assume that you will not be given empty array and the 
count of one element will always be more than the others.
*/

// const mostRepeated = arr => {
//     const countMap = {};

//     let mostCount = 0
//     let mostCounted;

//     for(const element of arr) { // 4
//         if(!countMap[element]) countMap[element] = 1;
//         else countMap[element]++;

//         if(countMap[element] > mostCount) {
//             mostCounted = element;
//             mostCount = countMap[element];
//         }
//     }

//     // countMap = { '4': 4, '7': 1, '23': 3 }

//     return mostCounted;
// }

// console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])); // 4
// console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])); // "pen"
// console.log(mostRepeated([10])); // 10
// console.log(mostRepeated(["TechGlobal"])); // "TechGlobal"


// const mostRepeated = arr => {

//     // Create an object to store the count of each element
//     const countMap = {};

//     // Iterate through the array and update the count for each element
//     arr.forEach(element => {
//         if (countMap[element]) {
//             countMap[element]++;
//         } else {
//             countMap[element] = 1;
//         }
//     });

//     // Find the element with the maximum count
//     let mostRepeatedElement;
//     let maxCount = 0;
//     for (const element in countMap) {
//         if (countMap[element] > maxCount) {
//             maxCount = countMap[element];
//             mostRepeatedElement = element;
//         }
//     }

//     return mostRepeatedElement;

// }


const mostRepeated = (arr) => {
    let counts = {};
    let mostRepeated;
    let largestCount = 0;

    for (let el of arr) {
        if (counts[el]) counts[el]++;
        else counts[el] = 1;

        if (counts[el] > largestCount) {
            mostRepeated = el;
            largestCount = counts[el];
        }
    }

    return mostRepeated;
}
    console.log(mostRepeated([4, 7, 4, 4, 4, 23, 23, 23])); // 4
    console.log(mostRepeated(["pen", "pencil", "pen", "123", "abc", "pen", "pencil"])); // "pen"
    console.log(mostRepeated([10])); // 10
    console.log(mostRepeated(["TechGlobal"])); // "TechGlobal"