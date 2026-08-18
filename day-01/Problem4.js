/*Problem 4: Find the factorial of a number.*/
function FindFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial = factorial * i;
    }
    console.log(`Factorial of ${number} is ${factorial}`);
}

FindFactorial(5);