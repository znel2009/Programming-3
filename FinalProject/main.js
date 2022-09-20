const http = require('http')
const express = require('express');
const app = express()
const server = http.createServer(app);
const io = require('socket.io')(server);
// matrix = [
//     [1, 1, 0, 1, 1, 0, 0, 1],
//     [0, 1, 0, 1, 1, 0, 1, 0],
//     [0, 1, 0, 3, 2, 0, 1, 1],
//     [0, 0, 1, 0, 1, 0, 1, 1],
//     [0, 0, 1, 5, 0, 0, 1, 0],
//     [1, 0, 1, 0, 2, 1, 0, 4]
// ]
matrix = [
    [2, 1, 1, 1, 1, 1, 2],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1],
]
// Require all modules 
const LivingCreature = require("./modules/LivingCreature")
const Grass = require("./modules/Grass")
const Grazer = require("./modules/Grazer")
const Hyänen = require("./modules/Hyänen")
const Mensch = require("./modules/Mensch")
const Pilz = require("./modules/Pilze")
const Mamut = require("./modules/Mamut")
const { clearMatrix, createRandomMatrix } = require("./modules/matrix_functions")

// Server variables
const PORT = 3000
app.use(express.static('./public'))

app.get("/", (req, res) => {
    res.sendFile("index.html")
})

app.get("/name/:name", (req, res) => {
    let name = req.params.name
    res.send(name)
})

app.get("/google/:search", (req, res) => {
    let search = req.params.search
    res.status(200).redirect(`http://google.com/search?q=${search}`)

})

app.get("/*", (req, res) => {
    res.status(404).send("ERROR 404")
})

server.listen(PORT, () => {
    console.log("LISTENING")
})

// Game logic part

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
matrix = getRandomMatrix(20, 20)




grassArr = []
grazerArr = []
hyänenArr = []
pilarray = []
humanarr = []
mamutArr = []

// Setup

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
function updateCreatures() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {


            }
            else if (matrix[y][x] == 0) {

            }
            else if (matrix[y][x] == 2) {

            }
            else if (matrix[y][x] == 3) {

            }
            else if (matrix[y][x] == 4) {

            }
            else if (matrix[y][x] == 5) {

            }
        }
    }
    for (i in grassArr) {
        let gras = grassArr[i]
        gras.multi()
    }
    for (i in grazerArr) {
        let grazer = grazerArr[i]
        grazer.eat()
    }
    for (i in hyänenArr) {
        let hyäne = hyänenArr[i]
        hyäne.eat()
    }
    for (i in pilarray) {
        let pilz = pilarray[i]
        pilz.checkforanimal()
    }
    for (i in humanarr) {
        let human = humanarr[i]
        human.eat()
    }
    for (i in mamutArr) {
        let mamut = mamutArr[i]
        mamut.eat()
    }

}

setInterval(() => {
    updateCreatures()
    console.log("send")
    io.sockets.emit("matrix", matrix)
}, 1000)

io.on('connection', function (socket) {
    console.log("Client connected")
    socket.on("clear_matrix", function (socket) {

        clearMatrix()
        console.log("cleared")
    })
    socket.on("create_random_matrix", function (socket) {

        createRandomMatrix()
        console.log("new Matrix")
    })
});
