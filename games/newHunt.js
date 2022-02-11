import { GetNumbers, GetRandom }  from "./helpers";


export default function NewTreasureHunt(tileAmount, tileIdBody, newgame){
    if (newgame === undefined){
        //console.log("it's undefined")
        //console.log("Uusi peli alkaa...");
        
        //console.log(newgame);
    }
    newgame = new Game(tileAmount, tileIdBody);
    return newgame;
}




// game object
class Game{
    constructor(tileAmount, idBody){
        // define lose and win squares by random numbers
        let numbers = GetNumbers(GetRandom(8), 4, tileAmount)
        this.tiles = tileAmount;
        this.treasure = numbers[0];
        numbers = numbers.slice(1);
        this.lose = numbers;
        this.tileIdBody = idBody;   // body of element id, for example "treasurePanel"
        this.zeroTiles(tileAmount, "Ruutu ");
    }

    checkTile(tileIndex){
        if(this.#checkNumber(tileIndex)){
            this.gameWon(tileIndex);
            return;
        }
        
        if(this.#checkNumber(tileIndex) === false){
            console.log("lose");
            this.gameLost();
            return;
        }
        this.#tileStateEmpty(tileIndex, "tyhjä")
    }
    
    // put tiles to new game state
    zeroTiles(tileAmount, tileDisplayName){
        for(let i = 0; i <= tileAmount; i++){
            document.getElementById(this.tileIdBody + i).innerText = tileDisplayName + (i + 1);   // shift name by 1
        }
    }

    #tileStateTreasure(){
        console.log("win");
        document.getElementById(this.tileIdBody + tileIndex).innerHTML = "aarre";
    }

    #tileStateEmpty(){
        document.getElementById(this.tileIdBody + tileIndex).innerHTML = "tyhjä";
    }

    #tileStateBoom(){
        console.log("boom");
        document.getElementById(this.tileIdBody + tileIndex).innerHTML = "poks";
    }

    #hideTileText(tileIndex){
        (document.getElementById(this.tileIdBody + tileIndex)).style.display = "none";
    }

    #showTileText(tileIndex){
        (document.getElementById(this.tileIdBody + tileIndex)).style.display = "block";
    }


    // return true if treasure, false if boom and null if empty
    #checkNumber(tileIndex){
        if (tileIndex == this.treasure){
            return true;
        } 
        else if (this.lose.includes(tileIndex)){
            return false;
        }
        else{
            return null;
        }
    }
}

