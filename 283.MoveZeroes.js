let nums = [0,1,0,3,12]


var moveZeroes = function(nums) {
    //track the index of a non zero element
    let index = 0;
    //loop through the array
    for ( let i= 0; i < nums.length; i++) {
        //if nums[i] its not zero we will switch places with nums[index] and increase the index
        if ( nums[i] !== 0){
            temp = nums[index];
            nums[index] = nums[i];
            nums[i] = temp;
            index++
        }
    }
//example i = 0, index = 0
//first itteration nums[i] is 0 so we go on
//second itteration nums[i] it is 1 so we switch places and adter that index will be 1
//third itteration nums[i] is 0, we go on
//forth itteration nums[i] is 3, we will switch places with nums[index] (nums[1]) which is 0 
//and we will increase index to 2
//fifth itteration nums[i] is 12, we will switch places nums nums[index] (nums[2]) which is 0
};