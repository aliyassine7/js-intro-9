/* Task-1
Write a function named countVC() which takes a string argument and 
returns an object with the count of vowels and consonants.
*/

const countVC = (str) => {
  str = str.toLowerCase();

  let countsObj = { vowels: 0, consonants: 0 };

  for (const char of str) {
    if (char >= "a" && char <= "z") {
      if ("aeiou".includes(char)) countsObj.vowels++;
      else countsObj.consonants++;
    }
  }

  return countsObj;
};

console.log(countVC("Hello"));
console.log(countVC("Programming"));
console.log(countVC("123AbC"));
console.log(countVC("123!@#xyz"));
console.log(countVC(""));

/* Task-2
Write a function named countChars() which takes a string argument 
and returns an object with the count of letters, numbers, and specials.

NOTE: If the count of a category is 0 then it should not be in the object. 
Also spaces do not count towards any category
*/

const countChars = (str) => {

  str = str.toLowerCase();

  const chars = {letters: 0, numbers: 0, specials: 0} 

  for (const char of str) {
    if(char === ' ') continue;

    if(char >= 'a' && char <= 'z') {
      chars.letters++;
    }
    else if(char >= '0' && char <= '9') {
      chars.numbers++;
    }
    else chars.specials++;
  }

  // If the count of a category is 0 then it should not be in the object.
  for (const char in chars) {
    if (chars[char] === 0) delete chars[char]
  }

  return chars;
};

console.log(countChars("Hello")); // {letters: 5}
console.log(countChars("Programming 123")); // {letters: 11, numbers: 3}
console.log(countChars("123AbC!@#")); // {letters: 3, numbers: 3, specials: 3}
console.log(countChars("0987654321")); // {numbers: 10}
console.log(countChars("     ")); // {}
console.log(countChars("")); // {}


/* Task-3
Write a function named maxOccurrences() which takes a string argument and returns 
the character that appears the most number of times in the string.

NOTE: If there is a tie, return the first one that appears in the string. This task is case sensitive. 
Ignore spaces. If the string is empty or consist of spaces only, then return an empty string.
*/

const freqChart = (str) => {
  return str
    .toLowerCase()
    .split("")
    .filter((elem) => elem !== " ")
    .reduce((obj, char) => {
      obj[char] = (obj[char] || 0) + 1;
      return obj;
    }, {});
};

const maxOccurrences = (str) => {
  const freq = freqChart(str);
  let max = 0;
  let result;
  for (const key in freq) {
    if (freq[key] > max) {
      max = freq[key];
      result = key;
    }
  }

  return result || "";
};

console.log(maxOccurrences("Hello")); //​ "l"
console.log(maxOccurrences("Occurrences")); // "c"
console.log(maxOccurrences("  ab  ")); // "a"
console.log(maxOccurrences("12   3   21")); // "1"
console.log(maxOccurrences("     ")); // ""
console.log(maxOccurrences("")); // ""


/* Task-4
Write a function named starOut() which takes a string argument and returns 
it back with every star removed as well as the right and left of the star.

NOTE: If there are 2 stars next to each other than remove the next non star
So "ab*cd" yields "ad" and "ab**cd" also yields "ad".
*/

const starOut = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "*" && str[i - 1] !== "*" && str[i + 1] !== "*") {
      result += str[i];
    }
  }
  return result;
};

console.log(starOut("ab*cd")); // "ad"
console.log(starOut("ab**cd")); // "ad"
console.log(starOut("xm*sm*sy")); // "xy"
console.log(starOut("abc")); // "abc"
console.log(starOut("***")); // ""
console.log(starOut("   ")); // "   "
console.log(starOut("")); // ""


/* Task-5
Write a function named romanToInt() which takes a string roman numeral as its arguments 
and return the roman numeral converted to the number. A roman numeral is a 
set of symbols that add up to a number. CXII -> 100+10+1+1 -> 112

NOTE: 
Symbol       Value
I               1
V               5
X               10
L               50
C               100
D               500
M               1000
*/

const romanToInt = (str) => {
  const numerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  str = str.split("");
  let result = 0;
  str.forEach((elem, index) => {
    if (numerals[elem] < numerals[str[index + 1]]) result -= numerals[elem];
    else result += numerals[elem];
  });
  return result;
};

console.log(romanToInt("I")); // 1
console.log(romanToInt("IV")); // 4
console.log(romanToInt("CXII")); // 112
console.log(romanToInt("MMM")); // 3000
console.log(romanToInt("MMMDCCCLXXXVIII")); // 3888
console.log(romanToInt("MDCLXVI")); // 1666
