/* Problem 29: Use recursion to reverse a string. */
function reverseString(str, i) {
 if(i >= 0){
        return str[i] + reverseString(str, i - 1);
    }
    else{
        return "";
    }
    
}

let str =" Albert";

console.log(reverseString(str, str.length - 1));
