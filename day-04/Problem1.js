function largestNum(a, b, c) {
    if (a >= b && a >= c) {
        return `${a} is largest number`
    }
    else if (b >= a && b >= c) {
        return `${b} is largest number`
    }
    else{
        return `${c} is largest number`
    }
}

let largestNumber = largestNum(122, 121, 113);

console.log(largestNumber);
