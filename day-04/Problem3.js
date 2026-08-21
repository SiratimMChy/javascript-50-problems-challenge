/* Problem 27: Create a Higher-Order Function that accepts a function and executes it twice. */
function executeTwice(fn) {
    fn();
    fn();
}

function introduction() {
    console.log("Hello, my name is Tuha. I am a Full-Stack Web Developer.");
}

executeTwice(introduction);
