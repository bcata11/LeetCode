/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

var updateMatrix = function (mat) {
    //creating a queue to store the zeroes in the matrix
    let q = [];
    //traverse the matrix and find the zeroes
    for (let i = 0, l = mat.length; i < l; i++) {
        for (let j = 0, m = mat[0].length; j < m; j++) {
            //if the element is a zero we will push that element into the queue
            if (mat[i][j] === 0) {
                q.push([i, j, 0])
            } else {
                //if it is not a 0 we will mark the element as infinity
                mat[i][j] = Infinity;
            }
        }
    }
    //set the directions
    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ]
    //loop through the queue
    while (q.length) {
        //get the first item of the queue
        const [row, col, path] = q.shift();
        mat[row][col] = Math.min(mat[row][col], path)//update 1s with current path

        //traverse adjacents
        for (const [dx, dy] of directions) {
            const x = row + dx;
            const y = col + dy;

            if (x < 0 || x >= mat.length) continue;
            if (y < 0 || y >= mat[0].length) continue;
            if (mat[x][y] !== Infinity) continue;

            q.push([x, y, path + 1]);
        }
    }
    return mat
};