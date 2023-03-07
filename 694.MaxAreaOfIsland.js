
let grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]

var maxAreaOfIsland = function(grid) {
    let score = 0;
    let n = grid.length;
    let m = grid[0].length;

     const travel = (i, j) => {
        // check the limits of the grid or if the element exists
        if( i < 0 || j < 0 || i >= n || j >= m || !grid[i][j] ) return 0
        grid[i][j] = 0
        //set up for directions        
        let up = travel(i-1 , j)
        let down = travel( i+1 , j)
        let right = travel( i , j + 1)
        let left = travel(i , j -1 )
        return 1 + up + down + right + left
    }
   
    //iterate through each element
    for( let i = 0; i < n; i++){
        for ( let j = 0; j < m; j++){
            //check if the element is an island
            if(grid[i][j] === 1){
                score = Math.max(score, travel(i, j))
            }
        }
    }
    return score

};
