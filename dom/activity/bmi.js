/**
 * bmi = weight / (height / 100)^2
 */

// Step 1
// Get elements
// input, btn, result
const heightEl = document.getElementById('height');
const weightEl = document.getElementById('weight');
const btnEl = document.querySelector('button');
const resultsEl = document.querySelector('#results');

// Step 2
// Get values
// Attach an event
btnEl.addEventListener('click', (event) => {
    event.preventDefault();
    const heightValue = Number(heightEl.value);
    const weightValue = Number(weightEl.value);

    const bmi = weightValue / (heightValue / 100) ** 2;
    
    resultsEl.innerHTML = `BMI is ${bmi.toFixed(2)}`;
})
// Do calculations

// Step 3
// Show result => append to DOM