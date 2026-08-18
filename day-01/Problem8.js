/*Problem 8: Check whether a string is a palindrome.*/
let str = "madam"
let revStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
}
if (str === revStr) {
    console.log("String is a palindrome");
}
else {
    console.log("String is Not a palindrome");
}