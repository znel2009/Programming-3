const LivingCreature = require("./LivingCreature")

class Grass extends LivingCreature {

    //Verhalten

    //Methode fürs Vermehren
    multi() {
        this.multiply++
        if (this.multiply >= 6) {
            // Auswahl eines Felds
            let fields = this.chooseCell(0)
            if (fields.length > 0) {
                let powNewGrassObj = random(fields)
                let newx = powNewGrassObj[0]
                let newy = powNewGrassObj[1]
                let grassObj = new Grass(newx, newy)
                // grassOb in Liste speichern
                grassArr.push(grassObj)
                matrix[newy][newx] = 1

            }
            this.multiply = 0
        }

    }
}

module.exports = Grass