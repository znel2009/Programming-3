const fs = require("fs")

const obj = {
    name: "Cl",
    vorname: "SAbine",
    age: 120,
    tumo_student: false
    }

function main(){
    // const json_text = JSON.stringify(obj)
    // fs.appendFileSync("obj.json", json_text)

    let text = fs.readFileSync("obj.json").toString()
    console.log(JSON.parse(text))
}
main()