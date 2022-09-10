// const square = require("./module")
// let mySquareObject = new square.Square(5)

// console.log(mySquareObject.getArea())

const fs = require("fs")

function main() {
    let file = "test.txt"

    fs.writeFileSync(file,fs.readFileSync(file)+"HELLO WORLD\n")
}
main()