/* Problem 30: Create a function that checks whether a number is prime. */
function isPrime(n) {
    if (n < 2) {
        console.log("Not Prime");
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return "not prime";
        }
    }
    return "Prime"
}

console.log(isPrime(7));

/*
function isPrime(n, i = 2) {
    if (n < 2) {
        return "Not Prime";
    }
    else if (i == n) {
        return "Prime";
    }
    else if (n % i === 0) {
         return "Not Prime";
    }
    else {
       return  isPrime(n, i + 1);
    }
}

console.log(isPrime(7));

*/
