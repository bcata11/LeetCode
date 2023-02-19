let nums = [2,7,11,15];
let target = 9;

var twoSum = function(nums, target) {
    //create a new hash map
    let hash = {};
    //loop through the array
    for(let i = 0; i < nums.length; i++) {
        let actual = nums[i];
        //calculate the diffrence between the actual number and the target 
        let difference = target - actual;

        if( hash[difference] !== undefined) {
            //if hash[difference] exists, return hash[diference] and i
            return [hash[difference], i];
        } else {
            //if hash[difference] doesnt exist, set hash[actual] with the value of i
            hash[actual] = i;
        }
        
    }
    console.log(hash)
};
