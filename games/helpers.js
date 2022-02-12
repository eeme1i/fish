// Helper functions for game mechanics



// return num array with amount of random numbers between 0 and maxValue
// does not include same number twice
// input (int, int, int) are they int in js?? i'm from c# and python 
export function getNumbers(seed, amount, maxValue){
    let nums = [seed];
    let num = seed;

    for (let i = 0; i < amount; i++){
        while (true){
            num += getRandom(maxValue);
            while (num > maxValue){
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

// remove number or other object from array and return array 
// int is number you want to remove, not index
// input (int, array)
export function arrayRemoveNum(num, array){
    let index = array.indexOf(num);
    array.splice(index, 1);
    return array;
}


// get random number between 0 and max
// input (int)
export function getRandom(maxValue){
    return Math.floor(Math.random() * maxValue);
}




// input (str, str)
export function updateElemText(elemId, text){
    (document.getElementById(elemId)).innerHTML = text;
}