const Animal = require("./Animal")

class Grazer extends Animal {
    constructor(x, y) {
        super(x, y)
        this.x = x
        this.y = y
        this.type = "grazer"
        this.energy = 8
        this.eaten = 0
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]

    }

    multi() {

        if (this.eaten >= 5 && this.SameGenderInArea().length !== 0) {
            console.log("GENDER:",this.SameGenderInArea())

            let cells = this.chooseCell(0)
            if (cells.length > 0) {
                let choosen = this.random(cells)
                this.newx = choosen[0]
                this.newy = choosen[1]
                let grazerObj = new Grazer(this.newx, this.newy)
                grazerObj.gender = this.randomGender()
                // grassOb in Liste speichern
                grazerArr.push(grazerObj)
                matrix[this.newy][this.newx] = 2
                this.eaten = 0
            }
        }
    }
    eat() {
        this.updateVision()
        let cells = this.chooseCell(1)
        if (cells.length > 0) {
            let choosen = this.random(cells)
            this.newx = choosen[0]
            this.newy = choosen[1]
            matrix[this.newy][this.newx] = 2
            matrix[this.y][this.x] = 0
            this.x = this.newx
            this.y = this.newy
            this.energy = 5
            this.eaten++
            this.multi()
            for (i in grassArr) {
                if (this.x == grassArr[i].x && this.y == grassArr[i].y) {
                    grassArr.splice(i, 1)
                    break
                }
            }

        }
        else {
            this.move()
        }
    }

    move() {

        this.newlist = this.chooseCell(0)

        if (this.newlist.length > 0) {
            this.chosen = this.random(this.newlist)
            this.newx = this.chosen[0]
            this.newy = this.chosen[1]
            matrix[this.newy][this.newx] = 2
            matrix[this.y][this.x] = 0
            this.x = this.newx
            this.y = this.newy
            this.energy -= energy_loss
        }
        if (this.energy <= 0) {
            this.die()
        }

    }
    die() {
        matrix[this.y][this.x] = 0
        for (i in grazerArr) {
            if (this.x == grazerArr[i].x && this.y == grazerArr[i].y) {

                grazerArr.splice(i, 1)
                break
            }
        }
    }

}

module.exports = Grazer