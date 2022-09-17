// Superclass of all animals and grass
class Animal {
    constructor(x, y) {
        //Pos
        this.x = x
        this.y = y
        this.gender = this.randomGender()
        this.multiply = 0
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
    chooseCell(character) {
        let found = []
        for (let i in this.directions) {
            let x = this.directions[i][0]
            let y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }
        }
        return found
    }
    updateVision() {
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
    random(list){
        return list[Math.floor(Math.random() * list.length)]
    }
    randomGender(){
        if ( Math.round(Math.random(0,1)) == 1) {
            return "man"
        }
        else{
            return "woman"
        }
    }
    SameGenderInArea(){
        let return_list = []
        let gender = this.gender
        let type = this.type 
        let type_array
        if(type == "hyäne"){
            type_array = hyänenArr
        }
        else if (type == "mensch"){
            type_array = humanArr
        }
        else if (type == "grazer"){
            type_array = grazerArr
        }

        for( i in type_array){
            var obj = type_array[i]
            console.log(obj)
            if(this.directions.includes([obj.x,obj.y] && this.gender != obj.gender)){
                return_list.append(obj)
                console.log("APPEND")
            }
                
        }
        console.log(gender)
        return return_list
    }
}
module.exports = Animal