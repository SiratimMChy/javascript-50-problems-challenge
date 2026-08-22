/*Problem 37: Create a memoized function that caches previous results and avoids repeating the same calculation. */
function memoizedFunction() {
    let cache = {};

    return function (num) {
        if (cache[num]) return cache[num];
        cache[num] = num * num;
        return cache[num];
    };
}
const calculate = memoizedFunction();
console.log(calculate(5));
console.log(calculate(5));
console.log(calculate(12));
