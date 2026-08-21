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