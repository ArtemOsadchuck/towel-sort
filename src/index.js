
// You should implement your task here.

module.exports = function towelSort (matrix) {
 
    if(matrix === undefined){
        return []
    }

    for (let i = 0; i < matrix.length; i++){
        if (i % 2){
            matrix[i].sort((a, b) => b-a)
        }
    }

    let arr = matrix.flat(1)
    return arr
}
