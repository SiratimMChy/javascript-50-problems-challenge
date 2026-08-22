/*Problem 35: Create a curried function that works like multiply(2)(3)(4) and returns 24. */
function multiply(a) {
    return function (b) {
        return function (c) {
            return a*b*c;
        };
    };
}

console.log(multiply(2)(3)(4));