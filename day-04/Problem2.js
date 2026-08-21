/* Problem 26: Create a function that accepts an array and a callback function, then processes each element using the callback. */
function processArray(nums, callback) {
    for (let i = 0; i < nums.length; i++) {
        callback(nums[i]);
    }
}
function double(num) {
    console.log(num * 2);
}
let nums = [1, 2, 3, 4];
processArray(nums, double);