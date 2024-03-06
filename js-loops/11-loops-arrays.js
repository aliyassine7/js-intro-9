// Find the first city that has the odd length  -> Chicago
const cities = ['Berlin', 'Rome', 'Chicago', 'Kiev', 'Istanbul', 'Tokyo'];

let firstOddLengthCity;

for(const city of cities) {
    if(city.length % 2 !== 0) {
        firstOddLengthCity = city;
        break;
    }
}

console.log(`The first city that has an odd length is = ${firstOddLengthCity}`);


// Find all the cities that has length more than 5 -> [ 'Berlin', 'Chicago', 'Istanbul' ]
const citiesWithLength6orMore = [];

// for(let i = 0; i < cities.length; i++) {
//     if(cities[i].length > 5) {
//         citiesWithLength6orMore.push(cities[i]);
//     }
// }
// console.log(`The cities that have a length greater than 5 are = ${citiesWithLength6orMore}`);


// citiesWithLength6orMore = [];

for(const city of cities) {
    if(city.length > 5) citiesWithLength6orMore.push(city);
}
console.log(`The cities that have a length greater than 5 are = ${citiesWithLength6orMore}`);


// Find all the cities that has i or I in it -> [ 'Berlin', 'Chicago', 'Kyiv', 'Istanbul' ]
const hasI = [];

for(const city of cities) {
    if(city.toLowerCase().includes('i')) hasI.push(city);
}
console.log(hasI);