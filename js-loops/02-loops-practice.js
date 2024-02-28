// Output the numbers from 100 to 0 (both inclusive) –> 100 99 98 97 96 …
/* 
start: 100
end: 0
update: -1
*/

for(let i = 100; i >= 0; i--) {
    console.log(i)
}

// Output all the even numbers from 0 to 50 (both inclusive) -> 0 2 4 6 8 …
/* 
start: 0
end: 50
update: +2
*/

for(let i = 0; i <= 50; i += 2) {
    console.log(i);
}

for(let i = 0; i <= 50; i++) {
    if(i % 2 === 0) console.log(i);
}

for(let i = 0; i <= 25; i++) {
    console.log(i * 2);
}

// Output all the numbers divisible by 5 from 0 to 50 (both inclusive) -> 0 5 10 ...50
/*
start: 0
end: 50
update: +5
*/

for(let i = 0; i <= 50; i+=5) {
    console.log(i);
}

for(let i = 0; i <= 50; i++) {
    if(i % 5 === 0) console.log(i);
}

for(let i = 0; i <= 10; i++) {
    console.log(i * 5);
}

// Find sum of the numbers from 1 to 5 (both inclusive) -> 15
/* 
start: 1
end: 5
update: +1
*/

let sum = 0;

for(let i = 1; i <= 5; i++) {
    sum += i;
}

console.log(sum)

// Find sum of the numbers from 10 to 15 (both inclusive) -> 75

let total = 0;

for(let i = 10; i <= 15; i++) {
    total += i;
}
console.log(total);

// Output each character from TechGlobal School -> T e c h G l o b a l   S c h o o l

let arr = [];
