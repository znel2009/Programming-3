function clearMatrix(){
    for(y in matrix){
        for(x in matrix[y])
            matrix[y][x] = 0
    }
}

module.exports = {
    clearMatrix : () => {
        return clearMatrix()
    }
}