// test array and target
const nums = [-1,0,3,5,9,12];
const target = 2;

//function
var search = function(nums, target) {
    //set the lower point and the upper point
    let lower = 0;
    let upper = nums.length;
    //loop through the array
    while(lower <= upper) {
        //set the middle point
        const middle = lower + Math.floor((upper - lower) / 2)
        if( target === nums[middle]) {
            //if target is nums[middle] return middle
            return middle
        } else if ( target < nums[middle]){
            // if target is lower than nums[middle], we will update the upper point
            upper = middle - 1
        } else {
            //if target is greater than nums[middle], we will update the lower point
            lower = middle + 1;
        }
    } 
    //if the target it is not in the array we will return -1
    return - 1;
};

console.log(search(nums, target));