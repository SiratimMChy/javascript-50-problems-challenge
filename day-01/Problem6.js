/*Problem 6: Count how many even and odd numbers are in an array.*/
function EvenOdd(numbers) {
    let Even = 0;
    let Odd = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            Even++;
        } else {
            Odd++;
        }
    }
    console.log(`Total even number is ${Even}`);
    console.log(`Total odd number is ${Odd}`);
}

let numbers = [1, 2, 3, 4, 5, 6]
EvenOdd(numbers);
