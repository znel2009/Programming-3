// const Square = require("./module")
// let mySquareObject = new Square(5)

// console.log(mySquareObject.getArea())

const fs = require("fs")

function main() {
    let file = "test.txt"
    fs.appendFileSync(file, "Test \n")
}
main()