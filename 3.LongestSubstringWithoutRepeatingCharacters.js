
let s = "abcabcbb";

var lengthOfLongestSubstring = function(s) {
    //if the array is empty return 0
    if(s.length === 0) return 0

    //creating a set where we will have only unique values
    let set = new Set();
    let i = 0;
    let j = 0;
    let maxLength = 0;

    while(j < s.length) {
        //adding a character to the set
        if (!set.has(s[j])) {
            set.add(s[j])
            j++
        } else {
            //remove the character from the set
            set.delete(s[i])
            i++
        }
        //check the max length against the set size
        maxLength = Math.max(maxLength, set.size)
    }
    return maxLength
};