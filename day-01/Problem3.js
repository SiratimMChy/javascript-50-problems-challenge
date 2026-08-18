/* Problem 3: Find the sum of all numbers from 1 to N. */
function SumNumbers(number) {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i;
    }
    console.log(sum);
}

SumNumbers(10);