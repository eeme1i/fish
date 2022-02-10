import { getFontDefinitionFromNetwork } from "next/dist/server/font-utils";

export default function NewTreasureHunt(){
    console.log("Uusi peli alkaa...");

    try{
        let game = new Game(GetRandom(8));
        console.log(game);
    }
    catch{
        console.error("some error in game start lol");
    }
}

// game object
class Game{
    constructor(seed){
        // define lose and win squares by random numbers
        let numbers = GetNumbers(seed, 4, 8)
        this.treasure = numbers[0];
        numbers = numbers.slice(1);
        this.lose = numbers;
    }

    // return true if treasure, false if boom and null if empty
    checkSquare(squareNum){
        if (squareNum == this.treasure){
            return true;
        } 
        else if (this.lose.includes(squareNum)){
            return false;
        }
        else{
            return null;
        }
    }


}

// int, int, int... what they are called in js?? i'm from c# and python lol
// return num array with amount of numbers between 0 and maxValue, can't be the same
function GetNumbers(seed, amount, maxValue){
    let nums = [seed];
    let num = seed;

    for (let i = 0; i < amount; i++){
        while (true){
            num += GetRandom(maxValue);
            while (num >= maxValue){
                num -= maxValue;
            }
            if (!nums.includes(num)){
                nums += num;
                break;
            }
        }
    }
    return nums;
}

// get random number between 0 and max
function GetRandom(maxValue){
    return Math.floor(Math.random() * maxValue);
}