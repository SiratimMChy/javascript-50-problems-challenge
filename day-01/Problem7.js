/*Problem 7: Reverse a string without using the built-in reverse() method.*/
let str = "Asif";
let revStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
}
console.log(`Reverse String is ${revStr}`);
