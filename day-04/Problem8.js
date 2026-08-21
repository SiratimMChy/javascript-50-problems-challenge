/* Problem 32: Create a function that uses map() and a callback to transform every element of an array. */
function transformArray(arr, callback) {
        return callback(arr);
}
let nums = [1, 2, 3, 4];
function transform(nums) {
    let res =nums.map(num => { return num; });
    return res;
}
console.log(transformArray(nums, transform));
