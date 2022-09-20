
const Grass = require("./Grass")
const Grazer = require("./Grazer")
const Hyänen = require("./Hyänen")
const Mensch = require("./Mensch")
const Pilz = require("./Pilze")
const Mamut = require("./Mamut")

function clearMatrix(){
    for(y in matrix){
        for(x in matrix[y])
            matrix[y][x] = 0
    }
    grassArr = []
    grazerArr = []
    hyänenArr = []
    pilarray = []
    humanarr = []
    mamutArr = []
}

function getRandomMatrix(h, w) {
    matrix = []
    for (let index = 0; index < h; index++) {
        mati = []
        for (let index = 0; index < w; index++) {
            mati.push(Math.round(Math.random()*6))

        }
        matrix.push(mati)


    }

    return matrix
}

function createRandomMatrix(){
    clearMatrix()
    matrix = getRandomMatrix(20,20)
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grassObj = new Grass(x, y)
    
                //füge das Gras Object dem grass-Array
                grassArr.push(grassObj)
    
            }
            else if (matrix[y][x] == 2) {
                let grazerObj = new Grazer(x, y)
    
                //füge das Gras Object dem grass-Array
                grazerArr.push(grazerObj)
    
            }
            else if (matrix[y][x] == 3) {
                let hyänenobj = new Hyänen(x, y)
    
                hyänenArr.push(hyänenobj)
    
            }
            else if (matrix[y][x] == 4) {
                let pil = new Pilz(x, y)
    
                pilarray.push(pil)
    
            }
            else if (matrix[y][x] == 5) {
                let human = new Mensch(x, y)
    
                humanarr.push(human)
    
            }
            else if (matrix[y][x] == 6) {
                let mamut = new Mamut(x, y)
    
                mamutArr.push(mamut)
    
            }
        }
    }
}

module.exports = {
    clearMatrix : () => {
        return clearMatrix()
    },
    createRandomMatrix: () => {
        return createRandomMatrix()
    }
}