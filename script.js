let matrix = [
    [1,1,0,1,1,0,0,1],
    [0,1,0,1,1,0,1,0],
    [0,1,0,3,2,0,1,1],
    [0,0,1,0,1,0,1,1],
    [0,0,1,5,0,0,1,0],
    [1,0,1,0,2,1,0,4]
    ];
function getRandomMatrix(h,w){
    matrix = []
    for (let index = 0; index < h; index++) {
        mati = []
        for (let index = 0; index < w; index++) {
            mati.push(Math.round(random(0,5)));
            
        }





        matrix.push(mati);

        
    }
    console.log(matrix)
    return matrix
}
let side = 100;

//Lebewesen

let grassArr = [];
let grazerArr = []
let hyänenArr = [];
let pilarray = [];
let humanarr = [];
function setup(){
    // matrix = getRandomMatrix(20,20)
    createCanvas((matrix[0].length)*side+1, (matrix.length)*side+1);
    background("#acacac")
    frameRate(1);

    // let grassObj = new Grass(1,0);
    // let emptyFields = grassObj.chooseCell(0);
    // console.log(emptyFields);

    // grassObj.multi();
    // Lebewesen 
    for(let y = 0; y < matrix.length; y++){
        for(let x = 0; x < matrix[y].length; x++){
            if(matrix[y][x] == 1){
                let grassObj = new Grass(x,y)

                //füge das Gras Object dem grass-Array
                grassArr.push(grassObj)

            }
            else if(matrix[y][x] == 2){
                let grazerObj = new Grazer(x,y)

                //füge das Gras Object dem grass-Array
                grazerArr.push(grazerObj)

            }
            else if(matrix[y][x] == 3){
                let hyänenobj = new Hyänen(x,y)

                //füge das Gras Object dem grass-Array
                hyänenArr.push(hyänenobj)

            }
            else if(matrix[y][x] == 4){
                let pil = new Pilz(x,y)

                //füge das Gras Object dem grass-Array
                pilarray.push(pil)

            }
            else if(matrix[y][x] == 5){
                let human = new Mensch(x,y)

                //füge das Gras Object dem grass-Array
                humanarr.push(human)

            }
        }
    }
}


function draw(){
    for(let y = 0; y < matrix.length; y++){
        for(let x = 0; x < matrix[y].length; x++){
            if(matrix[y][x] == 1){
                fill("green")
                rect(x*side, y*side,side,side)

            }
            else if (matrix[y][x] == 0){
                fill("#acacac")
                rect(x*side, y*side,side,side)
            }
            else if (matrix[y][x] == 2){
                fill("yellow")
                rect(x*side, y*side,side,side)
            }
            else if (matrix[y][x] == 3){
                fill("red")
                rect(x*side, y*side,side,side)
            }
            else if (matrix[y][x] == 4){
                fill("black")
                rect(x*side, y*side,side,side)
            }
            else if (matrix[y][x] == 5){
                fill("#ff8661")
                rect(x*side, y*side,side,side)
            }
        }
    }
    for(i in grassArr){
        let Ob = grassArr[i];
        Ob.multi();
    }
    for(i in grazerArr){
        ga = grazerArr[i];
        ga.eat();
    }
    for(i in hyänenArr){
        ga = hyänenArr[i];
        ga.eat();
    }
    for(i in pilarray){
        p = pilarray[i];
        p.checkforanimal()
    }
    for(i in humanarr){
        h = humanarr[i];
        h.eat()
    }
}
