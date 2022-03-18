// Copyright Henri Vainio 2022
import GameStates from "./gameStates";
import {
  getNumbers,
  getRandom,
  arrayRemoveNum,
  updateElemText,
} from "./helpers";
import reactDom from "react-dom";
import getImgViewer from "../components/TreasureImg.js";
import PointCounter from "./pointCounter";

const foundTreasureMsg = "aarre";
const foundBombMsg = "poks";
const foundEmptyMsg = "tyhjä";

const treasureGetPoints = 100;
const bombLosePoints = 30;

// game states: ["waiting", "started", "ended"]

export default class Game {
  // input (int, str, int)
  constructor(
    tileAmount,
    idBody,
    tileDisplayName,
    difficulty = 3,
    scoreDisplay = undefined,
    imgViewBody = "imageElement"
  ) {
    let numbers = getNumbers(getRandom(8), difficulty + 1, tileAmount); // get 1 more for treasure
    this.tiles = tileAmount;
    this.treasure = numbers[0];
    this.bomb = numbers.slice(1);
    this.tileIdBody = idBody; // body of element id, for example "treasurePanel"
    this.notCheked = Array.from(Array(tileAmount + 1).keys());
    this.score = new PointCounter(0);
    this.scoreDisplay = scoreDisplay;
    this.tileDisplayName = tileDisplayName;
    this.state = GameStates.waiting;
    this.imgViewBody = imgViewBody;
  }

  /// public methods

  start() {
    // start created game
    this.state = GameStates.started;
    this.resetGame(this.tiles, this.tileDisplayName);
  }

  // input (int)
  checkTile(tileIndex) {
    // call this, when button pressed to check tile
    if (this.notCheked.includes(tileIndex) === false) {
      // tile is already checked
      return;
    }

    this.notCheked = arrayRemoveNum(tileIndex, this.notCheked);
    if (this.#checkNumber(tileIndex) === true) {
      // treasure
      this.#tileStateTreasure(tileIndex);
      this.#revealAll();
      this.#updateScore();
      this.state = GameStates.ended;
      return;
    }

    if (this.#checkNumber(tileIndex) === false) {
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
  resetGame(tileAmount, tileDisplayName) {
    // put tiles to "new game" state
    for (let i = 0; i <= tileAmount; i++) {
      document.getElementById(this.tileIdBody + i).innerText =
        tileDisplayName + (i + 1); // shift name by 1
      reactDom.render(
        getImgViewer(0),
        document.getElementById(this.imgViewBody + i)
      );
      this.#showTileText(i);
    }
    this.#resetScoreDisplay();
  }

  defineScoreDisplay(scoreDisplay) {
    this.scoreDisplay = scoreDisplay;
  }

  /// private methods

  // input (int)
  #setTileImg(tileIndex) {
    const state = this.#getImgState(tileIndex);
    if (state !== 0) {
      this.#hideTileText(tileIndex);
    }
    const elem = getImgViewer(state);
    reactDom.render(
      elem,
      document.getElementById(this.imgViewBody + tileIndex)
    );
  }

  #getImgState(tileIndex) {
    const boolState = this.#checkNumber(tileIndex);
    if (boolState === true) {
      return 2; // treasure
    }
    if (boolState === false) {
      return 1;
    }
    return 0;
  }

  // input (int)
  #tileStateTreasure(tileIndex) {
    this.#revealTile(tileIndex, foundTreasureMsg);
    this.score.add(treasureGetPoints);
    this.#setTileImg(tileIndex);
    //this.#hideTileText(tileIndex);
  }

  // input (int)
  #tileStateBoom(tileIndex) {
    this.#revealTile(tileIndex, foundBombMsg);
    this.score.subtract(bombLosePoints);
    this.#setTileImg(tileIndex);
    //this.#hideTileText(tileIndex);
  }

  // input (int)
  #tileStateEmpty(tileIndex) {
    this.#revealTile(tileIndex, foundEmptyMsg);
    this.#setTileImg(tileIndex);
  }

  // input (int)
  #checkNumber(tileIndex) {
    // return true if treasure, false if boom and null if empty
    if (tileIndex == this.treasure) {
      return true;
    }
    if (this.bomb.includes(tileIndex)) {
      return false;
    }
    return null;
  }

  #revealAll() {
    while (this.notCheked.length > 0) {
      let index = this.notCheked[0];
      let text = this.#getTileText(index);
      this.notCheked.shift();
      this.#revealTile(index, text);
      this.#setTileImg(index);
    }
  }

  // input (int)
  #getTileText(tileIndex) {
    if (this.#checkNumber(tileIndex) === true) {
      return foundTreasureMsg;
    }
    if (this.#checkNumber(tileIndex) === false) {
      return foundBombMsg;
    }
    return foundEmptyMsg;
  }

  //input (int, str)
  #revealTile(tileIndex, text) {
    updateElemText(this.tileIdBody + tileIndex, text);
  }

  // input (int)
  #updateScore(newScore = this.score.value) {
    if (this.scoreDisplay !== undefined) {
      updateElemText(this.scoreDisplay, newScore);
    }
  }

  #resetScoreDisplay() {
    this.#updateScore(0);
  }

  #checkIfLastTile() {
    if (this.notCheked.length <= 1) {
      // if only one piece left => end game
      this.#revealAll();
      this.#updateScore();
      this.state = GameStates.ended;
    }
  }

  // input (int)
  #hideTileText(tileIndex) {
    document.getElementById(this.tileIdBody + tileIndex).style.display = "none";
  }

  // input (int)
  #showTileText(tileIndex) {
    document.getElementById(this.tileIdBody + tileIndex).style.display =
      "block";
  }

  showAllText() {
    for (let i = 0; i <= this.tileAmount; i++) {
      this.#showTileText(i);
    }
  }
  hideAllText() {
    for (let i = 0; i <= this.tileAmount; i++) {
      this.#showTileText(i);
    }
  }
}
