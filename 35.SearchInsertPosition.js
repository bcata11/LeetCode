// test array and target
let nums = [1,3,5,6];
let target = 2;

//function
var searchInsert = function(nums, target) {
    //set the lower point and the upper point
    let lower = 0;
    let upper = nums.length;
    //loop through the array
    while(lower <= upper) {
        //set the middle point
        const middle = Math.floor((lower + upper) /2);

        if(nums[middle] === target) {
            //if target is nums[middle] return middle
            return middle
        } else if (target > nums[middle]) {
            //if target is greater than nums[middle], we will increase lower by 1
            lower += 1
        } else {
            //else if target is lower than nums[middle], we will decrease upper by 1
            upper -= 1
        }
    }
    //when the loop is finished the lower variable will be the index we need
    return lower;
};

console.log(searchInsert(nums, target));
