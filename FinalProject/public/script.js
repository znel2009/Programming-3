// let matrix = [
//     [1, 1, 0, 1, 1, 0, 0, 1],
//     [0, 1, 0, 1, 1, 0, 1, 0],
//     [0, 1, 0, 3, 2, 0, 1, 1],
//     [0, 0, 1, 0, 1, 0, 1, 1],
//     [0, 0, 1, 5, 0, 0, 1, 0],
//     [1, 0, 1, 0, 2, 1, 0, 4]
// ]
matrix = []
function getRandomMatrix(h, w) {
    matrix = []
    for (let index = 0; index < h; index++) {
        mati = []
        for (let index = 0; index < w; index++) {
            mati.push(Math.round(random(0, 2)))

        }

        matrix.push(mati)


    }
    console.log(matrix)
    return matrix
}
let side = 10

//Lebewesen

function setup() {
    // matrix = getRandomMatrix(5, 5)
    createCanvas(200,200)
    background("#acacac")
    frameRate(1)

    // let grassObj = new Grass(1,0);
    // let emptyFields = grassObj.chooseCell(0);
    // console.log(emptyFields);

    // grassObj.multi();
    // Lebewesen 
    // for (let y = 0; y < matrix.length; y++) {
    //     for (let x = 0; x < matrix[y].length; x++) {
    //         if (matrix[y][x] == 1) {
    //             let grassObj = new Grass(x, y)

    //             //füge das Gras Object dem grass-Array
    //             grassArr.push(grassObj)

    //         }
    //         else if (matrix[y][x] == 2) {
    //             let grazerObj = new Grazer(x, y)

    //             //füge das Gras Object dem grass-Array
    //             grazerArr.push(grazerObj)

    //         }
    //         else if (matrix[y][x] == 3) {
    //             let hyänenobj = new Hyänen(x, y)

    //             //füge das Gras Object dem grass-Array
    //             hyänenArr.push(hyänenobj)

    //         }
    //         else if (matrix[y][x] == 4) {
    //             let pil = new Pilz(x, y)

    //             //füge das Gras Object dem grass-Array
    //             pilarray.push(pil)

    //         }
    //         else if (matrix[y][x] == 5) {
    //             let human = new Mensch(x, y)

    //             //füge das Gras Object dem grass-Array
    //             humanarr.push(human)

    //         }
    //     }
    // }
}



function draw() {
    if (matrix.length == 0){
        return
    }
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                if(weather_status.textContent == "Winter"){
                    fill("white")
                }
                else{
                    fill("green")
                }
                rect(x * side, y * side, side, side)

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 2) {
                fill("yellow")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 3) {
                fill("red")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 4) {
                fill("black")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 5) {
                fill("#ff8661")
                rect(x * side, y * side, side, side)
            }
            else if (matrix[y][x] == 6) {
                fill("#a52a2a")
                rect(x * side, y * side, side, side)
            }
        }
    }

}
const weather_status = document.getElementById("weather_status")

function main() {
    socket = io();

    function handleMessage(msg) {
        matrix = msg.matrix
        weather_status.textContent = msg.weather
    }


    socket.on('matrix', handleMessage);
} // main closing bracket
window.onload = main;

const clear_button = document.getElementById("btn_clear")

clear_button.onclick = function() {
    socket.emit("clear_matrix")
}

const btn_random_matrix = document.getElementById("btn_random_matrix")

btn_random_matrix.onclick = function() {
    socket.emit("create_random_matrix")
}

const btn_meteor_crash = document.getElementById("btn_meteor_crash")

btn_meteor_crash.onclick = function() {
    let x = parseInt(prompt("x"))
    let y = parseInt(prompt("y"))

    socket.emit("meteor_crash", {x: x, y: y})
}