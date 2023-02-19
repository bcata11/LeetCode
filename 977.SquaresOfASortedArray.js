let nums = [-4,-1,0,3,10];


var sortedSquares = function(nums) {
    //we create two pointers, left and right
    let left = 0;
    let right = nums.length - 1;
    //create an array where we will store the numbers
    let sortedA = [];
    let position = nums.length -1;
  
    //loop through the array
    while( left <= right) {
        if(Math.pow(nums[left], 2) > Math.pow(nums[right], 2) ) {
            //if the square of nums[left] is greater than the square of nums[right]
            //add the square of nums[left] to the sorted array and decrement the position
            sortedA[position] = Math.pow(nums[left], 2);
            position--;
            left++;
        } else {
            //if the square of nums[right] is greater than the square of nums[left]
            //add the square of nums[right] to the sorted array and decrement the position
            sortedA[position] = Math.pow(nums[right], 2);
            position--;
            right--;
        }
    }
      return sortedA;
  };