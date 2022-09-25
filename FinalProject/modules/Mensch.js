const Animal = require("./Animal")

class Mensch extends Animal {
    constructor(x, y) {
        super(x, y)
        this.x = x
        this.y = y
        this.type = "mensch"
        this.energy = 12
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

    die() {
        matrix[this.y][this.x] = 0
        for (i in humanarr) {
            if (this.x == humanarr[i].x && this.y == humanarr[i].y) {

                humanarr.splice(i, 1)
                break
            }
        }
    }
    move() {

        this.newlist = this.chooseCell(0)

        if (this.newlist.length > 0) {
            this.chosen = this.random(this.newlist)
            this.newx = this.chosen[0]
            this.newy = this.chosen[1]
            matrix[this.newy][this.newx] = 5
            matrix[this.y][this.x] = 0
            this.x = this.newx
            this.y = this.newy
        }
        if (this.energy <= 0) {
            this.die()
        }

    }
    eat() {
        this.energy -= energy_loss
        this.updateVision()
        let cells = this.chooseCell(3)
        if (cells.length > 0) {
            let choosen = this.random(cells)
            this.newx = choosen[0]
            this.newy = choosen[1]
            matrix[this.newy][this.newx] = 5
            matrix[this.y][this.x] = 0
            this.x = this.newx
            this.y = this.newy
            this.energy = 12
            this.eaten++
            this.multi()
            for (i in hyänenArr) {
                if (this.x == hyänenArr[i].x && this.y == hyänenArr[i].y) {
                    hyänenArr.splice(i, 1)
                    break
                }
            }

        }
        else {
            this.move()
        }
    }
    multi() {
        if (this.eaten >= 8 && this.SameGenderInArea != []) {
            let cells = this.chooseCell(0)
            if (cells.length > 0) {
                let choosen = this.random(cells)
                this.newx = choosen[0]
                this.newy = choosen[1]
                let hyObj = new Mensch(this.newx, this.newy)
                hyObj.gender = this.randomGender()
                // grassOb in Liste speichern
                humanarr.push(hyObj)
                matrix[this.newy][this.newx] = 5
            }
        }
    }
}
module.exports = Mensch