let nums = [1,2,3,4,5,6,7]
let k = 3



var rotate = function(nums, k) {
    k = k % nums.length

    //rverse function using two pointers method
    let reverse = (right,left) => {
        while(right < left)
       { let temp = nums[right];
        nums[right] = nums[left];
        nums[left] = temp;
        right++;
        left--;}
    }

    //reverse the array
    reverse(0, nums.length-1);
    //reverse the first part that we need
    reverse(0, k-1);
    //bring back the initial order for the rest of the array
    reverse(k, nums.length -1)
};