let nums = [1,2,3,4,5,4,4,4,5,5,1,1,1,2,3,3];
let unique =[];
for (let i = 0; i < nums.length; i++) {
 if (!unique.includes(nums[i])) {
    unique.push(nums[i]);
 }
}

console.log(unique);
