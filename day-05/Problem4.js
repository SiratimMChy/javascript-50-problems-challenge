/*Problem 36: Create a curried function that works like calculate(10)(20)(30) and returns the sum.*/
function calculate(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
console.log(calculate(10)(20)(30));