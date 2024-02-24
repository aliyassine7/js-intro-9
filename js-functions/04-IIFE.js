function sayHi() {
    console.log('Hi');
}

// Invoke the function
sayHi();

(function () {
    console.log('This is IIFE!');
})(); //This is only invoked 1 time and right away 