// Superclass 
class LivingCreature{
    constructor(x,y){
        //Pos
        this.x = x;
        this.y = y;
        //Age
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y -1],
            [this.x    , this.y -1],
            [this.x + 1, this.y -1],
            [this.x - 1, this.y   ],
            [this.x + 1, this.y   ],
            [this.x - 1, this.y +1],
            [this.x    , this.y +1],
            [this.x + 1, this.y +1]
        ];
    }
    chooseCell(character){
        let found = [];
        for(let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if(x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if(matrix[y][x] == character){
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
}

class Grass extends LivingCreature{

    //Verhalten

    //Methode fürs Vermehren
    multi(){
        this.multiply++;
        if(this.multiply >= 6){
            // Auswahl eines Felds
            let fields = this.chooseCell(0);
            if(fields.length > 0){
                let powNewGrassObj = random(fields);
                let newx = powNewGrassObj[0];
                let newy = powNewGrassObj[1];
                let grassObj = new Grass(newx, newy);
                // grassOb in Liste speichern
                grassArr.push(grassObj)
                matrix[newy][newx]= 1;

            }
            this.multiply = 0;
        }

    }
}
class Grazer extends LivingCreature{
    constructor(x,y){
        super(x,y)    
        this.x = x
        this.y = y
        this.energy = 8;
        this.eaten = 0;
        this.directions = [
            [this.x - 1, this.y -1],
            [this.x    , this.y -1],
            [this.x + 1, this.y -1],
            [this.x - 1, this.y   ],
            [this.x + 1, this.y   ],
            [this.x - 1, this.y +1],
            [this.x    , this.y +1],
            [this.x + 1, this.y +1]
        ];
        
    }
    
    multi(){
        if (this.eaten >= 5){
        let cells = this.chooseCell(0);
        if(cells.length > 0){
            let choosen = random(cells)
            this.newx = choosen[0]
            this.newy = choosen[1]
            let grazerObj = new Grazer(this.newx, this.newy);
                // grassOb in Liste speichern
                grazerArr.push(grazerObj)
            matrix[this.newy ][this.newx ] = 2
            this.eaten = 0
        }
    }
    }
    eat(){
        this.updateVision()
        let cells = this.chooseCell(1);
        if(cells.length > 0){
            let choosen = random(cells)
            this.newx = choosen[0]
            this.newy = choosen[1]
            matrix[this.newy ][this.newx ] = 2
            matrix[this.y][this.x] = 0
            this.x = this.newx
            this.y = this.newy
            this.energy = 5;
            this.eaten++
            this.multi()
            for(i in grassArr){
                if(this.x == grassArr[i].x && this.y == grassArr[i].y){
                    grassArr.splice(i,1)
                    break
                }
            }
        
        }
        else{
            this.move()
        }
    }
        
    move(){

        this.newlist = this.chooseCell(0);

        if(this.newlist.length > 0){
            this.chosen = random(this.newlist);
            this.newx = this.chosen[0]
            this.newy = this.chosen[1]
            matrix[this.newy ][this.newx ] = 2
            matrix[this.y][this.x] = 0
            this.x = this.newx
            this.y = this.newy
            this.energy--
        }
        if (this.energy <= 0){
            this.die()
        }
    
    }
    die(){
        matrix[this.y][this.x] = 0;
        for(i in grazerArr){
            if(this.x == grazerArr[i].x && this.y == grazerArr[i].y){

                grazerArr.splice(i,1)
                break
            }
        }
    }
    updateVision(){
        this.directions = [
            [this.x - 1, this.y -1],
            [this.x    , this.y -1],
            [this.x + 1, this.y -1],
            [this.x - 1, this.y   ],
            [this.x + 1, this.y   ],
            [this.x - 1, this.y +1],
            [this.x    , this.y +1],
            [this.x + 1, this.y +1]
        ];
    }
}
class Hyänen extends LivingCreature{
    constructor(x,y){
        super(x,y)    
        this.x = x
        this.y = y
        this.energy = 10;
        this.eaten = 0;
        this.directions = [
            [this.x - 1, this.y -1],
            [this.x    , this.y -1],
            [this.x + 1, this.y -1],
            [this.x - 1, this.y   ],
            [this.x + 1, this.y   ],
            [this.x - 1, this.y +1],
            [this.x    , this.y +1],
            [this.x + 1, this.y +1]
        ];
    }
    eat(){
        this.energy--
        this.updateVision()
        let cells = this.chooseCell(2);
        if(cells.length > 0){
            let choosen = random(cells)
            this.newx = choosen[0]
            this.newy = choosen[1]
            matrix[this.newy ][this.newx ] = 3
            matrix[this.y][this.x] = 0
            this.x = this.newx
            this.y = this.newy
            this.energy = 10;
            this.eaten++
            this.multi()
            for(i in grazerArr){
                if(this.x == grazerArr[i].x && this.y == grazerArr[i].y){
                    grazerArr.splice(i,1)
                    break
                }
            }
        
        }
        else{
            this.move()
        }
    }
    
    multi(){
        if (this.eaten == 4){
        let cells = this.chooseCell(0);
        if(cells.length > 0){
            let choosen = random(cells)
            this.newx = choosen[0]
            this.newy = choosen[1]
            let hyObj = new Hyänen(this.newx, this.newy);
                // grassOb in Liste speichern
                hyänenArr.push(hyObj)
            matrix[this.newy ][this.newx ] = 3
        }
    }
    }

    move(){

        this.newlist = this.chooseCell(0);

        if(this.newlist.length > 0){
            this.chosen = random(this.newlist);
            this.newx = this.chosen[0]
            this.newy = this.chosen[1]
            matrix[this.newy ][this.newx ] = 3
            matrix[this.y][this.x] = 0
            this.x = this.newx
            this.y = this.newy
        }
        if (this.energy <= 0){
            this.die()
        }
    
    }



    die(){
        matrix[this.y][this.x] = 0;
        for(i in hyänenArr){
            if(this.x == hyänenArr[i].x && this.y == hyänenArr[i].y){

                hyänenArr.splice(i,1)
                break
            }
        }
    }

    updateVision(){
        this.directions = [
            [this.x - 1, this.y -1],
            [this.x    , this.y -1],
            [this.x + 1, this.y -1],
            [this.x - 1, this.y   ],
            [this.x + 1, this.y   ],
            [this.x - 1, this.y +1],
            [this.x    , this.y +1],
            [this.x + 1, this.y +1]
        ];
    }
}
class Pilz extends LivingCreature{
    constructor(x,y){
        super(x,y)    
        this.x = x;
        this.y = y;
        this.directions = [
            [this.x - 1, this.y -1],
            [this.x    , this.y -1],
            [this.x + 1, this.y -1],
            [this.x - 1, this.y   ],
            [this.x + 1, this.y   ],
            [this.x - 1, this.y +1],
            [this.x    , this.y +1],
            [this.x + 1, this.y +1]
        ];
        this.energy = 9;
        
    }
    checkforanimal(){
        if(this.energy <= 0){
            this.die()
        }
        else{
        this.updateVision()
        let fresser = this.chooseCell(2)
        let allanimals = []
        if(fresser.length > 0){
        for(i in fresser){
            allanimals.push(fresser[i])
        }
    }
        if(allanimals.length > 0){
        let chosen = random(allanimals)
        this.newx = chosen[0]
        this.newy = chosen[1]
        if(matrix[this.newy][this.newx] == 2){
            for(i in grazerArr){
                if(this.newx == grazerArr[i].x && this.newy == grazerArr[i].y){
                    grazerArr.splice(i,1)
                    break
                }
            }
            matrix[this.newy][this.newx] = 0
        }
        if(matrix[this.newy][this.newx] == 3){
            for(i in hyänenArr){
                if(this.newx == hyänenArr[i].x && this.newy == hyänenArr[i].y){
                    hyänenArr.splice(i,1)
                    break
                }
            }
            matrix[this.newy][this.newx] = 0
        }
        this.energy = 9;
    }
    else{
        this.energy--
    }
    }
    

    }


    die(){
        matrix[this.y][this.x] = 0;
        for(i in pilarray){
            if(this.x == pilarray[i].x && this.y == pilarray[i].y){

                pilarray.splice(i,1)
                break
            }
        }
    }







    updateVision(){
        this.directions = [
            [this.x - 1, this.y -1],
            [this.x    , this.y -1],
            [this.x + 1, this.y -1],
            [this.x - 1, this.y   ],
            [this.x + 1, this.y   ],
            [this.x - 1, this.y +1],
            [this.x    , this.y +1],
            [this.x + 1, this.y +1]
        ];
    }
}
class Mensch extends LivingCreature{
    constructor(x,y){
        super(x,y)    
        this.x = x
        this.y = y
        this.energy = 12;
        this.eaten = 0;
        this.directions = [
            [this.x - 1, this.y -1],
            [this.x    , this.y -1],
            [this.x + 1, this.y -1],
            [this.x - 1, this.y   ],
            [this.x + 1, this.y   ],
            [this.x - 1, this.y +1],
            [this.x    , this.y +1],
            [this.x + 1, this.y +1]
        ];
    }
    updateVision(){
        this.directions = [
            [this.x - 1, this.y -1],
            [this.x    , this.y -1],
            [this.x + 1, this.y -1],
            [this.x - 1, this.y   ],
            [this.x + 1, this.y   ],
            [this.x - 1, this.y +1],
            [this.x    , this.y +1],
            [this.x + 1, this.y +1]
        ];
    }
    die(){
        matrix[this.y][this.x] = 0;
        for(i in humanarr){
            if(this.x == humanarr[i].x && this.y == humanarr[i].y){

                humanarr.splice(i,1)
                break
            }
        }
    }
    move(){

        this.newlist = this.chooseCell(0);

        if(this.newlist.length > 0){
            this.chosen = random(this.newlist);
            this.newx = this.chosen[0]
            this.newy = this.chosen[1]
            matrix[this.newy ][this.newx ] = 5
            matrix[this.y][this.x] = 0
            this.x = this.newx
            this.y = this.newy
        }
        if (this.energy <= 0){
            this.die()
        }
    
    }
    eat(){
        this.energy--
        this.updateVision()
        let cells = this.chooseCell(3);
        if(cells.length > 0){
            let choosen = random(cells)
            this.newx = choosen[0]
            this.newy = choosen[1]
            matrix[this.newy ][this.newx ] = 5
            matrix[this.y][this.x] = 0
            this.x = this.newx
            this.y = this.newy
            this.energy = 12;
            this.eaten++
            this.multi()
            for(i in hyänenArr){
                if(this.x == hyänenArr[i].x && this.y == hyänenArr[i].y){
                    hyänenArr.splice(i,1)
                    break
                }
            }
        
        }
        else{
            this.move()
        }
    }
    multi(){
        if (this.eaten == 8){
        let cells = this.chooseCell(0);
        if(cells.length > 0){
            let choosen = random(cells)
            this.newx = choosen[0]
            this.newy = choosen[1]
            let hyObj = new Mensch(this.newx, this.newy);
                // grassOb in Liste speichern
                humanarr.push(hyObj)
            matrix[this.newy ][this.newx ] = 5
        }
    }
    }
}