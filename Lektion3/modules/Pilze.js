const LivingCreature = require("./LivingCreature")

class Pilz extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.x = x
        this.y = y
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
        this.energy = 9

    }
    checkforanimal() {
        if (this.energy <= 0) {
            this.die()
        }
        else {
            this.updateVision()
            let fresser = this.chooseCell(2)
            let allanimals = []
            if (fresser.length > 0) {
                for (i in fresser) {
                    allanimals.push(fresser[i])
                }
            }
            if (allanimals.length > 0) {
                let chosen = random(allanimals)
                this.newx = chosen[0]
                this.newy = chosen[1]
                if (matrix[this.newy][this.newx] == 2) {
                    for (i in grazerArr) {
                        if (this.newx == grazerArr[i].x && this.newy == grazerArr[i].y) {
                            grazerArr.splice(i, 1)
                            break
                        }
                    }
                    matrix[this.newy][this.newx] = 0
                }
                if (matrix[this.newy][this.newx] == 3) {
                    for (i in hyänenArr) {
                        if (this.newx == hyänenArr[i].x && this.newy == hyänenArr[i].y) {
                            hyänenArr.splice(i, 1)
                            break
                        }
                    }
                    matrix[this.newy][this.newx] = 0
                }
                this.energy = 9
            }
            else {
                this.energy--
            }
        }


    }


    die() {
        matrix[this.y][this.x] = 0
        for (i in pilarray) {
            if (this.x == pilarray[i].x && this.y == pilarray[i].y) {

                pilarray.splice(i, 1)
                break
            }
        }
    }
}
module.exports = Pilz