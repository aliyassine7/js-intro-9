// We don't want to see 6 and 13
// We don't like to get any number that is 14 or more

for(let i = 1; i <= 20; i++) {
    if(i === 6 || i === 13) continue; // this skips 6 and 13. It jumps back to the for loop and starts again when it sees those 2 numbers
    else if(i === 14) break; // this terminates it at 14 and does not include 14 in the output
    console.log(`The number is ${i}`);
}