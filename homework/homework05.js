// Task 1
/*
Write a function named countPos() which takes an array of numbers as an argument and returns how many elements are positive​ when invoked. 
*/

const countPos = (arr) => {
    let count = 0;

    arr.forEach(num => {
        if (num > 0) count++;
    });
    return count;
}

console.log(countPos([-45, 0, 0, 34, 5, 67])); // 3
console.log(countPos([-23, -4, 0, 2, 5, 90, 123])); // 4
console.log(countPos([0, -1, -2, -3])); // 0


// Task 2
/*
Write a function named countA() which takes a string argument and returns how many A or a there are in the given string when invoked.

NOTE: Ignore case sensitivity.
*/

const countA = (str) => {
    let count = 0;
    str.trim();
    const words = str.split(''); // Split the string into an array of words
    words.forEach(word => {
        if (word.toLowerCase().includes('a')) count++;
    });
    return count;
}

console.log(countA("TechGlobal is a QA bootcamp")); // 4
console.log(countA("QA stands for Quality Assurance")); // 5
console.log(countA("Cypress")); // 0


// Task 3
/*
Write a function named as countVowels() which takes a string word as an argument and returns the count of the vowel letters when invoked.

NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
*/

const countVowels = (str) => {
    let count = 0;
    let lowerCaseStr = str.toLowerCase();

    for (let i = 0; i < str.length; i++) {
        let letter = lowerCaseStr[i];

        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            count++;
        }
    }
    return count;

    // Another solution 
    /*
    let count = 0;
    for (const letter of str) {
        let lowerCaseLetter = letter.toLowerCase();

        if (lowerCaseLetter === 'a' || lowerCaseLetter === 'e' || lowerCaseLetter === 'i' || lowerCaseLetter === 'o' || lowerCaseLetter === 'u') {
            count++;
        }
    }
    return count;
    */
}

console.log(countVowels("Hello")); // 2
console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript is fun")); // 5
console.log(countVowels("")); // 0


// Task 4
/*
Write a function named as countConsonants() which takes a string word as an argument and returns the count of the consonant letters when invoked.

NOTE: A letter that is not vowel is considered as a consonant letter.
*/

const countConsonants = (str) => {
    let count = 0;

    for (const letter of str) {
        let lowerCaseLetter = letter.toLowerCase();
        if(!(lowerCaseLetter === 'a' || lowerCaseLetter === 'e' || lowerCaseLetter === 'i' || lowerCaseLetter === 'o' || lowerCaseLetter === 'u')) count++;
    }
    return count;
}

console.log(countConsonants("Hello")) // 3
console.log(countConsonants("Hello World")) // 8
console.log(countConsonants("JavaScript is fun")) // 12
console.log(countConsonants("")) // 0


// Task 5
/*
Write a function named countWords() which takes a string argument and returns the total count of words in the given string when invoked.

NOTE: Be careful about the extra whitespaces before and after the string.
*/