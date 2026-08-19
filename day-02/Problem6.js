/*Problem 14: Count how many times each character appears in a string.  */
let str = "hello";
let count = {};
for (let i = 0; i < str.length; i++) {
    if (count[str[i]]) {
        count[str[i]]++;
    } else {
        count[str[i]] = 1;
    }
}

console.log(count);
