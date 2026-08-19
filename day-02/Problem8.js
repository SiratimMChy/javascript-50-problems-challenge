/*Problem 16: Find the common elements between two arrays.*/
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let common =[];
for (let i = 0; i < arr1.length; i++) {
 if (arr1.includes(arr2[i])){
    common.push(arr2[i]);
 }
}

console.log(common);