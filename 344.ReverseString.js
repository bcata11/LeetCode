let s = ["h","e","l","l","o"]


var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    //set up the start and the end
    while(left <= right){
        //loop through the string and switch places between the start and the end
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
};