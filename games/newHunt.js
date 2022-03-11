// Copyright Henri Vainio 2022
import GameStates, { ImgStates } from "./gameStates";
import { getNumbers, getRandom, arrayRemoveNum, updateElemText }  from "./helpers";
import PointCounter from "./pointCounter";
import { updateImgsStart, updateSingleImg} from "./helpers";
const foundTreasureMsg = "aarre";
const foundBombMsg = "poks";
const foundEmptyMsg = "tyhjä";

const treasureGetPoints = 100;
const bombLosePoints = 38;




// game states: ["waiting", "started", "ended"]


export default class Game{
    // input (int, str, int)
    constructor(tileAmount, idBody, tileDisplayName, tileImgs, difficulty = 3, scoreDisplay = undefined){
        let numbers = getNumbers(getRandom(8), difficulty + 1, tileAmount)  // get 1 more for treasure
        this.tiles = tileAmount;
        this.treasure = numbers[0];
        this.bomb = numbers.slice(1);
        this.tileIdBody = idBody;   // body of element id, for example "treasurePanel"
        this.notCheked = Array.from(Array(tileAmount + 1).keys());
        this.score = new PointCounter(0);
        this.scoreDisplay = scoreDisplay;
        this.tileDisplayName = tileDisplayName;
        this.state = GameStates.waiting;
        this.#setUpArrays(tileImgs);
    }



    /// public methods
    
    start(){
        // start created game
        this.state = GameStates.started;
        this.resetGame(this.tiles, this.tileDisplayName);
    }
    
    // input (int)
    checkTile(tileIndex){
        // call this, when button pressed to check tile 
        if (this.notCheked.includes(tileIndex) === false){
            // tile is already checked
            return;
        }

        this.notCheked = arrayRemoveNum(tileIndex, this.notCheked);

        const isWinning = this.#checkNumber(tileIndex);

        if(isWinning === true){
            // treasure
            this.#tileStateTreasure(tileIndex);
            this.#revealAll();
            this.#updateScore();
            this.state = GameStates.ended;
            return;
        }
        
        if(isWinning === false){
            // bomb
            this.#tileStateBoom(tileIndex);
            this.#checkIfLastTile();
            return;
        }
        //empty
        this.#tileStateEmpty(tileIndex);
        this.#checkIfLastTile();
    }
    
    // input (int, str)
    resetGame(tileAmount, tileDisplayName){
        // put tiles to "new game" state
        updateImgsStart(this.tileImgs, ImgStates.start);

        for(let i = 0; i <= tileAmount; i++){
            document.getElementById(this.tileIdBody + i).innerText = tileDisplayName + (i + 1);   // shift name by 1
        }
        this.#resetScoreDisplay();
    }

    defineScoreDisplay(scoreDisplay){
        this.scoreDisplay = scoreDisplay;
    }
    


    showAllTileText(){

        for (let i = 0; i <= this.tiles; i++){
            this.#showTileText(i);
        }
    }
    
    hideAllTileText(){
        for (let i = 0; i <= this.tiles; i++){
            this.#hideTileText(i);
        }
    }





    /// private methods 

    #setUpArrays(tileImgs){
        if (Array.isArray(tileImgs)){
            this.tileImgs = tileImgs;
            return;
        }
        throw new Error("[NewHunt.Game.#setUpArrays] tileImgs is not array");
    }

    // input (int)
    #tileStateTreasure(tileIndex){
        this.#revealTile(tileIndex, foundTreasureMsg);
        this.#showImage(tileIndex);
        this.score.add(treasureGetPoints);
    }

    // input (int)
    #tileStateBoom(tileIndex){
        this.#revealTile(tileIndex, foundBombMsg);
        this.#showImage(tileIndex);
        this.score.subtract(bombLosePoints)
    }

    // input (int)
    #tileStateEmpty(tileIndex){
        this.#showImage(tileIndex);
        this.#revealTile(tileIndex, foundEmptyMsg);
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



    #revealAll(){
        while (this.notCheked.length > 0){
            let index = this.notCheked[0];
            let text = this.#getTileText(index);
            this.notCheked.shift();
            this.#revealTile(index, text);
            this.#showImage(index);
        }
    }

    // input (int)
    #showImage(index){
        const setState = this.#getTileImgState(index);
        updateSingleImg(this.tileImgs[index], setState);
        this.#updateTileTextVisibility(index, setState);
    }

    // input (int)
    #getTileText(tileIndex){
        if (this.#checkNumber(tileIndex) === true){
            return foundTreasureMsg;
        }
        if(this.#checkNumber(tileIndex) === false){
            return foundBombMsg;
        }
        return foundEmptyMsg;
    }
    
    // input (int)
    #getTileImgState(tileIndex){
        if (this.#checkNumber(tileIndex) === true){
            return ImgStates.win;
        }
        if(this.#checkNumber(tileIndex) === false){
            return ImgStates.lose;
        }
        return ImgStates.empty;
    }

    //input (int, str)
    #revealTile(tileIndex, text){
        updateElemText(this.tileIdBody + tileIndex, text);
    }

    // input (int)
    #updateScore(newScore = this.score.value){
        if (this.scoreDisplay !== undefined){
            updateElemText(this.scoreDisplay, newScore);
        }
    }

    #resetScoreDisplay(){
        this.#updateScore(0);
    }
    
    #checkIfLastTile(){
        if (this.notCheked.length <= 1){    // if only one piece left => end game
            this.#revealAll();
            this.#updateScore();
            this.state = GameStates.ended;
        }
    }

    #updateTileTextVisibility(index, setState){
        if (setState == ImgStates.win || setState == ImgStates.lose){
            this.#hideTileText(index);
            return;
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

