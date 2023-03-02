let s1 = "ab"
let s2 = "eidbaooo"


var checkInclusion = function(s1, s2) {
    let map = new Map();//creating a new map to keep track of the frequency of charcacters in s1
    let left = 0;
    let right = 0;
    let count = s1.length;

    for ( let i = 0; i < count; i++){
        map.set(s1[i], (map.get(s1[i]) || 0) + 1);
        //we will add to the map the character and the frequency
        //if s1[i] doesn't exist map.get(s1[i]) || 0 will return 0
    }

    while (right < s2.length) {
        if(map.get(s2[right]) > 0) count--;
        //if the chracter at the s2[right] is in the map and frequency is gretaer than 0, we will decrement the count of characters left
        map.set(s2[right], (map.get(s2[right]) || 0) -1);
        //decrement the frequency of the s2[right] in the map
        if(count === 0) return true;
        //if the count of characters to trck from s1 is equal to 0 we will return true

        if((right - left + 1) >= s1.length) {
        // if the size of sliding window is equal to or greater then the length of s1
            if(map.get(s2[left]) >= 0) count++;
            //if the frequency of the character s2[left] is gretaer or equal to 0, increment the count
            map.set(s2[left], map.get(s2[left] || 0) + 1);
            //increment the frequency of the carachter s2[left] in the map
            left++;
            //increment the left to slide the window to the right
        }
        right++;
        //increment right to expand the window to the right

    }
    return false;

};