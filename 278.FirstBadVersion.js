//isBadVersion is an API call with a boolean value

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        //set up the lower and upper poiny
        let lower = 1;
        let upper = n;
        let middle;
        //loop through the versions to find the bad one
        while(lower < upper) {
            let middle = Math.floor(lower+ (upper - lower) / 2);
            if(isBadVersion(middle)) {
                //check if middle is a bad version and return middle if it is
                upper = middle
            } else {
                /*else if middle was not a bad version, 
                the lower point will be the next number after middle,
                bcs if one of the version before was bad, middle would also be bad
                */
                lower = middle + 1;
            }
        } 
        return upper;
    };
};