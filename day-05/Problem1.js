/*Problem 33: Create a counter using Closure where the count cannot be directly accessed from outside.*/
function createCounter() {
    let count = 0;

    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = createCounter();
counter();
counter();
counter();
