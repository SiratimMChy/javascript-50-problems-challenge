/* Problem 24: Create a function using Rest Parameters (...) that accepts any number of numbers and returns their sum. */

function sum(...numbers) {
    let Sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        Sum += numbers[i];
    }
    return Sum;
}
console.log(sum(15, 20, 25, 30, 35, 40, 45));
