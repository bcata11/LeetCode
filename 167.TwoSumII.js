let numbers = [2,7,11,15];
let target = 9;


var twoSum = function(numbers, target) {
    //set two pointers
    let left = 0
    let right = numbers.length-1;
    for(let i = 0; i < numbers.length; i++){
        //loop through the array and check if the sum is equal with target
        let sum = numbers[left] + numbers[right];
        if(sum === target) {
            return[left + 1, right + 1]
        } else if( sum > target) {
            //if the sum is grater than target we need to decrease the right element bcs is grater than left
            right--;
        } else {
            //if the sum is lower than target we need to increase the left element bcs is lower than right
            left++;
        }
    }
};