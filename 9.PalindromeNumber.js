let x = 121;

var isPalindrome = function(x) {
    //if x is less than 0 return false
    if( x < 0) {
        return false
    };

    let reverse = 0;
    //loop throught the array, with math.floor i/10 we will check for each digit in the number
    //the logic is 121/10 = 12.1 so math.floor will be 12
    for ( let i = x; i>= 1; i = Math.floor(i/10) ){
        //we will add one digit to the reverse variable each itteration
        //first one will look like this reverse = 0 * 10 + 121 % 10
        //reverse = 0 + 1 = 1
        //the next one will be reverse = 1 * 10 + 12 % 10 = 10 + 2 = 12
        reverse = reverse * 10 + i%10;     
    }
    //return true if reverse is equal with x
   return reverse === x;
};