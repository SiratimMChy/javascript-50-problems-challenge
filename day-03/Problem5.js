/* Problem 21: Calculate the sum of all numeric values in an object.*/
let obj = {
    a: 10,
    b: 20,
    c: "Hello",
    d: 30
};
let sum = 0;
for (const value in obj) {
    const element = obj[value];
    if (typeof element === "number") {
        sum+=obj[value];
    }
}

console.log(sum);
