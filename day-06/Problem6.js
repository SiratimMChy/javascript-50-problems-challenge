/*Problem 45: Predict the output order of code containing:
Synchronous code
setTimeout()
Promise .then()
async/await */
console.log("Task A");

setTimeout(() => {
    console.log("Task B");
}, 0);

Promise.resolve().then(() => {
    console.log("Task C");
});

async function test() {
    console.log("Task D");

    await Promise.resolve();

    console.log("Task E");
}

test();

console.log("Task F");

/*
The output is Task A → Task D → Task F → Task C → Task E → Task B because synchronous code runs first, so `A`, `D`, and `F` execute immediately. Then the Microtask Queue runs Promise callbacks, so `C` and the code after `await`, `E`, execute next. Finally, the `setTimeout()` callback is handled from the Task Queue, so `B` runs last.
*/