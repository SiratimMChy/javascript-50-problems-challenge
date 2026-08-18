/*Problem 5: Find the largest and smallest numbers in an array.*/

function FindNumber(arr) {
    let largest = arr[0];
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
       if (arr[i] >= largest) {
        largest = arr[i];
       }
       if(arr[i] <= smallest){
        smallest = arr[i];
       }
    }
    console.log(`The largest number is ${largest}, and the smallest number is ${smallest} in the array.`);
}

let nums = [1,5,7,99,0,2]
FindNumber(nums);