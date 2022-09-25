const Animal = require("./Animal")

class Mamut extends Animal {
    constructor(x, y) {
        super(x, y)
        this.type = "mamut"
        this.energy = 15
        this.eaten = 0
    }
    eat() {
        this.energy -= energy_loss + 1
        this.updateVision()
        let cells = this.chooseCell(5)
        if (cells.length > 0) {
            let choosen = this.random(cells)
            this.newx = choosen[0]
            this.newy = choosen[1]
            matrix[this.newy][this.newx] = 6
            matrix[this.y][this.x] = 0
            this.x = this.newx
            this.y = this.newy
            this.energy += 8
            this.eaten++
            this.multi()
            for (i in humanarr) {
                if (this.x == humanarr[i].x && this.y == humanarr[i].y) {
                    humanarr.splice(i, 1)
                    break
                }
            }

        }
        else {
            this.move()
        }
    }

    multi() {

        if (this.eaten >= 5  && this.SameGenderInArea !== []) {
            let cells = this.chooseCell(0)
            if (cells.length > 0) {
                let choosen = this.random(cells)
                this.newx = choosen[0]
                this.newy = choosen[1]
                let mamutObj = new Mamut(this.newx, this.newy)
                // Define Gender
                mamutObj.gender = this.randomGender()

                mamutArr.push(mamutObj)
                matrix[this.newy][this.newx] = 6
            }
        }
    }

    move() {

        this.newlist = this.chooseCell(0)

        if (this.newlist.length > 0) {
            this.chosen = this.random(this.newlist)
            this.newx = this.chosen[0]
            this.newy = this.chosen[1]
            matrix[this.newy][this.newx] = 6
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
        for (i in mamutArr) {
            if (this.x == mamutArr[i].x && this.y == mamutArr[i].y) {

                mamutArr.splice(i, 1)
                break
            }
        }
    }

}
module.exports = Mamut