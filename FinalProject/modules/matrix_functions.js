
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
function meteor_crash(msg){

    let x = msg.x
    let y = msg.y

    var directions =  [
        [x-1,y-1],
        [x,y-1],
        [x+1,y-1],
        [x-1,y],
        [x,y],
        [x+1,y],
        [x-1,y+1],
        [x,y+1],
        [x+1,y+1]
    ]



    for (i in directions){
        i = directions[i]


        for(k in grassArr){

            let grass = grassArr[k]

            if(grass.x == i[0] && grass.y == i[1]){
                if(i[0] >= 0 && [1] >= 0){
                    grassArr.pop(k)
                    matrix[i[0]][i[1]] = 0
                }
            }
        }
        for(k in grazerArr){

            let grazer = grazerArr[k]
            if(grazer.x == i[0] && grazer.y == i[1]){
                if(i[0] >= 0 && [1] >= 0){
                    grazerArr.pop(k)

                    matrix[i[0]][i[1]] = 0
                }
            }
        }
        for(k in hyänenArr){

            let hyäne = hyänenArr[k]
            if(hyäne.x == i[0] && hyäne.y == i[1]){
                if(i[0] >= 0 && [1] >= 0){
                    hyänenArr.pop(k)

                    matrix[i[0]][i[1]] = 0
                }
            }
        }
        for(k in humanarr){

            let human = humanarr[k]
            if(human.x == i[0] && human.y == i[1]){
                if(i[0] >= 0 && [1] >= 0){
                    humanarr.pop(k)
  
                    matrix[i[0]][i[1]] = 0
                }
            }
        }
        for(k in mamutArr){

            let mamut = mamutArr[k]
            if(mamut.x == i[0] && mamut.y == i[1]){
                if(i[0] >= 0 && [1] >= 0){
                    mamutArr.pop(k)

                    matrix[i[0]][i[1]] = 0
                }
            }
        }
        for(k in pilarray){

            let pilz = pilarray[k]
            if(pilz.x == i[0] && pilz.y == i[1]){
                if(i[0] >= 0 && [1] >= 0){
                    pilarray.pop(k)

                    matrix[i[0]][i[1]] = 0
                }
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
    },
    meteor_crash: (msg) => {
        return meteor_crash(msg)
    }
}