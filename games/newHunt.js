import { getNumbers, getRandom, arrayRemoveNum }  from "./helpers";

const foundTreasureMsg = "aarre";
const foundBombMsg = "poks";
const foundEmptyMsg = "tyhjä";




export default class Game{
    // input (int, str, int)
    constructor(tileAmount, idBody, difficulty = 3){
        let numbers = getNumbers(getRandom(8), difficulty + 1, tileAmount)  // get 1 more for treasure
        this.tiles = tileAmount;
        this.treasure = numbers[0];
        this.bomb = numbers.slice(1);
        this.tileIdBody = idBody;   // body of element id, for example "treasurePanel"
        this.notCheked = Array.from(Array(tileAmount + 1).keys());
        this.started = false;
    }



    /// public methods
    
    start(){
        // start created game
        this.started = true;
        this.resetTiles(this.tiles, "Ruutu ");
    }
    
    // input (int)
    checkTile(tileIndex){
        // call this, when button pressed to check tile 
        if (this.notCheked.includes(tileIndex) === false){
            // tile is already checked
            return;
        }

        this.notCheked = arrayRemoveNum(tileIndex, this.notCheked);
        if(this.#checkNumber(tileIndex) === true){
            // treasure
            this.#tileStateTreasure(tileIndex);
            return;
        }
        
        if(this.#checkNumber(tileIndex) === false){
            // bomb
            this.#tileStateBoom(tileIndex);
            return;
        }
        //empty
        this.#tileStateEmpty(tileIndex, "tyhjä")
    }
    
    // input (int, str)
    resetTiles(tileAmount, tileDisplayName){
        // put tiles to "new game" state
        for(let i = 0; i <= tileAmount; i++){
            document.getElementById(this.tileIdBody + i).innerText = tileDisplayName + (i + 1);   // shift name by 1
        }
    }

    
    
    
    
    /// private methods 

    // input (int)
    #tileStateTreasure(tileIndex){
        document.getElementById(this.tileIdBody + tileIndex).innerHTML = foundTreasureMsg;
    }

    // input (int)
    #tileStateBoom(tileIndex){
        document.getElementById(this.tileIdBody + tileIndex).innerHTML = foundBombMsg;
    }
    // input (int)
    #tileStateEmpty(tileIndex){
        document.getElementById(this.tileIdBody + tileIndex).innerHTML = foundEmptyMsg;
    }

    // input (int)
    #checkNumber(tileIndex){
        // return true if treasure, false if boom and null if empty
        if (tileIndex == this.treasure){
            return true;
        } 
        else if (this.bomb.includes(tileIndex)){
            return false;
        }
        else{
            return null;
        }
    }

    // input (int)
    #hideTileText(tileIndex){
        (document.getElementById(this.tileIdBody + tileIndex)).style.display = "none";
    }

    // input (int)
    #showTileText(tileIndex){
        (document.getElementById(this.tileIdBody + tileIndex)).style.display = "block";
    }
}

