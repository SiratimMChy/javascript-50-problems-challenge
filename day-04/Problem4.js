function sum(n) {
    if (n !== 0) {
        return n + sum(n - 1);
    }
    else {
        return 0;
    }
}

console.log(sum(5));
