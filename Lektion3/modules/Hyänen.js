const LivingCreature = require("./LivingCreature")

class Hyänen extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.x = x
        this.y = y
        this.energy = 10
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
    eat() {
        this.energy--
        this.updateVision()
        let cells = this.chooseCell(2)
        if (cells.length > 0) {
            let choosen = random(cells)
            this.newx = choosen[0]
            this.newy = choosen[1]
            matrix[this.newy][this.newx] = 3
            matrix[this.y][this.x] = 0
            this.x = this.newx
            this.y = this.newy
            this.energy = 10
            this.eaten++
            this.multi()
            for (i in grazerArr) {
                if (this.x == grazerArr[i].x && this.y == grazerArr[i].y) {
                    grazerArr.splice(i, 1)
                    break
                }
            }

        }
        else {
            this.move()
        }
    }

    multi() {
        if (this.eaten == 4) {
            let cells = this.chooseCell(0)
            if (cells.length > 0) {
                let choosen = random(cells)
                this.newx = choosen[0]
                this.newy = choosen[1]
                let hyObj = new Hyänen(this.newx, this.newy)
                // grassOb in Liste speichern
                hyänenArr.push(hyObj)
                matrix[this.newy][this.newx] = 3
            }
        }
    }

    move() {

        this.newlist = this.chooseCell(0)

        if (this.newlist.length > 0) {
            this.chosen = random(this.newlist)
            this.newx = this.chosen[0]
            this.newy = this.chosen[1]
            matrix[this.newy][this.newx] = 3
            matrix[this.y][this.x] = 0
            this.x = this.newx
            this.y = this.newy
        }
        if (this.energy <= 0) {
            this.die()
        }

    }



    die() {
        matrix[this.y][this.x] = 0
        for (i in hyänenArr) {
            if (this.x == hyänenArr[i].x && this.y == hyänenArr[i].y) {

                hyänenArr.splice(i, 1)
                break
            }
        }
    }


}
module.exports = Hyänen