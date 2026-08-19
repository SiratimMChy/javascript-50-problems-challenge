let nums = [1,2,3,4,5];
let largest = nums[0];
let secondlargest = nums[0];
for (let i = 0; i < nums.length; i++) {
   if(nums[i]>=largest){
    secondlargest = largest;
    largest = nums[i];
   }
   if( secondlargest >  nums[i]){
    secondlargest =  nums[i];
   }
}

console.log(secondlargest);
