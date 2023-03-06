var floodFill = function(image, sr, sc, color) {
    //define the original pixel
    const original = image[sr][sc];

    function recurse(image, sr, sc) {
        //check if the pixel is not equal with the original or is the color we need
        //if it's diffrent color from the original we wil not change it
        if(image[sr][sc] !== original || image[sr][sc] === color) return image
        //check the boundaries
        if( sr < 0 || sc < 0 || sr > image.length -1|| sc > image[0].length - 1) return image
        
        //update the color
        image[sr][sc] = color;

        //recurse in 4 direction
        recurse(image, sr+1, sc)//down
        recurse(image, sr-1, sc)//up
        recurse(image, sr, sc+1)//right
        recurse(image, sr, sc-1)//left

        return image
    }
    return recurse(image, sr, sc)
};